
import { useState } from "react";
// import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiVite,
  SiPostman,
  SiAxios,
  SiFirebase,
  SiTypescript,
  SiRedux,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26", category: "Frontend", level: "Core" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", category: "Frontend", level: "Core" },
  { name: "JavaScript", icon: FaJs, color: "#C7A600", category: "Frontend", level: "Core" },
  { name: "React.js", icon: FaReact, color: "#087F9B", category: "Frontend", level: "Core" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#0891B2", category: "Frontend", level: "UI Design" },
  { name: "Redux", icon: SiRedux, color: "#764ABC", category: "Frontend", level: "State Management" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Frontend", level: "Learning" },
  { name: "Node.js", icon: FaNodeJs, color: "#43853D", category: "Backend", level: "Backend" },
  { name: "Express.js", icon: SiExpress, color: "#334155", category: "Backend", level: "Backend" },
  { name: "MongoDB", icon: SiMongodb, color: "#328B45", category: "Backend", level: "Database" },
  { name: "Firebase", icon: SiFirebase, color: "#C58A00", category: "Backend", level: "Database" },
  { name: "Git", icon: FaGitAlt, color: "#F05032", category: "Tools", level: "Version Control" },
  { name: "GitHub", icon: FaGithub, color: "#183B49", category: "Tools", level: "Collaboration" },
  { name: "VS Code", icon: FaCode, color: "#007ACC", category: "Tools", level: "Development" },
  { name: "Vite", icon: SiVite, color: "#646CFF", category: "Tools", level: "Build Tool" },
  { name: "Postman", icon: SiPostman, color: "#E85D25", category: "Tools", level: "API Testing" },
  { name: "Axios", icon: SiAxios, color: "#5A29E4", category: "Tools", level: "API Requests" },
];

const filters = ["All Skills", "Frontend", "Backend", "Tools"];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("All Skills");
  const [selectedSkill, setSelectedSkill] = useState("React.js");

  const visibleSkills =
    activeFilter === "All Skills"
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-grid-bg" aria-hidden="true" />
      <div className="skills-orb skills-orb-one" aria-hidden="true" />
      <div className="skills-orb skills-orb-two" aria-hidden="true" />

      <div className="skills-container">
        {/* Section heading */}
        <div className="skills-heading">
          <span className="skills-eyebrow">
            <span className="status-dot" />
            MY TECH STACK
          </span>

          <h2>
            Building with <span>purpose.</span>
            <br />
            Creating with <span>technology.</span>
          </h2>

          <p>
            A collection of technologies I use to transform ideas
            into interactive, responsive, and scalable web experiences.
          </p>
        </div>

        {/* Featured skill */}
        <div className="featured-skill">
          <div className="featured-content">
            <span className="featured-label">
              <span className="featured-dot" />
              DEVELOPER TOOLKIT
            </span>

            <h3>
              From pixels
              <br />
              to <span>possibilities.</span>
            </h3>

            <p>
              Combining creative frontend development with backend
              fundamentals to build meaningful digital experiences.
            </p>

            <div className="featured-tags">
              <span>UI Engineering</span>
              <span>Web Development</span>
              <span>Problem Solving</span>
            </div>
          </div>

          <div className="featured-visual" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />

            <div className="featured-icon">
              <FaCode />
            </div>

            <span className="orbit-label orbit-label-top">{"< />"}</span>
            <span className="orbit-label orbit-label-right">JS</span>
            <span className="orbit-label orbit-label-bottom">{"{ }"}</span>
          </div>

          <span className="featured-index">01 / 03</span>
        </div>

        {/* Interactive filters */}
        <div className="skills-toolbar">
          <div>
            <span className="toolbar-kicker">EXPLORE MY STACK</span>
            <h3>Skills & Technologies</h3>
          </div>

          <div className="skill-filters" aria-label="Filter skills">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`skill-filter ${
                  activeFilter === filter ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
              >
                {filter}
                {activeFilter === filter && (
                  <span className="filter-indicator" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Skill cards */}
        <div className="skills-grid" aria-live="polite">
          {visibleSkills.map((skill, index) => {
            const Icon = skill.icon;
            const isSelected = selectedSkill === skill.name;

            return (
              <button
                type="button"
                key={skill.name}
                className={`skill-card ${isSelected ? "selected" : ""}`}
                style={{
                  "--skill-color": skill.color,
                  "--card-index": index,
                }}
                onClick={() => setSelectedSkill(skill.name)}
                aria-pressed={isSelected}
              >
                <span className="card-number">
                  {String(skills.indexOf(skill) + 1).padStart(2, "0")}
                </span>

                <span className="skill-icon-wrap">
                  <Icon className="skill-icon" aria-hidden="true" />
                </span>

                <span className="skill-name">{skill.name}</span>

                <span className="skill-level">{skill.level}</span>

                <span className="skill-card-arrow" aria-hidden="true">
                  ↗
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected skill information */}
        {(() => {
          const selected = skills.find(
            (skill) => skill.name === selectedSkill
          );

          if (!selected) return null;

          const Icon = selected.icon;

          return (
            <div className="skill-detail" key={selected.name}>
              <div
                className="detail-icon"
                style={{ "--skill-color": selected.color }}
              >
                <Icon aria-hidden="true" />
              </div>

              <div className="detail-copy">
                <span>SELECTED TECHNOLOGY</span>
                <h4>{selected.name}</h4>
                <p>
                  {selected.name} is part of my {selected.category.toLowerCase()}{" "}
                  toolkit, focused on {selected.level.toLowerCase()}.
                </p>
              </div>

              <div className="detail-category">
                <span className="status-dot" />
                {selected.category}
              </div>
            </div>
          );
        })()}

        <div className="skills-footer">
          <span>DESIGNED TO LEARN. BUILT TO CREATE.</span>
          <span>CONTINUOUSLY EVOLVING <span className="footer-arrow">↗</span></span>
        </div>
      </div>
    </section>
  );
}
