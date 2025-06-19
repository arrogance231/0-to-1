import * as SpeechSDK from "microsoft-cognitiveservices-speech-sdk";

export async function speakWithVisemes(
  text: string,
  animateMouth: (time: number) => void
) {
  const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(
    process.env.NEXT_PUBLIC_AZURE_SPEECH_KEY!,
    process.env.NEXT_PUBLIC_AZURE_REGION!
  );

  speechConfig.speechSynthesisVoiceName = "en-US-AriaNeural";
  speechConfig.setProperty("SpeechServiceResponse_RequestViseme", "true");

  const audioConfig = SpeechSDK.AudioConfig.fromDefaultSpeakerOutput();
  const synthesizer = new SpeechSDK.SpeechSynthesizer(
    speechConfig,
    audioConfig
  );

  synthesizer.visemeReceived = (s, e) => {
    const time = e.audioOffset / 10000; // convert to ms
    animateMouth(time);
  };

  synthesizer.speakTextAsync(
    text,
    () => {},
    (err) => console.error(err)
  );
}
