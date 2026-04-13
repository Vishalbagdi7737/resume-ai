"use client"
import { useState } from "react"

export default function Home() {
  const [dark, setDark] = useState(true)

  const t = {
    bg: dark ? "#050a15" : "#ffffff",
    bg2: dark ? "#070e1a" : "#f8faff",
    bg3: dark ? "#060d1a" : "#f1f5f9",
    border: dark ? "#1e2d40" : "#e2e8f0",
    border2: dark ? "#1e3a5f" : "#bfdbfe",
    text: dark ? "#ffffff" : "#0a0a0a",
    text2: dark ? "#94a3b8" : "#475569",
    text3: dark ? "#475569" : "#94a3b8",
    accent: "#0a66c2",
    accentLight: dark ? "#0a1628" : "#eff6ff",
    accentText: dark ? "#00b4ff" : "#0a66c2",
    navBg: dark ? "#050a15" : "#ffffff",
    cardBg: dark ? "#0a1628" : "#ffffff",
    statBg: dark ? "#070e1a" : "#0a66c2",
    statText: dark ? "#00b4ff" : "#ffffff",
    statSub: dark ? "#475569" : "#bfdbfe",
    ctaBg: dark ? "#070e1a" : "#0a0a0a",
  }

  return (
    <main style={{ minHeight: "100vh", backgroundColor: t.bg, fontFamily: "'Segoe UI', sans-serif", transition: "all 0.3s ease" }}>

      {/* Navbar */}
      <nav style={{ backgroundColor: t.navBg, padding: "16px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${t.border}`, position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "36px", height: "36px", background: "linear-gradient(135deg, #00b4ff, #0066ff)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>R</span>
          </div>
          <span style={{ fontSize: "20px", fontWeight: "700", color: t.text }}>ResumeAI</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <a href="/analyzer" style={{ color: t.text2, fontSize: "14px", textDecoration: "none", fontWeight: "500" }}>Analyzer</a>
          <a href="/builder" style={{ color: t.text2, fontSize: "14px", textDecoration: "none", fontWeight: "500" }}>Builder</a>

          {/* Theme Toggle */}
          <button
            onClick={() => setDark(!dark)}
            style={{ backgroundColor: t.bg2, border: `1px solid ${t.border}`, borderRadius: "999px", padding: "6px 16px", cursor: "pointer", fontSize: "13px", color: t.text2, fontWeight: "500", display: "flex", alignItems: "center", gap: "6px" }}
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>

          <a href="/analyzer" style={{ background: "linear-gradient(135deg, #00b4ff, #0066ff)", color: "white", padding: "10px 24px", borderRadius: "999px", fontSize: "14px", fontWeight: "600", textDecoration: "none" }}>
            Get Started Free
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: "center", padding: "90px 24px 70px", backgroundColor: t.bg }}>
        <div style={{ display: "inline-block", backgroundColor: t.accentLight, color: t.accentText, padding: "6px 16px", borderRadius: "999px", fontSize: "13px", fontWeight: "600", marginBottom: "24px", border: `1px solid ${t.border2}` }}>
          AI Powered Career Tools
        </div>
        <h1 style={{ fontSize: "52px", fontWeight: "800", color: t.text, lineHeight: "1.15", maxWidth: "700px", margin: "0 auto 20px" }}>
          Land Your Dream Job with{" "}
          <span style={{ color: "#0a66c2" }}>AI-Powered</span>{" "}
          Resume Tools
        </h1>
        <p style={{ fontSize: "18px", color: t.text2, maxWidth: "520px", margin: "0 auto 40px", lineHeight: "1.7" }}>
          Get your resume scored, rewritten, and optimized by AI in seconds. Used by thousands of job seekers.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/analyzer" style={{ display: "inline-block", background: "linear-gradient(135deg, #00b4ff, #0066ff)", color: "white", padding: "14px 32px", borderRadius: "999px", fontSize: "16px", fontWeight: "600", textDecoration: "none" }}>
            Analyze My Resume
          </a>
          <a href="/builder" style={{ display: "inline-block", backgroundColor: "transparent", color: t.accentText, padding: "14px 32px", borderRadius: "999px", fontSize: "16px", fontWeight: "600", textDecoration: "none", border: `2px solid ${t.accentText}` }}>
            Rewrite Bullet Points
          </a>
        </div>
        <p style={{ color: t.text3, fontSize: "13px", marginTop: "16px" }}>Free to use — no credit card needed</p>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: t.statBg, padding: "40px 24px", transition: "all 0.3s" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "64px", flexWrap: "wrap", maxWidth: "900px", margin: "0 auto" }}>
          {[["10,000+", "Resumes analyzed"], ["3x", "More interviews"], ["30 sec", "Get your score"], ["100%", "Free to use"]].map(([num, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <p style={{ fontSize: "32px", fontWeight: "800", color: t.statText, margin: 0 }}>{num}</p>
              <p style={{ fontSize: "14px", color: t.statSub, margin: 0 }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px" }}>
        <h2 style={{ textAlign: "center", fontSize: "34px", fontWeight: "800", color: t.text, marginBottom: "12px" }}>
          Everything you need to get hired
        </h2>
        <p style={{ textAlign: "center", color: t.text2, fontSize: "16px", marginBottom: "48px" }}>
          Two powerful AI tools built for job seekers
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {[
            { icon: "✍️", title: "AI Resume Writer", desc: "Paste your weak bullet points and AI instantly rewrites them into powerful professional statements that impress recruiters.", link: "/builder", cta: "Try Writer" },
            { icon: "📊", title: "Resume Analyzer", desc: "Get an instant AI score out of 100. See your strengths, weaknesses and exactly what keywords are missing from your resume.", link: "/analyzer", cta: "Try Analyzer" },
            { icon: "🎯", title: "ATS Optimized", desc: "Our AI ensures your resume passes Applicant Tracking Systems used by top companies like TCS, Infosys and Google.", link: "/analyzer", cta: "Learn More" },
          ].map((f) => (
            <div key={f.title} style={{ backgroundColor: t.bg2, borderRadius: "16px", padding: "32px", border: `1px solid ${t.border}`, transition: "all 0.3s" }}>
              <div style={{ fontSize: "36px", marginBottom: "16px" }}>{f.icon}</div>
              <h3 style={{ fontSize: "18px", fontWeight: "700", color: t.text, marginBottom: "12px" }}>{f.title}</h3>
              <p style={{ color: t.text2, fontSize: "14px", lineHeight: "1.7", marginBottom: "20px" }}>{f.desc}</p>
              <a href={f.link} style={{ color: t.accentText, fontSize: "14px", fontWeight: "600", textDecoration: "none" }}>{f.cta} →</a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: t.ctaBg, padding: "80px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "34px", fontWeight: "800", color: "#ffffff", marginBottom: "16px" }}>
          Ready to get more interviews?
        </h2>
        <p style={{ color: "#64748b", fontSize: "16px", marginBottom: "32px" }}>
          Join thousands of job seekers who improved their resume with AI
        </p>
        <a href="/analyzer" style={{ display: "inline-block", background: "linear-gradient(135deg, #00b4ff, #0066ff)", color: "white", padding: "16px 40px", borderRadius: "999px", fontSize: "16px", fontWeight: "600", textDecoration: "none" }}>
          Analyze My Resume Free
        </a>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: t.ctaBg, borderTop: `1px solid #1e293b`, padding: "24px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
        <span style={{ color: "#334155", fontSize: "13px" }}>© 2025 ResumeAI</span>
        <span style={{ color: "#334155", fontSize: "13px" }}>Built by Vishal Meena | Dausa, Rajasthan 🇮🇳</span>
        <div style={{ display: "flex", gap: "16px" }}>
          <a href="/analyzer" style={{ color: "#334155", fontSize: "13px", textDecoration: "none" }}>Analyzer</a>
          <a href="/builder" style={{ color: "#334155", fontSize: "13px", textDecoration: "none" }}>Builder</a>
        </div>
      </footer>

    </main>
  )
}