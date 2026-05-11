import FadeIn from "./FadeIn";
import { FloralDot } from "./Decorations";
import { SKILLS, STATS } from "../data";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "6rem clamp(1.5rem, 8vw, 5rem)",
        background: "#FFFAF4",
        borderTop: "1px solid #EDD9C0", borderBottom: "1px solid #EDD9C0",
        position: "relative", overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: 0, right: 0, width: 300, height: 300,
        background: "radial-gradient(circle, rgba(232,164,164,0.15), transparent 70%)",
        pointerEvents: "none",
      }} />
      <FloralDot style={{ bottom: "10%", left: "2%", color: "#D4870A", width: 28, height: 28 }} />

      <FadeIn>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "3px", color: "#D4870A", marginBottom: "0.4rem", textTransform: "uppercase" }}>Get to know me</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, color: "#2D1B0E", letterSpacing: "-0.5px", lineHeight: 1, marginBottom: "3rem" }}>
          About <em style={{ color: "#D4870A" }}>Me</em>
        </h2>
      </FadeIn>

      <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr min(340px, 38%)", gap: "4rem", alignItems: "start" }}>
        <div>
          {[
            "I'm <strong>Khusbu Banjade</strong>, an AI and Cloud Engineer based in Kathmandu, Nepal. I study at <strong>King's College Nepal</strong>, affiliated with <strong>Westcliff University</strong>, and serve as an Alliance Team Member at <strong>Kinu.ai</strong>, where I work on applied AI solutions.",
            "My work spans machine learning pipelines, real-time computer vision, fraud detection systems, and cloud-native architectures on AWS. I'm equally comfortable building an NLP-powered resume matcher, designing a hotel booking system, or conducting deep statistical analysis.",
            "I've also contributed to <strong>OpenTickets.io</strong> and enjoy exploring how AI can solve meaningful problems at scale. With two AWS certifications — Machine Learning Engineer and Solutions Architect — I bring both technical depth and cloud expertise to every project.",
          ].map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <p dangerouslySetInnerHTML={{ __html: p }} style={{ color: "#8B6F5E", fontSize: "1.02rem", lineHeight: 1.85, marginBottom: "1rem" }} />
            </FadeIn>
          ))}

          <FadeIn delay={0.3}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", margin: "2rem 0" }}>
              {SKILLS.map((s) => (
                <span key={s} style={{
                  background: "rgba(212,135,10,0.07)", border: "1px solid rgba(212,135,10,0.22)",
                  color: "#A0620A", fontSize: "0.8rem", fontWeight: 500,
                  fontFamily: "'Jost', sans-serif", padding: "5px 16px", borderRadius: 100,
                }}>{s}</span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
              border: "1.5px solid #EDD9C0", borderRadius: 20, overflow: "hidden",
              boxShadow: "0 4px 24px rgba(139,111,94,0.08)",
            }}>
              {STATS.map((s, i) => (
                <div key={i} style={{
                  background: i === 1 ? "rgba(212,135,10,0.06)" : "#FFFAF4",
                  padding: "1.4rem 1rem", textAlign: "center",
                  borderRight: i < 2 ? "1.5px solid #EDD9C0" : "none",
                }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.6rem", fontWeight: 700, color: "#D4870A", lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", color: "#8B6F5E", marginTop: 4, letterSpacing: "0.5px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Side cards */}
        <div className="about-side" style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          <FadeIn delay={0.1}>
            <div style={{ background: "#FFFAF4", border: "1.5px solid #EDD9C0", borderRadius: 20, padding: "1.6rem", boxShadow: "0 4px 24px rgba(139,111,94,0.07)" }}>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", letterSpacing: "2.5px", color: "#D4870A", marginBottom: "1.2rem", textTransform: "uppercase" }}>✦ Quick Info</p>
              {[
                { icon: "🎓", main: "King's College Nepal", sub: "Under Westcliff University" },
                { icon: "📍", main: "Kathmandu, Bāgmatī, Nepal", sub: null },
                { icon: "🤖", main: "Kinu.ai", sub: "Alliance Team Member" },
                { icon: "🎟️", main: "OpenTickets.io", sub: "Contributor" },
                { icon: "📧", main: "khusbubanjade@gmail.com", sub: null },
              ].map((r, i, arr) => (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: 12,
                  padding: "0.65rem 0",
                  borderBottom: i < arr.length - 1 ? "1px solid #F0DCC8" : "none",
                }}>
                  <span style={{ fontSize: "1rem", marginTop: 1 }}>{r.icon}</span>
                  <div>
                    <div style={{ color: "#2D1B0E", fontSize: "0.88rem", fontWeight: 500 }}>{r.main}</div>
                    {r.sub && <div style={{ color: "#8B6F5E", fontSize: "0.76rem" }}>{r.sub}</div>}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div style={{
              background: "linear-gradient(135deg, rgba(212,135,10,0.06), rgba(201,123,90,0.06))",
              border: "1.5px solid rgba(212,135,10,0.22)",
              borderRadius: 20, padding: "1.6rem",
              boxShadow: "0 4px 24px rgba(212,135,10,0.08)",
            }}>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", letterSpacing: "2.5px", color: "#D4870A", marginBottom: "1.2rem", textTransform: "uppercase" }}>☁ AWS Certifications</p>
              {["AWS Certified Machine Learning Engineer", "AWS Certified Solutions Architect"].map((c, i, arr) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "0.7rem 0",
                  borderBottom: i < arr.length - 1 ? "1px solid #F0DCC8" : "none",
                }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#D4870A", flexShrink: 0 }} />
                  <span style={{ color: "#8B6F5E", fontSize: "0.88rem" }}>{c}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
