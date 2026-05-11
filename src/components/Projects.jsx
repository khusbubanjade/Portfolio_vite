import { useState } from "react";
import FadeIn from "./FadeIn";
import { PROJECTS } from "../data";

function ProjectCard({ p, i }) {
  const [hov, setHov] = useState(false);
  return (
    <FadeIn delay={i * 0.07}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          background: "#FFFAF4",
          border: `1.5px solid ${hov ? "rgba(212,135,10,0.35)" : "#EDD9C0"}`,
          borderRadius: 22, overflow: "hidden",
          display: "flex", flexDirection: "column",
          transform: hov ? "translateY(-8px)" : "",
          boxShadow: hov
            ? "0 24px 60px rgba(139,111,94,0.18), 0 0 0 1px rgba(212,135,10,0.08)"
            : "0 2px 16px rgba(139,111,94,0.06)",
          transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Colour top strip */}
        <div style={{
          height: 4,
          background: `linear-gradient(90deg, ${p.tagC}, ${p.tagC}88)`,
          opacity: hov ? 1 : 0.5, transition: "opacity 0.3s",
        }} />

        <div style={{ padding: "1.4rem 1.4rem 0", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
          <div style={{
            width: 46, height: 46, borderRadius: 14, background: p.tagBg,
            fontSize: "1.4rem", display: "flex", alignItems: "center",
            justifyContent: "center", flexShrink: 0,
            border: `1px solid ${p.tagC}30`,
          }}>{p.icon}</div>
          <span style={{
            fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.8px",
            padding: "4px 10px", borderRadius: 8,
            background: p.tagBg, color: p.tagC,
            border: `1px solid ${p.tagC}40`,
            textTransform: "uppercase", whiteSpace: "nowrap",
            fontFamily: "'Jost', sans-serif",
          }}>{p.tag}</span>
        </div>

        <div style={{ padding: "0.9rem 1.4rem 0.6rem", flex: 1 }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", fontWeight: 700, color: "#2D1B0E", marginBottom: "0.5rem" }}>{p.title}</h3>
          <p style={{ color: "#8B6F5E", fontSize: "0.86rem", lineHeight: 1.7 }}>{p.desc}</p>
        </div>

        <div style={{ padding: "0 1.4rem 0.9rem", display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {p.tech.map((t) => (
            <span key={t} style={{
              fontSize: "0.68rem", background: "rgba(139,111,94,0.07)",
              border: "1px solid #EDD9C0", color: "#8B6F5E",
              padding: "3px 10px", borderRadius: 100,
              fontFamily: "'Jost', sans-serif",
            }}>{t}</span>
          ))}
        </div>

        <div style={{ padding: "0.9rem 1.4rem", borderTop: "1px solid #F0DCC8", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a
            href={p.link} target="_blank" rel="noopener noreferrer"
            className="card-link"
            style={{ color: "#D4870A", fontSize: "0.84rem", fontWeight: 600, fontFamily: "'Jost', sans-serif", textDecoration: "none" }}
          >
            View on GitHub →
          </a>
          {p.commits && <span style={{ fontSize: "0.72rem", color: "#C4A882" }}>⬡ {p.commits}</span>}
        </div>
      </div>
    </FadeIn>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "6rem clamp(1.5rem, 8vw, 5rem)",
        background: "#FFFAF4",
        borderTop: "1px solid #EDD9C0", borderBottom: "1px solid #EDD9C0",
        position: "relative", overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", bottom: 0, right: 0, width: 350, height: 350,
        background: "radial-gradient(circle, rgba(212,135,10,0.07), transparent 70%)",
        pointerEvents: "none",
      }} />

      <FadeIn>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "3px", color: "#D4870A", marginBottom: "0.4rem", textTransform: "uppercase" }}>What I've built</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, color: "#2D1B0E", lineHeight: 1, marginBottom: "3rem" }}>
          My <em style={{ color: "#D4870A" }}>Projects</em>
        </h2>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.4rem" }}>
        {PROJECTS.map((p, i) => <ProjectCard key={i} p={p} i={i} />)}
      </div>
    </section>
  );
}
