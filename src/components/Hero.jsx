import { FloralDot, Petal } from "./Decorations";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex", alignItems: "center",
        padding: "calc(68px + 5rem) clamp(1.5rem, 8vw, 5rem) 5rem",
        position: "relative", overflow: "hidden",
        background: "linear-gradient(135deg, #FDF6EC 0%, #FFF0DC 60%, #FDEBD0 100%)",
      }}
    >
      {/* Blobs */}
      <div style={{
        position: "absolute", top: "-8%", right: "-6%",
        width: 550, height: 550,
        borderRadius: "60% 40% 55% 45% / 50% 60% 40% 55%",
        background: "radial-gradient(circle, rgba(212,135,10,0.12), rgba(232,164,164,0.08) 60%, transparent 80%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-5%", left: "-4%",
        width: 400, height: 400,
        borderRadius: "40% 60% 45% 55% / 55% 45% 60% 40%",
        background: "radial-gradient(circle, rgba(201,123,90,0.1), transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Floral accents */}
      <FloralDot style={{ top: "15%", left: "5%", color: "#D4870A", width: 32, height: 32 }} />
      <FloralDot style={{ bottom: "22%", right: "8%", color: "#E8A4A4", width: 24, height: 24 }} />
      <FloralDot style={{ top: "60%", left: "3%", color: "#C97B5A", width: 20, height: 20 }} />
      <Petal style={{ top: "-30px", right: "38%", color: "#E8A4A4", width: 60, height: 90, opacity: 0.25 }} />
      <Petal style={{ bottom: "-20px", left: "30%", color: "#D4870A", width: 40, height: 70, opacity: 0.2 }} />

      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, #C97B5A22 1px, transparent 1px)",
        backgroundSize: "36px 36px",
        maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)",
      }} />

      <div className="hero-grid" style={{
        display: "grid", gridTemplateColumns: "1fr min(380px, 40%)",
        gap: "4rem", alignItems: "center",
        width: "100%", position: "relative", zIndex: 1, maxWidth: 1200,
      }}>
        {/* Content */}
        <div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(212,135,10,0.1)", border: "1px solid rgba(212,135,10,0.3)",
            color: "#A0620A", fontSize: "0.72rem", fontWeight: 600,
            letterSpacing: "1.8px", textTransform: "uppercase",
            padding: "6px 18px", borderRadius: 100, marginBottom: "2rem",
            animation: "floatUp 0.7s ease both",
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#D4870A", animation: "blip 2s infinite" }} />
            Open to Opportunities
          </div>

          <div style={{ animation: "floatUp 0.7s 0.1s ease both" }}>
            <p style={{
              fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", fontWeight: 400,
              letterSpacing: "4px", color: "#C97B5A", textTransform: "uppercase", marginBottom: "0.5rem",
            }}>Hi, I'm</p>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3.8rem, 9vw, 7.5rem)",
              fontWeight: 700, lineHeight: 0.9,
              color: "#2D1B0E", letterSpacing: "-1px", margin: 0,
            }}>
              Khusbu
              <span style={{ display: "block", color: "#D4870A", fontStyle: "italic" }}>Banjade</span>
            </h1>
          </div>

          <p style={{
            fontFamily: "'Jost', sans-serif", color: "#8B6F5E",
            fontSize: "0.9rem", fontWeight: 400, letterSpacing: "1px",
            margin: "1.2rem 0 0.6rem", animation: "floatUp 0.7s 0.18s ease both",
          }}>
            AI & CLOUD ENGINEER · ALLIANCE TEAM MEMBER AT KINU.AI
          </p>

          <p style={{
            color: "#8B6F5E", fontSize: "1.04rem", maxWidth: 500,
            lineHeight: 1.85, margin: "0.8rem 0 2rem",
            animation: "floatUp 0.7s 0.24s ease both",
          }}>
            Building intelligent systems at the intersection of machine learning, cloud architecture,
            and data science. AWS Certified and passionate about turning data into real-world impact.
          </p>

          {/* Cert badges */}
          <div style={{
            display: "flex", gap: "0.7rem", flexWrap: "wrap",
            marginBottom: "2.4rem", animation: "floatUp 0.7s 0.3s ease both",
          }}>
            {["AWS ML Engineer", "AWS Solutions Architect"].map((c) => (
              <span key={c} style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "rgba(212,135,10,0.08)", border: "1px solid rgba(212,135,10,0.25)",
                color: "#A0620A", fontSize: "0.76rem", fontWeight: 600,
                padding: "6px 14px", borderRadius: 10,
              }}>☁ {c}</span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", animation: "floatUp 0.7s 0.36s ease both" }}>
            <button
              onClick={() => scrollTo("projects")}
              className="btn-primary"
            >
              View My Work ✦
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="btn-outline"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Photo */}
        <div className="hero-photo" style={{ position: "relative", animation: "floatUp 0.7s 0.15s ease both" }}>
          <div style={{
            position: "absolute", inset: -14,
            border: "1.5px solid rgba(212,135,10,0.2)",
            borderRadius: "50% 40% 55% 45% / 45% 55% 45% 55%",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", inset: -28,
            border: "1px dashed rgba(212,135,10,0.12)",
            borderRadius: "45% 55% 50% 50% / 55% 45% 55% 45%",
            animation: "spin 30s linear infinite",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", top: -40, right: -30,
            width: 130, height: 130, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(232,164,164,0.4), transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: -20, left: -20,
            width: 90, height: 90, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,135,10,0.2), transparent 70%)",
            pointerEvents: "none",
          }} />

          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQFlk5F5bvifrw/profile-displayphoto-crop_800_800/B4EZq2kY.MGYAI-/0/1763999586330?e=1773273600&v=beta&t=s6Hiinfs3DV9qUWjlvCX8PwdF8Dt7SyKY7bJLDyBU88"
            alt="Khusbu Banjade"
            style={{
              width: "100%", aspectRatio: "1", objectFit: "cover",
              borderRadius: "50% 40% 55% 45% / 45% 55% 45% 55%",
              border: "3px solid rgba(212,135,10,0.2)", display: "block",
            }}
          />

          {/* Floating badge — available */}
          <div style={{
            position: "absolute", bottom: -16, left: -16,
            background: "#FFFAF4", border: "1.5px solid #EDD9C0",
            borderRadius: 16, padding: "10px 18px",
            display: "flex", alignItems: "center", gap: 10,
            boxShadow: "0 8px 32px rgba(139,111,94,0.12)",
          }}>
            <span style={{ fontSize: "1.1rem" }}>✨</span>
            <div>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", fontWeight: 600, color: "#2D1B0E" }}>Available for work</div>
              <div style={{ fontSize: "0.68rem", color: "#8B6F5E" }}>Let's collaborate!</div>
            </div>
          </div>

          {/* AWS badge */}
          <div style={{
            position: "absolute", top: -14, right: -14,
            background: "#FFFAF4", border: "1.5px solid rgba(212,135,10,0.25)",
            borderRadius: 14, padding: "8px 14px",
            boxShadow: "0 6px 20px rgba(212,135,10,0.15)",
            display: "flex", alignItems: "center", gap: 6,
          }}>
            <span style={{ fontSize: "1rem" }}>☁</span>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", fontWeight: 700, color: "#A0620A" }}>
              2× AWS<br />Certified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
