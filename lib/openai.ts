// All OpenAI API calls are made via the OpenAI SDK or fetch.

export async function getOpenAIResponse(
  userPrompt: string,
  systemPrompt?: string
): Promise<string> {
  const response = await fetch("/api/openai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userPrompt, systemPrompt }),
  });
  if (!response.ok) throw new Error("OpenAI API error");
  const data = await response.json();
  return data.text || "";
}

export async function getOpenAITTSUrl(
  text: string,
  voice = "alloy",
  model = "tts-1",
  speed = 1.0
): Promise<string> {
  const res = await fetch("/api/tts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, voice, model, speed }),
  });
  if (!res.ok) throw new Error("OpenAI TTS failed");
  const blob = await res.blob();
  return URL.createObjectURL(blob);
}
