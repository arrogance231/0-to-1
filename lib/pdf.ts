import pdfParse from "pdf-parse";
export async function pdfToChunks(
  buffer: Buffer,
  chunkSize = 1000
): Promise<string[]> {
  const data = await pdfParse(buffer);
  const text = data.text;
  const sentences = text.split(/(?<=[.?!])\s+/);
  const chunks: string[] = [];
  let current = "";
  for (const sentence of sentences) {
    if ((current + sentence).length > chunkSize) {
      chunks.push(current.trim());
      current = "";
    }
    current += sentence + " ";
  }
  if (current.trim()) chunks.push(current.trim());
  return chunks;
}
