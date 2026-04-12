export default function Home() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#050a15", fontFamily: "'Segoe UI', sans-serif", position: "relative", overflow: "hidden" }}>

      {/* Glow effects */}
      <div style={{ position: "fixed", top: "-200px", left: "-200px", width: "600px", height: "600px", background: "radial-gradient(circle, #0066ff22 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }}></div>
      <div style={{ position: "fixed", top: "-100px", right: "-200px", width: "500px", height: "500px", background: "radial-gradient(circle, #00b4ff15 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }}></div>
      <div style={{ position: "fixed", bottom: "-200px", left: "30%", width: "600px", height: "600px", background: "radial-gradient(circle, #0066ff10 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }}></div>

      {/* Navbar */}
      <nav style={{ padding: "20px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #1e2d40", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "36px", height: "36px", background: "linear-gradient(135deg, #00b4ff, #0066ff)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>R</span>
          </div>
          <span style={{ fontSize: "20px", fontWeight: "700", color: "#ffffff" }}>ResumeAI <span style={{ color: "#00b4ff", fontSize: "12px", fontWeight: "600", backgroundColor: "#0a1628", padding: "2px 8px", borderRadius: "999px", border: "1px solid #00b4ff" }}>Pro</span></span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <a href="/analyzer" style={{ color: "#94a3b8", fontSize: "14px", textDecoration: "none" }}>Features</a>
          <a href="/analyzer" style={{ color: "#94a3b8", fontSize: "14px", textDecoration: "none" }}>Analyzer</a>
          <a href="/builder" style={{ color: "#94a3b8", fontSize: "14px", textDecoration: "none" }}>Builder</a>
          <a href="/builder" style={{ background: "linear-gradient(135deg, #00b4ff, #0066ff)", color: "white", padding: "10px 24px", borderRadius: "999px", fontSize: "14px", fontWeight: "600", textDecoration: "none" }}>
            GET STARTED
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "100px 48px 80px", maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center", position: "relative", zIndex: 1 }}>
        <div>
          <div style={{ display: "inline-block", backgroundColor: "#0a1628", color: "#00b4ff", padding: "6px 16px", borderRadius: "999px", fontSize: "13px", fontWeight: "600", marginBottom: "24px", border: "1px solid #1e3a5f" }}>
            AI Powered Resume Tools
          </div>
          <h1 style={{ fontSize: "52px", fontWeight: "800", color: "#ffffff", lineHeight: "1.15", marginBottom: "24px" }}>
            Elevate Your Career with{" "}
            <span style={{ color: "#00b4ff" }}>AI Intelligence</span>
          </h1>
          <p style={{ fontSize: "17px", color: "#64748b", lineHeight: "1.8", marginBottom: "40px" }}>
            Craft stunning ATS-optimized resumes that land you the interview. Get your resume scored and rewritten by advanced AI in seconds.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="/analyzer" style={{ display: "inline-block", background: "linear-gradient(135deg, #00b4ff, #0066ff)", color: "white", padding: "14px 32px", borderRadius: "999px", fontSize: "15px", fontWeight: "600", textDecoration: "none" }}>
              Analyze My Resume
            </a>
            <a href="/builder" style={{ display: "inline-block", backgroundColor: "transparent", color: "#ffffff", padding: "14px 32px", borderRadius: "999px", fontSize: "15px", fontWeight: "600", textDecoration: "none", border: "1px solid #1e3a5f" }}>
              Rewrite Bullet Points
            </a>
          </div>
          <p style={{ color: "#334155", fontSize: "13px", marginTop: "16px" }}>
            Free to use — no credit card needed
          </p>
        </div>

        {/* Resume Card */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ backgroundColor: "#0a1628", borderRadius: "20px", padding: "28px", border: "1px solid #1e3a5f", boxShadow: "0 0 40px #0066ff20" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <div>
                <p style={{ color: "#ffffff", fontWeight: "700", fontSize: "16px", margin: 0 }}>Resume Score</p>
                <p style={{ color: "#64748b", fontSize: "12px", margin: 0 }}>AI Analysis Complete</p>
              </div>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "linear-gradient(135deg, #00b4ff, #0066ff)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 20px #00b4ff40" }}>
                <span style={{ color: "white", fontWeight: "800", fontSize: "16px" }}>98%</span>
              </div>
            </div>
            <div style={{ backgroundColor: "#060d1a", borderRadius: "12px", padding: "16px", marginBottom: "12px", border: "1px solid #1e2d40" }}>
              <p style={{ color: "#00b4ff", fontSize: "11px", fontWeight: "700", margin: "0 0 8px", letterSpacing: "1px" }}>AI IMPROVED BULLET POINT</p>
              <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: "1.6", margin: 0 }}>• Spearheaded development of 5 React apps, reducing load time by 40% and increasing user retention by 25%</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", marginBottom: "12px" }}>
              {["React", "Node.js", "AWS"].map((skill) => (
                <div key={skill} style={{ backgroundColor: "#0d2137", borderRadius: "8px", padding: "10px", textAlign: "center", border: "1px solid #1e3a5f" }}>
                  <p style={{ color: "#00b4ff", fontWeight: "700", fontSize: "13px", margin: 0 }}>{skill}</p>
                  <p style={{ color: "#334155", fontSize: "10px", margin: 0 }}>Keyword</p>
                </div>
              ))}
            </div>
            <div style={{ backgroundColor: "#060d1a", borderRadius: "12px", padding: "12px", border: "1px solid #1e2d40" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <span style={{ color: "#64748b", fontSize: "12px" }}>ATS Score</span>
                <span style={{ color: "#00b4ff", fontSize: "12px", fontWeight: "600" }}>98%</span>
              </div>
              <div style={{ backgroundColor: "#0d2137", borderRadius: "999px", height: "6px" }}>
                <div style={{ width: "98%", background: "linear-gradient(90deg, #00b4ff, #0066ff)", height: "100%", borderRadius: "999px", boxShadow: "0 0 10px #00b4ff" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: "#070e1a", borderTop: "1px solid #1e2d40", borderBottom: "1px solid #1e2d40", padding: "40px 48px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "80px", flexWrap: "wrap", maxWidth: "1000px", margin: "0 auto" }}>
          {[["10,000+", "Resumes analyzed"], ["3x", "More interviews"], ["30 sec", "To get your score"], ["100%", "Free to use"]].map(([num, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <p style={{ fontSize: "36px", fontWeight: "800", color: "#00b4ff", margin: 0 }}>{num}</p>
              <p style={{ fontSize: "14px", color: "#475569", margin: 0 }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 48px", position: "relative", zIndex: 1 }}>
        <h2 style={{ textAlign: "center", fontSize: "36px", fontWeight: "800", color: "#ffffff", marginBottom: "12px" }}>
          Everything you need to get hired
        </h2>
        <p style={{ textAlign: "center", color: "#475569", fontSize: "16px", marginBottom: "48px" }}>
          Two powerful AI tools built for job seekers
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {[
            { icon: "📊", title: "AI Writing Assistant", desc: "Paste weak bullet points and AI instantly rewrites them into powerful professional statements with measurable results.", link: "/builder", cta: "Try Writer" },
            { icon: "🎯", title: "ATS Optimization", desc: "Get an instant AI score out of 100. See your strengths, weaknesses and exactly what keywords are missing.", link: "/analyzer", cta: "Try Analyzer" },
            { icon: "💡", title: "Smart Suggestions", desc: "Get detailed suggestions on how to improve every section of your resume to maximize your chances of getting hired.", link: "/analyzer", cta: "Get Suggestions" },
          ].map((f) => (
            <div key={f.title} style={{ backgroundColor: "#070e1a", borderRadius: "16px", padding: "32px", border: "1px solid #1e2d40", transition: "border-color 0.2s" }}>
              <div style={{ width: "48px", height: "48px", background: "linear-gradient(135deg, #00b4ff22, #0066ff22)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", border: "1px solid #1e3a5f" }}>
                <span style={{ fontSize: "24px" }}>{f.icon}</span>
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff", marginBottom: "12px" }}>{f.title}</h3>
              <p style={{ color: "#475569", fontSize: "14px", lineHeight: "1.7", marginBottom: "20px" }}>{f.desc}</p>
              <a href={f.link} style={{ color: "#00b4ff", fontSize: "14px", fontWeight: "600", textDecoration: "none" }}>{f.cta} →</a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#070e1a", borderTop: "1px solid #1e2d40", padding: "80px 24px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#ffffff", marginBottom: "16px" }}>
          Ready to get more interviews?
        </h2>
        <p style={{ color: "#475569", fontSize: "16px", marginBottom: "32px" }}>
          Join thousands of job seekers who improved their resume with AI
        </p>
        <a href="/analyzer" style={{ display: "inline-block", background: "linear-gradient(135deg, #00b4ff, #0066ff)", color: "white", padding: "16px 40px", borderRadius: "999px", fontSize: "16px", fontWeight: "600", textDecoration: "none", boxShadow: "0 0 30px #0066ff40" }}>
          Analyze My Resume Free
        </a>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#050a15", borderTop: "1px solid #1e2d40", padding: "24px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", position: "relative", zIndex: 1 }}>
        <span style={{ color: "#1e3a5f", fontSize: "13px" }}>© 2025 ResumeAI Pro</span>
        <span style={{ color: "#1e3a5f", fontSize: "13px" }}>Built by Vishal Meena | Dausa, Rajasthan 🇮🇳</span>
        <div style={{ display: "flex", gap: "16px" }}>
          <a href="/analyzer" style={{ color: "#1e3a5f", fontSize: "13px", textDecoration: "none" }}>Analyzer</a>
          <a href="/builder" style={{ color: "#1e3a5f", fontSize: "13px", textDecoration: "none" }}>Builder</a>
        </div>
      </footer>

    </main>
  ) 
}