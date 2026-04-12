export default function Home() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f9fafb", fontFamily: "sans-serif" }}>

      {/* Navbar */}
      <nav style={{ backgroundColor: "white", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #e5e7eb" }}>
        <h1 style={{ color: "#16a34a", fontSize: "22px", fontWeight: "bold", margin: 0 }}>ResumeAI</h1>
        <a href="/builder" style={{ backgroundColor: "#16a34a", color: "white", padding: "8px 16px", borderRadius: "8px", fontSize: "14px", fontWeight: "500", textDecoration: "none" }}>
          Get Started Free
        </a>
      </nav>

      {/* Hero Section */}
      <section style={{ textAlign: "center", padding: "80px 24px 60px" }}>
        <div style={{ display: "inline-block", backgroundColor: "#dcfce7", color: "#16a34a", padding: "6px 16px", borderRadius: "999px", fontSize: "13px", fontWeight: "500", marginBottom: "24px" }}>
          AI Powered Resume Builder
        </div>
        <h2 style={{ fontSize: "48px", fontWeight: "bold", color: "#111827", marginBottom: "20px", lineHeight: "1.2" }}>
          Build a Resume That <br />
          <span style={{ color: "#16a34a" }}>Gets You Hired</span>
        </h2>
        <p style={{ fontSize: "18px", color: "#6b7280", marginBottom: "40px", maxWidth: "560px", margin: "0 auto 40px", lineHeight: "1.7" }}>
          Our AI rewrites your resume bullet points, matches your resume to any job description, and generates cover letters in one click.
        </p>
        <a href="/builder" style={{ display: "inline-block", backgroundColor: "#16a34a", color: "white", padding: "16px 40px", borderRadius: "12px", fontSize: "18px", fontWeight: "600", textDecoration: "none" }}>
          Build My Resume Free
        </a>
        <p style={{ color: "#9ca3af", fontSize: "13px", marginTop: "12px" }}>
          Free to use — no credit card needed
        </p>
      </section>

      {/* Stats Row */}
      <section style={{ display: "flex", justifyContent: "center", gap: "48px", padding: "0 24px 60px", flexWrap: "wrap" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#111827", margin: 0 }}>10,000+</p>
          <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>Resumes improved</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#111827", margin: 0 }}>3x</p>
          <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>More interviews</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#111827", margin: 0 }}>30 sec</p>
          <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>To improve your resume</p>
        </div>
      </section>

      {/* Feature Cards */}
      <section style={{ maxWidth: "960px", margin: "0 auto", padding: "0 24px 80px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
        <div style={{ backgroundColor: "white", borderRadius: "16px", padding: "28px", border: "1px solid #e5e7eb" }}>
          <div style={{ fontSize: "32px", marginBottom: "16px" }}>✍️</div>
          <h3 style={{ fontSize: "17px", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>AI Resume Writer</h3>
          <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>Paste your experience and AI instantly rewrites it into powerful, professional bullet points that impress recruiters.</p>
        </div>
        <div style={{ backgroundColor: "white", borderRadius: "16px", padding: "28px", border: "1px solid #e5e7eb" }}>
          <div style={{ fontSize: "32px", marginBottom: "16px" }}>🎯</div>
          <h3 style={{ fontSize: "17px", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>Job Description Matcher</h3>
          <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>Paste any job description and see exactly which keywords are missing from your resume to boost your score.</p>
        </div>
        <div style={{ backgroundColor: "white", borderRadius: "16px", padding: "28px", border: "1px solid #e5e7eb" }}>
          <div style={{ fontSize: "32px", marginBottom: "16px" }}>📄</div>
          <h3 style={{ fontSize: "17px", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>Cover Letter Generator</h3>
          <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>One click generates a personalised cover letter based on your resume and the job you are applying for.</p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ backgroundColor: "#16a34a", padding: "60px 24px", textAlign: "center" }}>
        <h3 style={{ fontSize: "32px", fontWeight: "bold", color: "white", marginBottom: "16px" }}>
          Ready to get more interviews?
        </h3>
        <p style={{ color: "#dcfce7", fontSize: "16px", marginBottom: "32px" }}>
          Join thousands of job seekers who improved their resume with AI
        </p>
        <a href="/builder" style={{ display: "inline-block", backgroundColor: "white", color: "#16a34a", padding: "14px 36px", borderRadius: "12px", fontSize: "16px", fontWeight: "600", textDecoration: "none" }}>
          Start For Free
        </a>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#111827", padding: "24px", textAlign: "center" }}>
        <p style={{ color: "#6b7280", fontSize: "13px", margin: 0 }}>
          © 2025 ResumeAI — Built by Vishal Meena
        </p>
      </footer>

    </main>
  )
}