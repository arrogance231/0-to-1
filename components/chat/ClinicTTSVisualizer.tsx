import React, { useEffect, useRef, useState } from "react";
import AnimatedMicButton from "./AnimatedMicButton";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { getOpenAIResponse, getOpenAITTSUrl } from "../../lib/openai";
import { useChat } from "../../contexts/ChatContext";
import WavyCircleVisualizer from "./WavyCircleVisualizer";
import Image from "next/image";
import ActionButtons from "@/components/chat/ActionButtons";

const avatarUrl = "/matt.svg"; // Replace with actual avatar if needed

const ClinicTTSVisualizer: React.FC<{
  onClose: () => void;
  squashContent?: boolean;
}> = ({ onClose, squashContent = false }) => {
  const [aiResponse, setAiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [amplitude, setAmplitude] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const [language, setLanguage] = useState<string>("fil-PH");
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
  const [closeActive, setCloseActive] = useState(false);

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

  // Handle mic button click
  const handleMicClick = () => {
    setError(null);
    setAiResponse("");
    setStatus("");
    if (!browserSupportsSpeechRecognition) {
      setError("Speech recognition not supported in this browser.");
      return;
    }
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      resetTranscript();
      setStatus("Listening...");
      SpeechRecognition.startListening({ continuous: false, language });
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
        (window as any).webkitAudioContext)();
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

    setIsSpeaking(true);
    setStatus("Playing response...");

    // Use the passed answer directly
    let finalAnswer =
      answer && answer.trim()
        ? answer.trim()
        : "[AI response error: No valid answer returned. Please try again.]";

    audioRef.current.onended = () => {
      setIsSpeaking(false);
      setStatus("");
      setAnalyser(null);
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
      addAnswerToHistory();
    };
    audioRef.current.onerror = () => {
      if (fallbackTimer) clearTimeout(fallbackTimer);
      setError("Audio playback failed. Showing answer only.");
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
        setError(null);
        setAiResponse("");
        setStatus("Prompt received. Sending to AI...");
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
          let promptToSend = history;
          if (language === "fil-PH") {
            promptToSend += "\nThe answer must be in Filipino/Tagalog.";
          }
          const response = await getOpenAIResponse(promptToSend);
          setAiResponse(response);
          setStatus("Generating voice with OpenAI TTS...");
          try {
            const audioUrl = await getOpenAITTSUrl(
              response,
              "alloy",
              "tts-1",
              1.0
            );
            await playAudioWithVisualizer(audioUrl, response);
          } catch (err: any) {
            setError("OpenAI TTS failed: " + (err.message || "Unknown error"));
            setStatus("");
          }
        } catch (err: any) {
          setError(err.message || "Error getting response");
          setStatus("");
        } finally {
          setIsLoading(false);
        }
      })();
    } else if (listening) {
      setStatus("Listening...");
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
          />
          <div
            className='flex items-center justify-center rounded-full shadow-xl transition-all duration-100 bg-[#279FD5]'
            style={{
              width: 220,
              height: 220,
              boxShadow:
                amplitude > 0.1
                  ? `0 0 ${16 + amplitude * 24}px #279FD5aa`
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
        className='flex justify-center items-center w-full gap-6 mt-6 mb-2'
        style={{ flex: "none" }}
      >
        {/* Mic Button */}
        <button
          className={`rounded-full bg-[#EC5638] shadow-xl flex items-center justify-center transition-all duration-200 ${
            listening ? "scale-110 ring-4 ring-[#EC5638]/30" : "hover:scale-110"
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
              filter: closeActive ? undefined : "grayscale(1) brightness(0.7)",
            }}
          />
        </button>
      </div>
      {/* Hidden audio element for TTS playback */}
      <audio ref={audioRef} hidden />
    </div>
  );
};

export default ClinicTTSVisualizer;
