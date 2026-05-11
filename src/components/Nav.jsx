import { useState } from "react";
import { NAV_LINKS } from "../data";
import { useScrollSpy, useScrolled } from "../hooks";

export default function Nav({ mobileOpen, setMobileOpen }) {
  const scrolled = useScrolled();
  const active = useScrollSpy();

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: 68,
          background: scrolled ? "rgba(253,246,236,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid #EDD9C0" : "1px solid transparent",
          transition: "all 0.4s ease",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 clamp(1.5rem, 6vw, 5rem)",
        }}
      >
        {/* Logo */}
        <div
          onClick={() => go("home")}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.7rem", fontWeight: 700, letterSpacing: "1px",
            color: "#2D1B0E", cursor: "pointer",
            display: "flex", alignItems: "center", gap: 6,
          }}
        >
          KB
          <span style={{ color: "#D4870A", fontSize: "1.2rem" }}>✦</span>
        </div>

        {/* Desktop Links */}
        <ul className="nav-desktop" style={{ display: "flex", gap: "2.5rem", listStyle: "none", margin: 0, padding: 0 }}>
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <button
                onClick={() => go(l.toLowerCase())}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: "'Jost', sans-serif",
                  color: active === l ? "#D4870A" : "#8B6F5E",
                  fontSize: "0.88rem", fontWeight: 500, letterSpacing: "0.8px",
                  transition: "color 0.25s", padding: "4px 0", position: "relative",
                }}
              >
                {l}
                {active === l && (
                  <span style={{
                    position: "absolute", bottom: -4, left: "50%",
                    transform: "translateX(-50%)",
                    width: 4, height: 4, borderRadius: "50%", background: "#D4870A",
                  }} />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="ham-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: "none", border: "1px solid #EDD9C0",
            borderRadius: 10, padding: "8px 10px", cursor: "pointer",
            display: "flex", flexDirection: "column", gap: 5,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block", width: 20, height: 2,
                background: mobileOpen && i === 1 ? "transparent" : "#8B6F5E",
                borderRadius: 2,
                transform: mobileOpen
                  ? i === 0 ? "translateY(7px) rotate(45deg)"
                  : i === 2 ? "translateY(-7px) rotate(-45deg)" : ""
                  : "",
                transition: "all 0.3s",
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: "fixed", top: 68, left: 0, right: 0, zIndex: 99,
          background: "rgba(253,246,236,0.97)", backdropFilter: "blur(16px)",
          borderBottom: "1px solid #EDD9C0",
          padding: "1.5rem 2rem", display: "flex", flexDirection: "column", gap: "1rem",
        }}>
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => go(l.toLowerCase())}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: active === l ? "#D4870A" : "#8B6F5E",
                fontFamily: "'Jost', sans-serif", fontSize: "1.1rem",
                fontWeight: 500, textAlign: "left",
                padding: "0.5rem 0", borderBottom: "1px solid #EDD9C0",
              }}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
