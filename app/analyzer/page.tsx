"use client"
import { useState } from "react"

export default function Analyzer() {
  const [resume, setResume] = useState("")
  const [loading, setLoading] = useState(false)
  const [score, setScore] = useState<number | null>(null)
  const [strengths, setStrengths] = useState<string[]>([])
  const [weaknesses, setWeaknesses] = useState<string[]>([])
  const [suggestions, setSuggestions] = useState<string[]>([])

  function parseResult(text: string) {
    const scoreMatch = text.match(/SCORE:\s*(\d+)/)
    if (scoreMatch) setScore(parseInt(scoreMatch[1]))

    const strengthsMatch = text.match(/STRENGTHS:\n([\s\S]*?)(?=\n\nWEAKNESSES)/)
    if (strengthsMatch) {
      const items = strengthsMatch[1].split("\n").filter(s => s.startsWith("- ")).map(s => s.replace("- ", ""))
      setStrengths(items)
    }

    const weaknessesMatch = text.match(/WEAKNESSES:\n([\s\S]*?)(?=\n\nSUGGESTIONS)/)
    if (weaknessesMatch) {
      const items = weaknessesMatch[1].split("\n").filter(s => s.startsWith("- ")).map(s => s.replace("- ", ""))
      setWeaknesses(items)
    }

    const suggestionsMatch = text.match(/SUGGESTIONS:\n([\s\S]*)/)
    if (suggestionsMatch) {
      const items = suggestionsMatch[1].split("\n").filter(s => s.startsWith("- ")).map(s => s.replace("- ", ""))
      setSuggestions(items)
    }
  }

  async function analyzeResume() {
    setLoading(true)
    setScore(null)
    setStrengths([])
    setWeaknesses([])
    setSuggestions([])

    const response = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resume }),
    })
    const data = await response.json()
    parseResult(data.result)
    setLoading(false)
  }

  const scoreColor = score !== null
    ? score >= 70 ? "#00b4ff"
    : score >= 40 ? "#f59e0b"
    : "#ef4444"
    : "#00b4ff"

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
            AI Resume Analysis
          </div>
          <h1 style={{ fontSize: "36px", fontWeight: "800", color: "#ffffff", marginBottom: "12px" }}>
            Resume Analyzer
          </h1>
          <p style={{ color: "#475569", fontSize: "16px" }}>
            Paste your full resume and get an instant AI score with detailed feedback
          </p>
        </div>

        {/* Input Box */}
        <div style={{ backgroundColor: "#070e1a", borderRadius: "16px", padding: "24px", marginBottom: "16px", border: "1px solid #1e2d40" }}>
          <label style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "#94a3b8", marginBottom: "12px" }}>
            PASTE YOUR RESUME HERE
          </label>
          <textarea
            style={{ width: "100%", height: "220px", padding: "16px", border: "1px solid #1e2d40", borderRadius: "12px", fontSize: "14px", color: "#e2e8f0", backgroundColor: "#060d1a", resize: "none", boxSizing: "border-box", outline: "none", lineHeight: "1.7" }}
            placeholder="Paste your entire resume here — name, skills, experience, education, projects..."
            value={resume}
            onChange={(e) => setResume(e.target.value)}
          />
        </div>

        {/* Button */}
        <button
          onClick={analyzeResume}
          disabled={loading || !resume}
          style={{ width: "100%", background: loading || !resume ? "#0a1628" : "linear-gradient(135deg, #00b4ff, #0066ff)", color: loading || !resume ? "#334155" : "white", padding: "16px", borderRadius: "12px", fontSize: "16px", fontWeight: "700", border: "none", cursor: loading || !resume ? "not-allowed" : "pointer", marginBottom: "40px", letterSpacing: "0.5px" }}
        >
          {loading ? "🤖 AI is analyzing your resume..." : "Analyze My Resume ✨"}
        </button>

        {/* Results */}
        {score !== null && (
          <div>

            {/* Score Card */}
            <div style={{ backgroundColor: "#070e1a", borderRadius: "20px", padding: "40px", border: "1px solid #1e2d40", textAlign: "center", marginBottom: "20px" }}>
              <p style={{ fontSize: "14px", color: "#475569", marginBottom: "8px", fontWeight: "600", letterSpacing: "1px" }}>YOUR RESUME SCORE</p>
              <p style={{ fontSize: "80px", fontWeight: "800", color: scoreColor, margin: "0 0 8px", lineHeight: 1 }}>{score}</p>
              <p style={{ fontSize: "16px", color: "#334155", margin: "0 0 24px" }}>out of 100</p>
              <div style={{ backgroundColor: "#060d1a", borderRadius: "999px", height: "10px", overflow: "hidden" }}>
                <div style={{ width: `${score}%`, background: `linear-gradient(90deg, #00b4ff, #0066ff)`, height: "100%", borderRadius: "999px", transition: "width 1.5s ease" }}></div>
              </div>
              <p style={{ marginTop: "12px", fontSize: "14px", color: score >= 70 ? "#00b4ff" : score >= 40 ? "#f59e0b" : "#ef4444", fontWeight: "600" }}>
                {score >= 70 ? "🎉 Strong Resume!" : score >= 40 ? "⚠️ Needs Improvement" : "❌ Major Issues Found"}
              </p>
            </div>

            {/* Strengths */}
            {strengths.length > 0 && (
              <div style={{ backgroundColor: "#070e1a", borderRadius: "16px", padding: "28px", border: "1px solid #0d3321", marginBottom: "16px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#00b4ff", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                  ✅ Strengths
                </h3>
                {strengths.map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "#00b4ff", marginTop: "2px", flexShrink: 0 }}>→</span>
                    <p style={{ color: "#94a3b8", fontSize: "14px", margin: 0, lineHeight: "1.6" }}>{s}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Weaknesses */}
            {weaknesses.length > 0 && (
              <div style={{ backgroundColor: "#070e1a", borderRadius: "16px", padding: "28px", border: "1px solid #2d1a00", marginBottom: "16px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#f59e0b", marginBottom: "16px" }}>
                  ⚠️ Weaknesses
                </h3>
                {weaknesses.map((w, i) => (
                  <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "#f59e0b", marginTop: "2px", flexShrink: 0 }}>→</span>
                    <p style={{ color: "#94a3b8", fontSize: "14px", margin: 0, lineHeight: "1.6" }}>{w}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Suggestions */}
            {suggestions.length > 0 && (
              <div style={{ backgroundColor: "#070e1a", borderRadius: "16px", padding: "28px", border: "1px solid #1e2d40", marginBottom: "16px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#a78bfa", marginBottom: "16px" }}>
                  💡 Suggestions to improve
                </h3>
                {suggestions.map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "#a78bfa", marginTop: "2px", flexShrink: 0 }}>→</span>
                    <p style={{ color: "#94a3b8", fontSize: "14px", margin: 0, lineHeight: "1.6" }}>{s}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Try Builder CTA */}
            <div style={{ backgroundColor: "#070e1a", borderRadius: "16px", padding: "28px", border: "1px solid #1e2d40", textAlign: "center", marginTop: "24px" }}>
              <p style={{ color: "#ffffff", fontWeight: "700", fontSize: "18px", marginBottom: "8px" }}>
                Want to fix your bullet points?
              </p>
              <p style={{ color: "#475569", fontSize: "14px", marginBottom: "20px" }}>
                Use our AI Resume Writer to rewrite your experience
              </p>
              <a href="/builder" style={{ display: "inline-block", background: "linear-gradient(135deg, #00b4ff, #0066ff)", color: "white", padding: "12px 32px", borderRadius: "999px", fontSize: "14px", fontWeight: "600", textDecoration: "none" }}>
                Rewrite My Resume →
              </a>
            </div>

          </div>
        )}
      </div>
    </main>
  )
}