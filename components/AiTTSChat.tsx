"use client";
import React, { useState } from "react";
import { getOpenAIResponse } from "../lib/openai";
// import { getElevenLabsAudio } from "../lib/elevenlabs";

export default function AiTTSChat() {
  const [prompt, setPrompt] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [persona, setPersona] = useState<string>("");
  const [systemPrompt, setSystemPrompt] = useState<string>("");
  // const audioRef = useRef<HTMLAudioElement | null>(null);

  function handleFileUpload(
    e: React.ChangeEvent<HTMLInputElement>,
    type: "persona" | "system"
  ) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      if (type === "persona")
        setPersona((event.target?.result as string) || "");
      if (type === "system")
        setSystemPrompt((event.target?.result as string) || "");
    };
    reader.readAsText(file);
  }

  async function handlePrompt() {
    if (!prompt.trim()) return;
    setLoading(true);
    setSubtitle("");
    try {
      // Compose the full prompt
      const fullPrompt = persona
        ? `${persona.trim()}

${prompt.trim()}`
        : prompt.trim();
      // Pass systemPrompt as the system prompt
      const openaiResponse = await getOpenAIResponse(fullPrompt, systemPrompt);
      setSubtitle(openaiResponse);

      // Disabled ElevenLabs TTS
      // const {
      //   url: audioUrl,
      //   blob,
      //   type,
      // } = await getElevenLabsAudio(openaiResponse);
      // console.log("Audio blob type:", type, "size:", blob.size);
      // setAudioUrl(audioUrl);
      // setTimeout(() => {
      //   if (audioRef.current) {
      //     audioRef.current.play().catch((err) => {
      //       console.error("Audio playback failed:", err);
      //       setSubtitle("Audio playback failed: " + err.message);
      //     });
      //   }
      // }, 100);
    } catch (err) {
      setSubtitle("Error: " + (err as Error).message);
    }
    setLoading(false);
    setPrompt("");
  }

  return (
    <div className='max-w-md mx-auto'>
      <h1 className='text-2xl font-bold text-center mb-6 text-gray-800'>
        AI Chat
      </h1>

      <div className='space-y-4 mb-6'>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Persona (.txt):
          </label>
          <input
            type='file'
            accept='.txt'
            onChange={(e) => handleFileUpload(e, "persona")}
            className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100'
            disabled={loading}
          />
        </div>

        {persona && (
          <div className='bg-blue-50 border border-blue-200 rounded-lg p-3'>
            <strong className='text-sm font-medium text-blue-800'>
              Persona:
            </strong>
            <pre className='text-sm text-blue-700 mt-1 whitespace-pre-wrap'>
              {persona}
            </pre>
          </div>
        )}

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            System Prompt (.txt):
          </label>
          <input
            type='file'
            accept='.txt'
            onChange={(e) => handleFileUpload(e, "system")}
            className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100'
            disabled={loading}
          />
        </div>

        {systemPrompt && (
          <div className='bg-green-50 border border-green-200 rounded-lg p-3'>
            <strong className='text-sm font-medium text-green-800'>
              System Prompt:
            </strong>
            <pre className='text-sm text-green-700 mt-1 whitespace-pre-wrap'>
              {systemPrompt}
            </pre>
          </div>
        )}
      </div>

      <div className='space-y-4'>
        <div className='flex gap-2'>
          <input
            type='text'
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder='Type your prompt...'
            className='flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            onKeyDown={(e) => {
              if (e.key === "Enter") handlePrompt();
            }}
            disabled={loading}
          />
          <button
            onClick={handlePrompt}
            disabled={loading}
            className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {loading ? "..." : "Send"}
          </button>
        </div>

        {subtitle && (
          <div className='bg-white border border-gray-200 rounded-lg p-4 shadow-sm'>
            <h3 className='text-sm font-medium text-gray-700 mb-2'>
              Response:
            </h3>
            <p className='text-gray-800 leading-relaxed'>{subtitle}</p>
          </div>
        )}
      </div>
    </div>
  );
}
