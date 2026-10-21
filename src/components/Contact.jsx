
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const phone = "919834195914";
  const email = "mainshngpdoc@gmail.com";

  const whatsappMessage = encodeURIComponent(
    "Hi Manish! I visited your portfolio and would like to connect."
  );

  return (
    <section className="contact-section" id="contact">
      <div className="contact-orb contact-orb-one" />
      <div className="contact-orb contact-orb-two" />

      <div className="contact-container">
        {/* Section heading */}
        <div className="contact-heading">
          <span className="contact-eyebrow">
            <Sparkles size={15} />
            LET'S CONNECT
          </span>

          <h2>
            Have an idea?
            <br />
            <span>Let's make it happen.</span>
          </h2>

          <p>
            I'm always open to discussing new projects, creative ideas,
            opportunities, or just having a conversation about technology.
          </p>
        </div>

        {/* Contact card */}
        <div className="contact-glass-card">
          <div className="contact-card-top">
            <div>
              <span className="contact-mini-label">GET IN TOUCH</span>
              <h3>Let's build something meaningful.</h3>
            </div>

            <div className="contact-status">
              <span className="status-dot" />
              Open to opportunities
            </div>
          </div>

          <div className="contact-methods">
            {/* Email */}
            <a
              href={`mailto:${email}?subject=${encodeURIComponent(
                "Let's connect"
              )}`}
              className="contact-method"
            >
              <span className="contact-method-icon">
                <Mail size={22} />
              </span>

              <span className="contact-method-content">
                <span className="contact-method-label">EMAIL ME</span>
                <span className="contact-method-value">{email}</span>
              </span>

              <ArrowUpRight
                className="contact-method-arrow"
                size={20}
              />
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${phone}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="contact-method"
            >
              <span className="contact-method-icon whatsapp-icon">
                <MessageCircle size={22} />
              </span>

              <span className="contact-method-content">
                <span className="contact-method-label">WHATSAPP</span>
                <span className="contact-method-value">
                  +91 98341 95914
                </span>
              </span>

              <ArrowUpRight
                className="contact-method-arrow"
                size={20}
              />
            </a>
          </div>

          <div className="contact-card-bottom">
            <span>Have a project in mind?</span>

            <a
              href={`https://wa.me/${phone}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="contact-cta"
            >
              Let's talk
              <ArrowRight size={17} />
            </a>
          </div>
        </div>

        {/* Social links */}
        <div className="contact-social-row">
          <div>
            <span className="contact-social-heading">
              FIND ME ONLINE
            </span>
            <p>A little more about me and my work.</p>
          </div>

          <div className="contact-social-links">
            <a
              href="https://github.com/manishngp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="social-link"
            >
              {/* <Github size={20} /> */}
              <FaGithub />
              <span>GitHub</span>
              <ArrowUpRight size={15} />
            </a>

            <a
              href="https://www.linkedin.com/in/manish-nagpure-mngp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="social-link"
            >
              <FaLinkedin size={24} />
              <span>LinkedIn</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="portfolio-footer">
          <a href="#home" className="footer-brand">
            M<span>.</span>
          </a>

          <p>
            Designed with curiosity. Built with <span>♥</span> and code.
          </p>

          <a href="#home" className="back-to-top">
            <ArrowDown size={16} />
            <span>BACK TO TOP</span>
          </a>
        </footer>

        <div className="footer-copyright">
          © {new Date().getFullYear()} Manish Nagpure. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Contact;
