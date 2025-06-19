"use client";
import { useRef, useState } from "react";
import { getCohereResponse } from "../lib/cohere";
// import { getElevenLabsAudio } from "../lib/elevenlabs";

export default function AiTTSChat() {
  const [prompt, setPrompt] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string>("");
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
      const cohereResponse = await getCohereResponse(fullPrompt, systemPrompt);
      setSubtitle(cohereResponse);

      // Disabled ElevenLabs TTS
      // const {
      //   url: audioUrl,
      //   blob,
      //   type,
      // } = await getElevenLabsAudio(cohereResponse);
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
    <div>
      <h1>AI Chat (Cohere)</h1>
      <div style={{ margin: "20px 0" }}>
        <label>
          Persona (.txt):
          <input
            type='file'
            accept='.txt'
            onChange={(e) => handleFileUpload(e, "persona")}
            style={{ marginLeft: 8 }}
            disabled={loading}
          />
        </label>
      </div>
      {persona && (
        <div
          style={{
            margin: "10px 0",
            padding: 10,
            background: "#f8f8f8",
            border: "1px solid #ccc",
            borderRadius: 4,
          }}
        >
          <strong>Persona:</strong>
          <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>{persona}</pre>
        </div>
      )}
      <div style={{ margin: "20px 0" }}>
        <label>
          System Prompt (.txt):
          <input
            type='file'
            accept='.txt'
            onChange={(e) => handleFileUpload(e, "system")}
            style={{ marginLeft: 8 }}
            disabled={loading}
          />
        </label>
      </div>
      {systemPrompt && (
        <div
          style={{
            margin: "10px 0",
            padding: 10,
            background: "#f0f8ff",
            border: "1px solid #99c",
            borderRadius: 4,
          }}
        >
          <strong>System Prompt:</strong>
          <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>
            {systemPrompt}
          </pre>
        </div>
      )}
      {/* <audio
        ref={audioRef}
        controls
        src={audioUrl}
        autoPlay
        style={{ display: audioUrl ? "block" : "none", margin: "20px 0" }}
      /> */}
      <div style={{ margin: "20px 0" }}>
        <input
          type='text'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder='Type your prompt'
          style={{ width: 300, marginRight: 8 }}
          onKeyDown={(e) => {
            if (e.key === "Enter") handlePrompt();
          }}
          disabled={loading}
        />
        <button onClick={handlePrompt} disabled={loading}>
          {loading ? "Loading..." : "Send"}
        </button>
      </div>
      {subtitle && (
        <div
          style={{
            marginTop: 20,
            textAlign: "center",
            fontSize: "1.5rem",
            color: "#333",
            textShadow: "0 0 8px #fff",
          }}
        >
          {subtitle}
        </div>
      )}
    </div>
  );
}
