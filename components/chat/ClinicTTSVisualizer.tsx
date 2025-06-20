import React, { useEffect, useRef, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { getOpenAIResponse, getOpenAITTSUrl } from "../../lib/openai";
import { useChat } from "../../contexts/ChatContext";
import WavyCircleVisualizer from "./WavyCircleVisualizer";
import Image from "next/image";

const ClinicTTSVisualizer: React.FC<{
  squashContent?: boolean;
}> = ({ squashContent = false }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
  const [closeActive, setCloseActive] = useState(false);
  const [ttsError, setTTSError] = useState<string | null>(null);

  // Speech recognition
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const { messages, patient } = useChat();

  // Conversation history for subtitles
  const [subtitleHistory, setSubtitleHistory] = useState<
    { from: "user" | "ai"; text: string; evaluation?: string }[]
  >([]);

  // Determine wavy circle color based on difficulty
  let wavyColor = "#279FD5"; // default blue
  if (patient?.difficulty === "Advanced") wavyColor = "#EC5638"; // orange
  if (patient?.difficulty === "Expert") wavyColor = "#B91C1C"; // red

  // Handle mic button click
  const handleMicClick = () => {
    if (!browserSupportsSpeechRecognition) {
      return;
    }
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      resetTranscript();
      SpeechRecognition.startListening({ continuous: false });
    }
  };

  // Helper to play audio and connect to analyser
  async function playAudioWithVisualizer(audioUrl: string, answer: string) {
    if (!audioRef.current) return;
    audioRef.current.src = audioUrl;
    audioRef.current.crossOrigin = "anonymous";
    audioRef.current.load();

    // Setup Web Audio API for visualization
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext)();
    }
    const audioCtx = audioCtxRef.current;

    // Only create the source node once
    if (!sourceRef.current) {
      sourceRef.current = audioCtx.createMediaElementSource(audioRef.current);
    }
    if (analyserRef.current) analyserRef.current.disconnect();
    analyserRef.current = audioCtx.createAnalyser();
    analyserRef.current.fftSize = 256;
    sourceRef.current.connect(analyserRef.current);
    analyserRef.current.connect(audioCtx.destination);
    setAnalyser(analyserRef.current);

    // Use the passed answer directly
    const finalAnswer =
      answer && answer.trim()
        ? answer.trim()
        : "[AI response error: No valid answer returned. Please try again.]";

    audioRef.current.onended = () => {
      setAnalyser(null);
      setIsSpeaking(false);
    };

    let fallbackTimer: NodeJS.Timeout | null = null;
    const addAnswerToHistory = () => {
      setSubtitleHistory((prev) => [
        ...prev,
        { from: "ai", text: finalAnswer },
      ]);
    };
    audioRef.current.onplay = () => {
      if (fallbackTimer) clearTimeout(fallbackTimer);
      setIsSpeaking(true);
      addAnswerToHistory();
    };
    audioRef.current.onerror = () => {
      if (fallbackTimer) clearTimeout(fallbackTimer);
      setIsSpeaking(false);
      addAnswerToHistory();
    };
    fallbackTimer = setTimeout(() => {
      addAnswerToHistory();
    }, 1000);

    audioRef.current.play();
  }

  // When speech ends and transcript is available, send to OpenAI
  useEffect(() => {
    if (!listening && transcript.trim()) {
      (async () => {
        setIsLoading(true);
        setTTSError(null);
        try {
          // Build conversation history string
          const history = [
            ...messages,
            {
              sender: "user",
              text: transcript.trim(),
              time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
            },
          ]
            .map((m) => `${m.sender}: ${m.text}`)
            .join("\n");
          const promptToSend = history;
          const response = await getOpenAIResponse(promptToSend);
          try {
            const audioUrl = await getOpenAITTSUrl(
              response,
              "alloy",
              "tts-1",
              1.0
            );
            await playAudioWithVisualizer(audioUrl, response);
          } catch (err) {
            setTTSError("TTS failed to generate audio. Please try again.");
            if (err instanceof Error) {
              console.error("TTS error:", err.message);
            } else {
              console.error("TTS error:", err);
            }
          }
        } catch (err) {
          setTTSError("Failed to get AI response. Please try again.");
          if (err instanceof Error) {
            console.error("AI error:", err.message);
          } else {
            console.error("AI error:", err);
          }
        } finally {
          setIsLoading(false);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listening]);

  // Add transcript to history when user finishes speaking
  useEffect(() => {
    if (!listening && transcript.trim()) {
      setSubtitleHistory((prev) => [
        ...prev,
        { from: "user", text: transcript.trim() },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listening]);

  return (
    <div
      className='flex flex-col items-center justify-start h-full w-full min-h-0 flex-1'
      style={
        squashContent
          ? {
              backgroundImage: 'url("/bg.svg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100%",
              overflow: "hidden",
            }
          : {
              backgroundImage: 'url("/bg.svg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "100vh",
              maxHeight: "100vh",
              overflow: "hidden",
            }
      }
    >
      {/* Patient circle and info - fixed height, centered, no overlay */}
      <div
        className='flex flex-col items-center justify-center'
        style={{ height: 320, flex: "none" }}
      >
        <div
          className='flex flex-col items-center justify-center relative'
          style={{ width: 292, height: 292 }}
        >
          <WavyCircleVisualizer
            analyser={analyser}
            isActive={isSpeaking}
            size={292}
            color={wavyColor}
          />
          <div
            className='flex items-center justify-center rounded-full shadow-xl transition-all duration-100 bg-[#279FD5]'
            style={{
              width: 220,
              height: 220,
              boxShadow: isSpeaking
                ? `0 0 ${16 + 24}px #279FD5aa`
                : "0 2px 16px #279FD5aa",
              position: "absolute",
              top: 36,
              left: 36,
            }}
          >
            <span className='text-white text-3xl font-bold'>
              {patient?.patientInfo.avatarText}
            </span>
          </div>
        </div>
        {/* Patient Info - directly below circle */}
        <div className='mt-4 text-center'>
          <div className='text-2xl font-bold text-[#1E4462]'>
            {patient?.patientInfo.name}
          </div>
          <div className='text-[#1E4462] text-base opacity-80'>
            {patient?.patientInfo.details}
          </div>
        </div>
      </div>
      {/* Conversation subtitles/history area - flex-1, always scrollable, px-4, maxWidth 340 */}
      <div
        className='flex-1 min-h-0 overflow-y-auto w-full px-4'
        style={{ maxWidth: 340, margin: "0 auto" }}
      >
        <div className='flex flex-col gap-2 w-full'>
          {subtitleHistory.map((msg, idx) => (
            <div
              key={idx}
              className={`rounded-lg px-3 py-2 text-base shadow border w-full text-left ${
                msg.from === "user"
                  ? "bg-white/90 text-gray-800 border-gray-200"
                  : "bg-blue-50 text-blue-900 border-blue-200"
              }`}
              style={{ wordBreak: "break-word" }}
            >
              <span className='font-semibold'>
                {msg.from === "user" ? "You" : "Patient"}:
              </span>{" "}
              {msg.text}
            </div>
          ))}
        </div>
      </div>
      {/* Mic Button and Transition Button - centered at the bottom of the main content */}
      <div
        className='flex flex-col items-center w-full gap-2 mt-6 mb-2'
        style={{ flex: "none" }}
      >
        <div className='flex justify-center items-center w-full gap-6'>
          {/* Mic Button */}
          <button
            className={`rounded-full bg-[#EC5638] shadow-xl flex items-center justify-center transition-all duration-200 ${
              listening
                ? "scale-110 ring-4 ring-[#EC5638]/30"
                : "hover:scale-110"
            }`}
            style={{ width: 80, height: 80 }}
            onClick={handleMicClick}
            disabled={isLoading || isSpeaking}
            aria-label={listening ? "Stop listening" : "Start listening"}
          >
            <svg
              width='40'
              height='40'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#fff'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <rect x='9' y='2' width='6' height='12' rx='3' />
              <path d='M5 10v2a7 7 0 0 0 14 0v-2' />
              <line x1='12' y1='19' x2='12' y2='22' />
              <line x1='8' y1='22' x2='16' y2='22' />
            </svg>
          </button>
          {/* Transition Button */}
          <button
            className={`rounded-full bg-[#EC5638] shadow-xl flex items-center justify-center transition-all duration-300 focus:outline-none
              ${closeActive ? "scale-110" : "hover:scale-110"}
            `}
            style={{ width: 64, height: 64 }}
            onClick={() => {
              setCloseActive(true);
              setTimeout(() => {
                setCloseActive(false);
                window.location.href = "/chat";
              }, 300);
            }}
            aria-label='Back to Chat'
          >
            <Image
              src='/chat-icon.svgg.svg'
              alt='Back to Chat'
              width={36}
              height={36}
              style={{
                filter: closeActive
                  ? undefined
                  : "grayscale(1) brightness(0.7)",
              }}
            />
          </button>
        </div>
        {/* TTS Error Message */}
        {ttsError && (
          <div className='text-red-600 text-sm mt-2 text-center max-w-xs'>
            {ttsError}
          </div>
        )}
      </div>
      {/* Hidden audio element for TTS playback */}
      <audio ref={audioRef} hidden />
    </div>
  );
};

export default ClinicTTSVisualizer;
