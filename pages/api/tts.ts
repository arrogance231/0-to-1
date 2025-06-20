import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const { text, voice = "alloy", model = "tts-1", speed = 1.0 } = req.body;
  if (!text) return res.status(400).json({ error: "Missing text" });

  try {
    const ttsRes = await fetch("https://api.openai.com/v1/audio/speech", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        input: text,
        voice,
        speed,
        response_format: "mp3",
      }),
    });

    if (!ttsRes.ok) {
      const err = await ttsRes.text();
      return res.status(500).json({ error: err });
    }

    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Content-Disposition", 'inline; filename="speech.mp3"');
    const buffer = Buffer.from(await ttsRes.arrayBuffer());
    res.status(200).send(buffer);
  } catch (err: any) {
    res.status(500).json({ error: err.message || "TTS error" });
  }
}
