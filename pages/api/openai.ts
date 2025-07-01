import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

// Check if API key is available
if (!process.env.OPENAI_API_KEY) {
  console.error("OPENAI_API_KEY is not set in environment variables");
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type Role = "user" | "system";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  // Check if API key is available
  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({
      error:
        "OpenAI API key is not configured. Please set OPENAI_API_KEY in your environment variables.",
    });
  }

  const { userPrompt, systemPrompt } = req.body;

  if (!userPrompt) {
    return res.status(400).json({ error: "userPrompt is required" });
  }

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
    console.error("OpenAI API error:", err);
    res.status(500).json({
      error: err instanceof Error ? err.message : "OpenAI API error",
    });
  }
}
