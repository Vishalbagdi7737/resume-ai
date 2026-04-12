"use client"
import { useState } from "react"

export default function Builder() {
  const [experience, setExperience] = useState("")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  async function improveResume() {
    setLoading(true)
    setResult("")
    const response = await fetch("/api/improve", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ experience }),
    })
    const data = await response.json()
    setResult(data.result)
    setLoading(false)
  }

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#050a15", fontFamily: "'Segoe UI', sans-serif" }}>

      {/* Navbar */}
      <nav style={{ padding: "20px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #1e2d40" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "36px", height: "36px", background: "linear-gradient(135deg, #00b4ff, #0066ff)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>R</span>
          </div>
          <span style={{ fontSize: "20px", fontWeight: "700", color: "#ffffff" }}>ResumeAI</span>
        </div>
        <a href="/" style={{ color: "#64748b", fontSize: "14px", textDecoration: "none" }}>← Back to Home</a>
      </nav>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={{ display: "inline-block", backgroundColor: "#0a1628", color: "#00b4ff", padding: "6px 16px", borderRadius: "999px", fontSize: "13px", fontWeight: "600", marginBottom: "16px", border: "1px solid #1e3a5f" }}>
            AI Resume Writer
          </div>
          <h1 style={{ fontSize: "36px", fontWeight: "800", color: "#ffffff", marginBottom: "12px" }}>
            Rewrite Your Bullet Points
          </h1>
          <p style={{ color: "#475569", fontSize: "16px" }}>
            Paste your weak experience below and AI will rewrite it into powerful professional bullet points
          </p>
        </div>

        {/* Input Box */}
        <div style={{ backgroundColor: "#070e1a", borderRadius: "16px", padding: "24px", marginBottom: "16px", border: "1px solid #1e2d40" }}>
          <label style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "#94a3b8", marginBottom: "12px" }}>
            YOUR EXPERIENCE
          </label>
          <textarea
            style={{ width: "100%", height: "200px", padding: "16px", border: "1px solid #1e2d40", borderRadius: "12px", fontSize: "14px", color: "#e2e8f0", backgroundColor: "#060d1a", resize: "none", boxSizing: "border-box", outline: "none", lineHeight: "1.7" }}
            placeholder="Example: worked on dashboard features and fixed bugs across the team..."
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>

        {/* Button */}
        <button
          onClick={improveResume}
          disabled={loading || !experience}
          style={{ width: "100%", background: loading || !experience ? "#0a1628" : "linear-gradient(135deg, #00b4ff, #0066ff)", color: loading || !experience ? "#334155" : "white", padding: "16px", borderRadius: "12px", fontSize: "16px", fontWeight: "700", border: "none", cursor: loading || !experience ? "not-allowed" : "pointer", marginBottom: "32px", letterSpacing: "0.5px" }}
        >
          {loading ? "🤖 AI is rewriting..." : "Improve My Resume ✨"}
        </button>

        {/* Result */}
        {result && (
          <div>
            <div style={{ backgroundColor: "#070e1a", borderRadius: "16px", padding: "28px", border: "1px solid #1e2d40", marginBottom: "16px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#00b4ff", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
                ✅ AI Improved Version
              </h3>
              {result.split("\n").filter(line => line.trim()).map((line, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "12px", alignItems: "flex-start", backgroundColor: "#060d1a", borderRadius: "10px", padding: "14px" }}>
                  <span style={{ color: "#00b4ff", flexShrink: 0, marginTop: "2px" }}>→</span>
                  <p style={{ color: "#94a3b8", fontSize: "14px", margin: 0, lineHeight: "1.7" }}>{line.replace("•", "").trim()}</p>
                </div>
              ))}
            </div>

            {/* Analyze CTA */}
            <div style={{ backgroundColor: "#070e1a", borderRadius: "16px", padding: "24px", border: "1px solid #1e2d40", textAlign: "center" }}>
              <p style={{ color: "#ffffff", fontWeight: "700", fontSize: "16px", marginBottom: "8px" }}>
                Want to score your full resume?
              </p>
              <p style={{ color: "#475569", fontSize: "14px", marginBottom: "16px" }}>
                Use our Resume Analyzer to get a score out of 100
              </p>
              <a href="/analyzer" style={{ display: "inline-block", background: "linear-gradient(135deg, #00b4ff, #0066ff)", color: "white", padding: "12px 32px", borderRadius: "999px", fontSize: "14px", fontWeight: "600", textDecoration: "none" }}>
                Analyze My Resume →
              </a>
            </div>
          </div>
        )}

      </div>
    </main>
  )
}