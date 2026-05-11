import { useState } from "react";
import FadeIn from "./FadeIn";
import { FloralDot, Petal } from "./Decorations";

const CONTACT_ITEMS = [
  { icon: "📍", text: "Kathmandu, Bāgmatī, Nepal", href: null },
  { icon: "📧", text: "khusbubanjade@gmail.com", href: "mailto:khusbubanjade@gmail.com" },
  { icon: "🐙", text: "github.com/khusbubanjade", href: "https://github.com/khusbubanjade" },
  { icon: "💼", text: "linkedin.com/in/khusbu-banjade", href: "https://www.linkedin.com/in/khusbu-banjade-8803a2363/" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Please enter a valid email.";
    if (form.message.trim().length < 10) e.message = "Message is too short (min 10 characters).";
    return e;
  };

  const submit = () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    }, 1200);
  };

  const inputStyle = (field) => ({
    background: "rgba(253,246,236,0.7)",
    border: `1.5px solid ${errors[field] ? "#C0392B" : "#EDD9C0"}`,
    borderRadius: 12, color: "#2D1B0E",
    padding: "13px 16px",
    fontFamily: "'Jost', sans-serif", fontSize: "0.95rem",
    outline: "none", width: "100%", boxSizing: "border-box",
    transition: "border-color 0.25s, box-shadow 0.25s",
  });

  return (
    <section
      id="contact"
      style={{
        padding: "6rem clamp(1.5rem, 8vw, 5rem)",
        background: "linear-gradient(180deg, #FDF6EC 0%, #FFF8F2 100%)",
        position: "relative", overflow: "hidden",
      }}
    >
      <Petal style={{ top: "-40px", right: "20%", color: "#E8A4A4", width: 70, height: 110, opacity: 0.2 }} />
      <FloralDot style={{ bottom: "12%", right: "6%", color: "#D4870A", width: 30, height: 30 }} />

      <FadeIn>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "3px", color: "#D4870A", marginBottom: "0.4rem", textTransform: "uppercase" }}>Say hello</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, color: "#2D1B0E", lineHeight: 1, marginBottom: "3rem" }}>
          Get In <em style={{ color: "#D4870A" }}>Touch</em>
        </h2>
      </FadeIn>

      <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start", maxWidth: 980 }}>
        {/* Info */}
        <FadeIn delay={0.1}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.7rem", fontWeight: 700, color: "#2D1B0E", marginBottom: "0.9rem" }}>
            Let's build something together.
          </h3>
          <p style={{ color: "#8B6F5E", fontSize: "0.96rem", lineHeight: 1.78, marginBottom: "2rem" }}>
            Whether you have a collaboration proposal, a project idea, or just want to connect — my inbox is always open. I'll respond within 24 hours!
          </p>
          {CONTACT_ITEMS.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: "1rem" }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12,
                background: "rgba(212,135,10,0.08)", border: "1.5px solid rgba(212,135,10,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1rem", flexShrink: 0,
              }}>{item.icon}</div>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer"
                  className="contact-link-text"
                  style={{ color: "#8B6F5E", fontSize: "0.9rem", textDecoration: "none" }}>
                  {item.text}
                </a>
              ) : (
                <span style={{ color: "#8B6F5E", fontSize: "0.9rem" }}>{item.text}</span>
              )}
            </div>
          ))}
        </FadeIn>

        {/* Form */}
        <FadeIn delay={0.2}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { f: "name", l: "Your Name", t: "text", ph: "Jane Doe" },
              { f: "email", l: "Email Address", t: "email", ph: "hello@example.com" },
            ].map(({ f, l, t, ph }) => (
              <div key={f} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <label style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", fontWeight: 500, color: "#8B6F5E", letterSpacing: "0.3px" }}>{l}</label>
                <input
                  type={t} placeholder={ph} value={form[f]}
                  onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                  onFocus={(e) => { e.target.style.borderColor = "#D4870A"; e.target.style.boxShadow = "0 0 0 3px rgba(212,135,10,0.12)"; }}
                  onBlur={(e) => { e.target.style.borderColor = errors[f] ? "#C0392B" : "#EDD9C0"; e.target.style.boxShadow = ""; }}
                  style={inputStyle(f)}
                />
                {errors[f] && <span style={{ fontSize: "0.76rem", color: "#C0392B" }}>{errors[f]}</span>}
              </div>
            ))}

            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <label style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", fontWeight: 500, color: "#8B6F5E", letterSpacing: "0.3px" }}>Message</label>
              <textarea
                rows={5} placeholder="Hi Khusbu, I'd love to collaborate on..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={(e) => { e.target.style.borderColor = "#D4870A"; e.target.style.boxShadow = "0 0 0 3px rgba(212,135,10,0.12)"; }}
                onBlur={(e) => { e.target.style.borderColor = errors.message ? "#C0392B" : "#EDD9C0"; e.target.style.boxShadow = ""; }}
                style={{ ...inputStyle("message"), resize: "vertical" }}
              />
              {errors.message && <span style={{ fontSize: "0.76rem", color: "#C0392B" }}>{errors.message}</span>}
            </div>

            {sent && (
              <div style={{
                background: "rgba(212,135,10,0.08)", border: "1.5px solid rgba(212,135,10,0.3)",
                color: "#A0620A", borderRadius: 12, padding: "1rem 1.2rem",
                fontSize: "0.9rem", fontWeight: 500, textAlign: "center",
                animation: "floatUp 0.4s ease",
              }}>✨ Message sent! I'll get back to you soon.</div>
            )}

            <button
              onClick={submit}
              disabled={sending}
              className="btn-primary"
              style={{ alignSelf: "flex-start", opacity: sending ? 0.7 : 1, cursor: sending ? "not-allowed" : "pointer" }}
            >
              {sending ? "Sending…" : "Send Message ✦"}
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
