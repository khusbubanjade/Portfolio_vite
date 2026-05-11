import { useState } from "react";
import "./index.css";

import Nav        from "./components/Nav";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Experience from "./components/Experience";
import Projects   from "./components/Projects";
import Contact    from "./components/Contact";
import BackToTop  from "./components/BackToTop";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <Nav mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer style={{
        background: "#FFFAF4",
        borderTop: "1px solid #EDD9C0",
        textAlign: "center",
        padding: "2.2rem",
        color: "#C4A882",
        fontSize: "0.84rem",
        fontFamily: "'Jost', sans-serif",
        letterSpacing: "0.3px",
      }}>
        Designed & Built with{" "}
        <span style={{ color: "#E8A4A4" }}>♥</span>
        {" "}by{" "}
        <span style={{ color: "#D4870A", fontWeight: 600 }}>Khusbu Banjade</span>
        {" "}· © 2025
      </footer>
      <BackToTop />
    </>
  );
}
