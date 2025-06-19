import { IncomingForm, Fields, Files, File } from "formidable";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { pdfToChunks } from "../../lib/pdf";
import { getEmbeddings } from "../../lib/cohere";
import { upsertChunks, initPinecone } from "../../lib/pinecone";

export const config = { api: { bodyParser: false } };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Ingest endpoint called");
  if (req.method !== "POST") return res.status(405).end();
  const form = new IncomingForm();
  form.parse(req, async (err: any, fields: Fields, files: Files) => {
    console.log("Files received:", files);
    let file = files.file;
    if (Array.isArray(file)) file = file[0];
    if (!file || !file.filepath) {
      return res
        .status(400)
        .json({ error: "No file uploaded or file path missing." });
    }
    const buffer = fs.readFileSync(file.filepath);
    const chunks = await pdfToChunks(buffer);
    // Batch embedding requests to Cohere (max 96 per call)
    const BATCH_SIZE = 96;
    let embeddings: number[][] = [];
    for (let i = 0; i < chunks.length; i += BATCH_SIZE) {
      const batch = chunks.slice(i, i + BATCH_SIZE);
      const batchEmbeddings = await getEmbeddings(batch);
      embeddings = embeddings.concat(batchEmbeddings);
    }
    // Clear the Pinecone index before upserting new vectors
    const idx = await initPinecone();
    console.log("Clearing Pinecone index before new ingest...");
    await idx.deleteAll();
    await upsertChunks(chunks, embeddings);
    res.status(200).json({ message: "PDF ingested", chunks: chunks.length });
  });
}
