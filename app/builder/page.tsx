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
    <main style={{ minHeight: "100vh", backgroundColor: "#f9fafb", fontFamily: "sans-serif" }}>

      {/* Navbar */}
      <nav style={{ backgroundColor: "white", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #e5e7eb" }}>
        <h1 style={{ color: "#16a34a", fontSize: "22px", fontWeight: "bold", margin: 0 }}>ResumeAI</h1>
        <a href="/" style={{ color: "#6b7280", fontSize: "14px", textDecoration: "none" }}>← Back to Home</a>
      </nav>

      {/* Main Content */}
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "48px 24px" }}>

        <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#1f2937", marginBottom: "8px" }}>
          AI Resume Writer
        </h2>
        <p style={{ color: "#6b7280", marginBottom: "32px", fontSize: "16px" }}>
          Paste your weak bullet points below. AI will rewrite them to be powerful and professional.
        </p>

        {/* Input Box */}
        <div style={{ backgroundColor: "white", borderRadius: "16px", padding: "24px", marginBottom: "16px", border: "1px solid #e5e7eb" }}>
          <label style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "8px" }}>
            Your experience
          </label>
          <textarea
            style={{ width: "100%", height: "180px", padding: "12px", border: "1px solid #d1d5db", borderRadius: "12px", fontSize: "14px", color: "#374151", backgroundColor: "white", resize: "none", boxSizing: "border-box", outline: "none" }}
            placeholder="Example: worked on dashboard features and fixed bugs across the team"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>

        {/* Button */}
        <button
          onClick={improveResume}
          disabled={loading || !experience}
          style={{ width: "100%", backgroundColor: loading || !experience ? "#86efac" : "#16a34a", color: "white", padding: "16px", borderRadius: "12px", fontSize: "16px", fontWeight: "600", border: "none", cursor: "pointer" }}
        >
          {loading ? "AI is writing..." : "Improve My Resume ✨"}
        </button>

        {/* Result */}
        {result && (
          <div style={{ backgroundColor: "white", borderRadius: "16px", padding: "24px", marginTop: "32px", border: "1px solid #e5e7eb" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937", marginBottom: "16px" }}>
              ✅ AI Improved Version
            </h3>
            <p style={{ color: "#374151", fontSize: "14px", lineHeight: "1.8", whiteSpace: "pre-wrap" }}>
              {result}
            </p>
          </div>
        )}

      </div>
    </main>
  )
}