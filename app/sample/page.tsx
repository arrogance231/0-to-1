"use client";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [context, setContext] = useState("");

  async function handleUpload() {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    await fetch("/api/ingest", { method: "POST", body: formData });
    alert("PDF uploaded and ingested!");
  }

  async function handleQuery() {
    const res = await fetch("/api/query", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    setAnswer(data.answer);
    setContext(data.context);
  }

  return (
    <div style={{ maxWidth: 600, margin: "40px auto" }}>
      <h1>RAG PDF Chat (Cohere + Pinecone)</h1>
      <div>
        <input
          type='file'
          accept='.pdf'
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <button onClick={handleUpload} disabled={!file}>
          Upload PDF
        </button>
      </div>
      <div style={{ margin: "20px 0" }}>
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Ask a question...'
          style={{ width: 300, marginRight: 8 }}
        />
        <button onClick={handleQuery} disabled={!query}>
          Ask
        </button>
      </div>
      {answer && (
        <div>
          <h3>Answer:</h3>
          <div style={{ background: "#f8f8f8", padding: 10, borderRadius: 4 }}>
            {answer}
          </div>
          <h4>Context:</h4>
          <pre style={{ background: "#f0f0f0", padding: 10, borderRadius: 4 }}>
            {context}
          </pre>
        </div>
      )}
    </div>
  );
}
