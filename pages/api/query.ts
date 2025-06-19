import { getEmbeddings, generateAnswer } from "../../lib/cohere";
import { queryChunks } from "../../lib/pinecone";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();
  const { query } = req.body;
  const [queryEmbedding] = await getEmbeddings([query]);
  const topK = await queryChunks(queryEmbedding, 5);
  console.log("Query:", query, "TopK:", topK);
  if (!topK || topK.length === 0) {
    return res.status(200).json({
      answer: "No relevant context found.",
      context: "",
      reranked: [],
    });
  }
  try {
    const context = topK.join("\n");
    const answer = await generateAnswer(context, query);
    res.status(200).json({ answer, context, reranked: topK });
  } catch (err: any) {
    console.error("Query error:", err);
    res.status(500).json({ error: err.message || err.toString() });
  }
}
