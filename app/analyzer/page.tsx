export default function Home() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#ffffff", fontFamily: "'Segoe UI', sans-serif" }}>

      {/* Navbar */}
      <nav style={{ backgroundColor: "#ffffff", padding: "16px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #e2e8f0", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "32px", height: "32px", backgroundColor: "#0a66c2", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontSize: "16px", fontWeight: "bold" }}>R</span>
          </div>
          <span style={{ fontSize: "20px", fontWeight: "700", color: "#0a0a0a" }}>ResumeAI</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a href="/analyzer" style={{ color: "#0a66c2", fontSize: "14px", textDecoration: "none", fontWeight: "500" }}>Analyzer</a>
          <a href="/builder" style={{ color: "#0a66c2", fontSize: "14px", textDecoration: "none", fontWeight: "500" }}>Builder</a>
          <a href="/builder" style={{ backgroundColor: "#0a66c2", color: "white", padding: "8px 20px", borderRadius: "20px", fontSize: "14px", fontWeight: "600", textDecoration: "none" }}>
            Get Started Free
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ textAlign: "center", padding: "80px 24px 60px", backgroundColor: "#f8faff" }}>
        <div style={{ display: "inline-block", backgroundColor: "#e8f0fe", color: "#0a66c2", padding: "6px 16px", borderRadius: "999px", fontSize: "13px", fontWeight: "600", marginBottom: "24px" }}>
          AI Powered Career Tools
        </div>
        <h1 style={{ fontSize: "52px", fontWeight: "800", color: "#0a0a0a", marginBottom: "20px", lineHeight: "1.15", maxWidth: "700px", margin: "0 auto 20px" }}>
          Land Your Dream Job with <span style={{ color: "#0a66c2" }}>AI-Powered</span> Resume Tools
        </h1>
        <p style={{ fontSize: "18px", color: "#64748b", marginBottom: "40px", maxWidth: "560px", margin: "0 auto 40px", lineHeight: "1.7" }}>
          Get your resume scored, rewritten, and optimized by AI in seconds. Used by thousands of job seekers across India.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/analyzer" style={{ display: "inline-block", backgroundColor: "#0a66c2", color: "white", padding: "14px 32px", borderRadius: "24px", fontSize: "16px", fontWeight: "600", textDecoration: "none" }}>
            Analyze My Resume
          </a>
          <a href="/builder" style={{ display: "inline-block", backgroundColor: "white", color: "#0a66c2", padding: "14px 32px", borderRadius: "24px", fontSize: "16px", fontWeight: "600", textDecoration: "none", border: "2px solid #0a66c2" }}>
            Rewrite Bullet Points
          </a>
        </div>
        <p style={{ color: "#94a3b8", fontSize: "13px", marginTop: "16px" }}>
          Free to use — no credit card needed
        </p>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: "#0a66c2", padding: "40px 24px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "64px", flexWrap: "wrap", maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "36px", fontWeight: "800", color: "white", margin: 0 }}>10,000+</p>
            <p style={{ fontSize: "14px", color: "#bfdbfe", margin: 0 }}>Resumes analyzed</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "36px", fontWeight: "800", color: "white", margin: 0 }}>3x</p>
            <p style={{ fontSize: "14px", color: "#bfdbfe", margin: 0 }}>More interviews</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "36px", fontWeight: "800", color: "white", margin: 0 }}>30 sec</p>
            <p style={{ fontSize: "14px", color: "#bfdbfe", margin: 0 }}>To get your score</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "36px", fontWeight: "800", color: "white", margin: 0 }}>100%</p>
            <p style={{ fontSize: "14px", color: "#bfdbfe", margin: 0 }}>Free to use</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px" }}>
        <h2 style={{ textAlign: "center", fontSize: "36px", fontWeight: "800", color: "#0a0a0a", marginBottom: "12px" }}>
          Everything you need to get hired
        </h2>
        <p style={{ textAlign: "center", color: "#64748b", fontSize: "16px", marginBottom: "48px" }}>
          Two powerful AI tools built specifically for job seekers
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>

          <div style={{ backgroundColor: "#f8faff", borderRadius: "16px", padding: "32px", border: "1px solid #e2e8f0" }}>
            <div style={{ width: "48px", height: "48px", backgroundColor: "#0a66c2", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <span style={{ fontSize: "24px" }}>📊</span>
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#0a0a0a", marginBottom: "12px" }}>Resume Analyzer</h3>
            <p style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.7", marginBottom: "20px" }}>Get an instant AI score out of 100. See your strengths, weaknesses and exactly what to fix to land more interviews.</p>
            <a href="/analyzer" style={{ color: "#0a66c2", fontSize: "14px", fontWeight: "600", textDecoration: "none" }}>Try Analyzer →</a>
          </div>

          <div style={{ backgroundColor: "#f8faff", borderRadius: "16px", padding: "32px", border: "1px solid #e2e8f0" }}>
            <div style={{ width: "48px", height: "48px", backgroundColor: "#0a66c2", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <span style={{ fontSize: "24px" }}>✍️</span>
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#0a0a0a", marginBottom: "12px" }}>AI Resume Writer</h3>
            <p style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.7", marginBottom: "20px" }}>Paste your weak bullet points and AI instantly rewrites them into powerful, professional statements that impress recruiters.</p>
            <a href="/builder" style={{ color: "#0a66c2", fontSize: "14px", fontWeight: "600", textDecoration: "none" }}>Try Writer →</a>
          </div>

          <div style={{ backgroundColor: "#f8faff", borderRadius: "16px", padding: "32px", border: "1px solid #e2e8f0" }}>
            <div style={{ width: "48px", height: "48px", backgroundColor: "#0a66c2", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <span style={{ fontSize: "24px" }}>🎯</span>
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#0a0a0a", marginBottom: "12px" }}>ATS Optimized</h3>
            <p style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.7", marginBottom: "20px" }}>Our AI ensures your resume passes Applicant Tracking Systems used by top companies like TCS, Infosys and Google.</p>
            <a href="/analyzer" style={{ color: "#0a66c2", fontSize: "14px", fontWeight: "600", textDecoration: "none" }}>Learn More →</a>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: "#0a0a0a", padding: "80px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "800", color: "white", marginBottom: "16px" }}>
          Ready to get more interviews?
        </h2>
        <p style={{ color: "#94a3b8", fontSize: "16px", marginBottom: "32px" }}>
          Join thousands of job seekers who improved their resume with AI
        </p>
        <a href="/analyzer" style={{ display: "inline-block", backgroundColor: "#0a66c2", color: "white", padding: "16px 40px", borderRadius: "24px", fontSize: "16px", fontWeight: "600", textDecoration: "none" }}>
          Analyze My Resume Free
        </a>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid #1e293b", padding: "24px", textAlign: "center" }}>
        <p style={{ color: "#475569", fontSize: "13px", margin: 0 }}>
          © 2025 ResumeAI — Built by Vishal Meena | Dausa, Rajasthan 🇮🇳
        </p>
      </footer>

    </main>
  )
}