import { NextResponse } from "next/server";
import { createDeepgramClient } from "@/lib/deepgram";

export async function POST(req: Request) {
  const { audio } = await req.json();
  const deepgram = createDeepgramClient();

  const res = await deepgram.transcription.preRecorded(
    { buffer: Buffer.from(audio, "base64"), mimetype: "audio/wav" },
    { model: "nova" }
  );

  return NextResponse.json({ transcript: res.results.channels[0].alternatives[0].transcript });
}
