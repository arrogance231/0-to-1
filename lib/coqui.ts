export async function getCoquiXTTSUrl(text: string, language: string = "fil") {
  // Filipino: "fil", English: "en"
  const apiUrl = "https://huggingface.co/spaces/coqui/XTTS";
  const payload = {
    text,
    language,
    // Optionally add speaker or other params if needed
  };

  const response = await fetch(`${apiUrl}/api/tts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch TTS audio from Coqui XTTS");
  }

  const data = await response.json();
  if (!data.audio_url) throw new Error("No audio URL returned from Coqui XTTS");
  return data.audio_url as string;
}
