export async function getCohereResponse(
  userPrompt: string,
  systemPrompt?: string
): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_COHERE_API_KEY || "COHERE-API-KEY";
  const prompt = systemPrompt
    ? `${systemPrompt.trim()}\n\n${userPrompt}`
    : userPrompt;
  const response = await fetch("https://api.cohere.ai/v1/generate", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "command",
      prompt,
      temperature: 0.7,
    }),
  });
  if (!response.ok) throw new Error("Cohere API error");
  const data = await response.json();
  return data.generations?.[0]?.text?.trim() || "";
}
