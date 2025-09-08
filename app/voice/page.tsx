"use client";
import { useState } from "react";

export default function VoicePage() {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("");

  async function handleUpload() {
    if (!file) return;
    const buffer = await file.arrayBuffer();
    const audioBase64 = Buffer.from(buffer).toString("base64");

    const res = await fetch("/api/voice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ audio: audioBase64 })
    });

    const data = await res.json();
    setText(data.transcript);
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">🎙️ Voice to Text (Deepgram)</h1>
      <input type="file" accept="audio/*" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
      <button className="bg-emerald-600 text-white px-4 py-2 ml-2 rounded" onClick={handleUpload}>
        Upload
      </button>
      {text && <p className="mt-4 p-2 bg-gray-100 text-black rounded">{text}</p>}
    </div>
  );
}
