
import {
  Code2,
  Lightbulb,
  Users,
  ChartNoAxesCombined,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    number: "01",
    title: "Clean Code",
    description:
      "Building maintainable, reusable, and efficient code with a focus on quality.",
    tag: "CODE QUALITY",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Problem Solver",
    description:
      "Breaking complex challenges into practical and straightforward solutions.",
    tag: "CREATIVE THINKING",
  },
  {
    icon: Users,
    number: "03",
    title: "Team Player",
    description:
      "Collaborating with others, sharing ideas, and learning from different perspectives.",
    tag: "COLLABORATION",
  },
  {
    icon: ChartNoAxesCombined,
    number: "04",
    title: "Always Learning",
    description:
      "Exploring modern technologies and continuously improving my development skills.",
    tag: "GROWTH MINDSET",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="about-section relative isolate overflow-hidden px-6 py-24 text-[#183b49] sm:px-10 lg:px-[7%] lg:py-32"
    >
      {/* Decorative background */}
      <div className="about-grid absolute inset-0 -z-20" />
      <div className="about-glow about-glow-one absolute -z-10" />
      <div className="about-glow about-glow-two absolute -z-10" />

      <div className="mx-auto max-w-[1400px]">
        {/* Section header */}
        <div className="about-reveal mb-14 max-w-3xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-[2px] w-12 bg-[#197d78]" />

            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#197d78]">
              <Sparkles size={15} />
              A LITTLE ABOUT ME
            </span>
          </div>

          <h2 className="text-4xl font-extrabold leading-[1.12] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
            The developer
            <br />
            behind the <span className="text-[#197d78]">code.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#61777a] sm:text-lg">
            A curious mind, a passion for building, and a constant drive
            to turn ideas into meaningful digital experiences.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* About content */}
          <div className="about-reveal">
            <div className="about-glass-panel rounded-[28px] p-7 sm:p-10">
              <div className="mb-7 flex items-center justify-between gap-4">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#197d78]">
                  My Story
                </span>

                <span className="rounded-full border border-[#197d78]/20 bg-white/60 px-3 py-1.5 text-[10px] font-bold tracking-wider text-[#197d78]">
                  DEVELOPER PROFILE
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Hi, I'm Manish Nagpure.
              </h3>

              <p className="mt-5 text-sm leading-8 text-[#536b76] sm:text-base">
                I'm a Computer Science and Engineering graduate from
                Sant Gadge Baba Amravati University (SGBAU), with a
                strong interest in web development and modern technologies.
              </p>

              <p className="mt-4 text-sm leading-8 text-[#536b76] sm:text-base">
                I build responsive and user-friendly interfaces using
                <strong className="font-semibold text-[#183b49]">
                  {" "}HTML, CSS, JavaScript, React.js, and Tailwind CSS.
                </strong>
                {" "}I'm also developing my backend skills with Node.js,
                Express.js, and MongoDB.
              </p>

              <p className="mt-4 text-sm leading-8 text-[#536b76] sm:text-base">
                Through hands-on projects, I've explored REST API
                integration, database operations, application state
                management, and responsive UI design. I enjoy
                understanding how things work and turning what I learn
                into working applications.
              </p>

              {/* Career goal */}
              <div className="about-goal mt-8 rounded-2xl border border-[#197d78]/15 bg-[#eaf3ec]/70 p-5 sm:p-6">
                <div className="mb-3 flex items-center gap-2">
                  <Sparkles size={17} className="text-[#197d78]" />

                  <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#197d78]">
                    What drives me
                  </span>
                </div>

                <p className="text-sm font-medium leading-7 text-[#315362] sm:text-base">
                  To grow as a software developer, contribute to
                  meaningful products, and build solutions that combine
                  thoughtful design with reliable functionality.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {["React.js", "JavaScript", "Tailwind CSS", "Node.js"].map(
                  (tech) => (
                    <span key={tech} className="about-tech-pill">
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div>
            <div className="about-reveal mb-6 flex items-end justify-between gap-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#197d78]">
                  HOW I WORK
                </span>

                <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  My core values
                </h3>
              </div>

              <span className="pb-1 text-xs font-semibold text-[#82928b]">
                04 PRINCIPLES
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map(
                ({ icon: Icon, number, title, description, tag }, index) => (
                  <article
                    key={title}
                    className="about-feature-card about-reveal"
                    style={{ "--feature-index": index }}
                  >
                    <div className="mb-7 flex items-center justify-between">
                      <span className="about-feature-icon">
                        <Icon size={25} strokeWidth={1.8} />
                      </span>

                      <span className="text-xs font-bold tracking-widest text-[#8da49b]">
                        {number}
                      </span>
                    </div>

                    <h4 className="text-lg font-extrabold tracking-tight">
                      {title}
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-[#61777a]">
                      {description}
                    </p>

                    <div className="mt-6 flex items-center justify-between gap-2">
                      <span className="text-[9px] font-extrabold tracking-[0.13em] text-[#197d78]">
                        {tag}
                      </span>

                      <ArrowUpRight
                        size={17}
                        className="about-feature-arrow shrink-0"
                      />
                    </div>
                  </article>
                )
              )}
            </div>

            {/* Bottom note */}
            <div className="about-reveal mt-5 flex items-center gap-3 rounded-2xl border border-[#197d78]/15 bg-white/50 px-5 py-4 backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#197d78]/40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#197d78]" />
              </span>

              <p className="text-xs font-medium leading-6 text-[#536b76]">
                Focused on learning, building, and getting better with every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
