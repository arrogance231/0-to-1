import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

type Role = "user" | "system";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const { userPrompt, systemPrompt } = req.body;

  try {
    const messages = [
      ...(systemPrompt
        ? [{ role: "system" as Role, content: systemPrompt }]
        : []),
      { role: "user" as Role, content: userPrompt },
    ];
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages,
      temperature: 0.7,
    });
    const text = completion.choices?.[0]?.message?.content || "";
    res.status(200).json({ text });
  } catch (err: unknown) {
    res
      .status(500)
      .json({ error: err instanceof Error ? err.message : "OpenAI error" });
  }
}
