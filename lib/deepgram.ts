import { createClient } from "@deepgram/sdk";

export function createDeepgramClient() {
  const apiKey = process.env.DEEPGRAM_API_KEY;
  if (!apiKey) throw new Error("Missing DEEPGRAM_API_KEY in environment");
  return createClient(apiKey);
}
