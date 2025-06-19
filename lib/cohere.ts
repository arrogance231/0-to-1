export async function getCohereResponse(userPrompt: string): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_COHERE_API_KEY || "COHERE-API-KEY";
  const systemPrompt = `You are a Filipino lola (grandmother). You are warm, caring, and wise, always sharing advice and stories from your life in the Philippines. You speak ONLY in Tagalog, never in English or any other language. Respond thoughtfully and helpfully, as a loving lola would, always using Tagalog words and expressions.`;
  const prompt = `${systemPrompt}\n\n${userPrompt}`;
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
