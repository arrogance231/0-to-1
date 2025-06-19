export async function getElevenLabsAudio(
  text: string,
  voiceId?: string,
  modelId?: string
): Promise<{ url: string; blob: Blob; type: string }> {
  const apiKey = process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY;
  const resolvedVoiceId =
    voiceId ||
    process.env.NEXT_PUBLIC_ELEVENLABS_VOICE_ID ||
    "EXAVITQu4vr4xnSDxMaL";
  const resolvedModelId = modelId || "eleven_multilingual_v2";
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${resolvedVoiceId}`;

  const body = {
    text,
    model_id: resolvedModelId,
    voice_settings: {
      stability: 0.5,
      similarity_boost: 0.75,
      style: 0.5,
      use_speaker_boost: true,
      speed: 0.85,
    },
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "xi-api-key": apiKey!,
      "Content-Type": "application/json",
      Accept: "audio/mpeg",
    },
    body: JSON.stringify(body),
  });

  const contentType = response.headers.get("content-type") || "";
  const blob = await response.blob();

  console.log("TTS status:", response.status);
  console.log("TTS content-type:", contentType);
  console.log("TTS blob size:", blob.size);

  if (!response.ok || !contentType.includes("audio") || blob.size === 0) {
    // Try to get error text for debugging
    let errorText = "";
    try {
      errorText = await response.text();
    } catch {}
    throw new Error(
      `Failed to fetch TTS audio: status=${response.status}, content-type=${contentType}, error=${errorText}`
    );
  }

  const audioUrl = URL.createObjectURL(blob);
  return { url: audioUrl, blob, type: contentType };
}
