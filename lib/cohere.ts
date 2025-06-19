// All Cohere API calls are made via fetch, no SDK import needed.

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

export async function getEmbeddings(texts: string[]) {
  const apiKey = process.env.NEXT_PUBLIC_COHERE_API_KEY || "COHERE-API-KEY";
  const response = await fetch("https://api.cohere.ai/v1/embed", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "embed-english-v3.0",
      texts,
      input_type: "search_document",
    }),
  });
  if (!response.ok) {
    const errorText = await response.text();
    console.error("Cohere Embed API error response:", errorText);
    throw new Error("Cohere Embed API error");
  }
  const data = await response.json();
  return data.embeddings;
}

export async function rerank(query: string, documents: string[]) {
  const apiKey = process.env.NEXT_PUBLIC_COHERE_API_KEY || "COHERE-API-KEY";
  const response = await fetch("https://api.cohere.ai/v1/rerank", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "rerank-english-v2.0",
      query,
      documents,
    }),
  });
  if (!response.ok) {
    const errorText = await response.text();
    console.error("Cohere Rerank API error response:", errorText);
    throw new Error("Cohere Rerank API error");
  }
  const data = await response.json();
  return data.results.map((r: any) => documents[r.index]);
}

export async function generateAnswer(context: string, userQuery: string) {
  const apiKey = process.env.NEXT_PUBLIC_COHERE_API_KEY || "COHERE-API-KEY";
  const prompt = `Context:\n${context}\n\nQuestion: ${userQuery}\nAnswer:`;
  const response = await fetch("https://api.cohere.ai/v1/generate", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "command-xlarge",
      prompt,
    }),
  });
  if (!response.ok) throw new Error("Cohere Generate API error");
  const data = await response.json();
  return data.generations[0].text.trim();
}
