import FadeIn from "./FadeIn";
import { FloralDot } from "./Decorations";
import { EXPERIENCES } from "../data";

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "6rem clamp(1.5rem, 8vw, 5rem)",
        background: "linear-gradient(180deg, #FDF6EC 0%, #FFF8F2 100%)",
        position: "relative", overflow: "hidden",
      }}
    >
      <FloralDot style={{ top: "8%", right: "4%", color: "#E8A4A4", width: 36, height: 36 }} />
      <FloralDot style={{ bottom: "10%", left: "3%", color: "#D4870A", width: 26, height: 26 }} />

      <FadeIn>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "3px", color: "#D4870A", marginBottom: "0.4rem", textTransform: "uppercase" }}>Where I've worked</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, color: "#2D1B0E", lineHeight: 1, marginBottom: "3rem" }}>
          Experi<em style={{ color: "#D4870A" }}>ence</em>
        </h2>
      </FadeIn>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", maxWidth: 860 }}>
        {EXPERIENCES.map((exp, i) => (
          <FadeIn key={i} delay={i * 0.12}>
            <div
              className="exp-card"
              style={{
                background: "#FFFAF4", border: "1.5px solid #EDD9C0",
                borderRadius: 22, padding: "2rem 2.2rem",
                display: "grid", gridTemplateColumns: "54px 1fr",
                gap: "1.5rem", alignItems: "start",
                boxShadow: "0 2px 16px rgba(139,111,94,0.06)",
                transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(212,135,10,0.35)";
                e.currentTarget.style.transform = "translateX(6px)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(212,135,10,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#EDD9C0";
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "0 2px 16px rgba(139,111,94,0.06)";
              }}
            >
              <div style={{
                width: 54, height: 54, borderRadius: 16,
                background: exp.accent === "#D4870A" ? "rgba(212,135,10,0.1)" : "rgba(201,123,90,0.1)",
                border: `1.5px solid ${exp.accent === "#D4870A" ? "rgba(212,135,10,0.25)" : "rgba(201,123,90,0.25)"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.4rem", flexShrink: 0, color: exp.accent, fontFamily: "serif",
              }}>{exp.icon}</div>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 700, color: "#2D1B0E", marginBottom: 2 }}>{exp.role}</div>
                <div style={{ color: exp.accent, fontSize: "0.9rem", fontWeight: 600, fontFamily: "'Jost', sans-serif", marginBottom: 3 }}>{exp.company}</div>
                <div style={{ color: "#C4A882", fontSize: "0.74rem", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "0.9rem" }}>{exp.date}</div>
                <div style={{ color: "#8B6F5E", fontSize: "0.9rem", lineHeight: 1.78 }}>{exp.desc}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
