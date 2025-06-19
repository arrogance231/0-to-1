import { Pinecone } from "@pinecone-database/pinecone";

const pinecone = new Pinecone();
let index: any = null;

export async function initPinecone() {
  if (!index) {
    index = pinecone.index(process.env.PINECONE_INDEX!);
  }
  return index;
}

export async function upsertChunks(chunks: string[], embeddings: number[][]) {
  const idx = await initPinecone();
  const vectors = chunks.map((text, i) => ({
    id: `chunk-${i}-${Date.now()}`,
    values: embeddings[i],
    metadata: { text },
  }));
  console.log("Upserting", vectors.length, "vectors to Pinecone");
  await idx.upsert(vectors);
}

export async function queryChunks(queryEmbedding: number[], topK = 5) {
  const idx = await initPinecone();
  console.log("Querying Pinecone with vector of length", queryEmbedding.length);
  const result = await idx.query({
    vector: queryEmbedding,
    topK,
    includeMetadata: true,
  });
  console.log("Pinecone returned", result.matches?.length || 0, "matches");
  return result.matches.map((m: any) => m.metadata.text);
}
