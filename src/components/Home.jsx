
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Download,
} from "lucide-react";

const roles = [
  "Frontend Developer",
  "React Developer",
  "Full Stack Developer",
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let delay = isDeleting ? 38 : 85;

    if (!isDeleting && text === currentRole) {
      delay = 1600;
    }

    if (isDeleting && text === "") {
      delay = 300;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((previous) => (previous + 1) % roles.length);
      } else if (isDeleting) {
        setText(currentRole.slice(0, text.length - 1));
      } else {
        setText(currentRole.slice(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero">
      {/* Responsive background artwork */}
      <div className="hero-background" aria-hidden="true" />

      {/* Atmospheric lighting */}
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-container">
        {/* Top status */}
        <div className="hero-status">
          <span className="hero-status-dot" />
          <span>DESIGN · DEVELOP · CREATE</span>
        </div>

        {/* Left text */}
        <div className="hero-intro">
          <span className="hero-kicker">HELLO, WORLD!</span>

          <h1 className="hero-heading">
            Hey there,
            <br />
            I'm <span>Manish.</span>
          </h1>

          <div className="hero-role">
            <span className="hero-role-label">I build</span>

            <span className="hero-role-text" aria-live="polite">
              {text}
              <span className="hero-cursor" aria-hidden="true" />
            </span>
          </div>

          <p className="hero-description">
            Turning ideas into thoughtful digital experiences
            through code, creativity, and curiosity.
          </p>

          {/* Resume buttons */}
          <div className="hero-actions">
            <a
              href="/resume.pdf"
              download="Manish_Nagpure_Resume.pdf"
              className="hero-resume-btn"
            >
              <Download size={17} />
              Download Resume
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hero-resume-preview"
            >
              View Resume
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Email */}
          <a
            href="mailto:manishngpdoc@gmail.com"
            className="hero-email"
          >
            <span>manishngpdoc@gmail.com</span>
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* Center portrait */}
        <div className="hero-portrait">
          <div className="portrait-glow" aria-hidden="true" />

          <div
            className="portrait-orbit portrait-orbit-outer"
            aria-hidden="true"
          />

          <div
            className="portrait-orbit portrait-orbit-inner"
            aria-hidden="true"
          />

          <span className="portrait-coordinate coordinate-bottom">
            CREATIVE ENGINEERING
          </span>

          <img
            src="/images/me.png"
            alt="Manish Nagpure"
            className="hero-person"
          />

          {/* Floating glass technology chip */}
          <div className="hero-float-chip">
            <span className="chip-icon">
              <Code2 size={19} />
            </span>

            <span className="chip-copy">
              <span>CRAFTED WITH</span>
              <strong>Code & Creativity</strong>
            </span>

            <span className="chip-live-dot" />
          </div>
        </div>

        {/* Right-side statement */}
        <div className="hero-manifesto">
          <span className="manifesto-line" />

          <p>
            Simple ideas.
            <br />
            <span>Beautifully</span>
            <br />
            engineered.
          </p>
        </div>

        {/* Bottom information */}
        <div className="hero-bottom">
          <div className="hero-profession">
            <span className="profession-number">01</span>

            <div>
              <span>MY DISCIPLINE</span>
              <strong>Web Development</strong>
            </div>
          </div>

          <a href="#about" className="hero-scroll">
            <span className="scroll-label">EXPLORE MY WORLD</span>

            <span className="scroll-circle">
              <ArrowDown size={17} />
            </span>
          </a>

          <div className="hero-engineer">
            <div className="engineer-glass">
              <img
                src="/images/engineering.svg"
                alt=""
              />
            </div>

            <div>
              <strong>Engineer</strong>
              <span>BY EDUCATION</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-divider" aria-hidden="true" />
    </section>
  );
}
