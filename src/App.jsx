
import { useState } from "react";

const GITHUB = "https://github.com/maulikjasani145-oss";
const LINKEDIN = "https://www.linkedin.com/in/maulik-jasani-6b4730409/";
const EMAIL = "your-email@example.com";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Node.js",
  "Git",
  "GitHub",
  "MongoDB",
  "Express.js",
];

const projects = [
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather application that allows users to search for different cities and view current weather conditions and forecasts.",
    tech: ["HTML", "CSS", "JavaScript", "Weather API"],
    github: GITHUB,
  },
  {
    title: "Task Manager",
    description:
      "A simple task management application where users can add, edit, delete, and organize daily tasks to stay productive.",
    tech: ["React", "JavaScript", "CSS"],
    github: GITHUB,
  },
  {
    title: "Movie Explorer",
    description:
      "A movie discovery application that allows users to search for movies, explore movie details, and browse information about films.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    github: GITHUB,
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Resume", "#resume"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Maulik<span>.</span>
      </a>

      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${open ? "show" : ""}`}>
        {links.map(([name, url]) => (
          <a key={name} href={url} onClick={() => setOpen(false)}>
            {name}
          </a>
        ))}
      </div>

      <a href="#contact" className="nav-contact">
        Let's Talk ↗
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-content">
        <div className="availability">
          <span></span> FULL STACK DEVELOPER
        </div>

        <p className="eyebrow">HELLO, I'M MAULIK JASANI</p>

        <h1>
          Building Digital
          <br />
          <span>Experiences.</span>
        </h1>

        <p className="hero-description">
          I'm a Full Stack Developer passionate about creating
          modern, responsive and user-friendly web applications.
          I love turning ideas into meaningful digital experiences.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="button primary">
            Explore My Work ↗
          </a>

          <a href="#contact" className="button secondary">
            Contact Me
          </a>
        </div>

        <div className="social-links">
          <a href={GITHUB} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>

          <a href={LINKEDIN} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>

          <a href={`mailto:${EMAIL}`}>
            Email ↗
          </a>
        </div>
      </div>

      <div className="hero-art">
        <div className="glow-circle"></div>
        <div className="orbit"></div>

        <div className="developer-card">
          <div className="code-icon">&lt;/&gt;</div>
          <h2>Maulik Jasani</h2>
          <p>Full Stack Developer</p>
          <div className="card-line"></div>

          <div className="card-tags">
            <span>Creative</span>
            <span>Developer</span>
          </div>
        </div>

        <div className="floating-tag tag-one">
          ⚡ Clean Code
        </div>

        <div className="floating-tag tag-two">
          ✦ Web Developer
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ small, title, highlight, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{small}</p>
      <h2>
        {title} <span>{highlight}</span>
      </h2>
      <p>{description}</p>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section container">
      <SectionHeading
        small="GET TO KNOW ME"
        title="About"
        highlight="Me"
        description="A little introduction about who I am and what I do."
      />

      <div className="about-grid">
        <div className="glass-card">
          <div className="feature-icon">⌘</div>
          <h3>Who I Am</h3>

          <p>
            Hello! I'm Maulik Jasani, a Full Stack Developer
            interested in creating modern and functional web
            applications. I enjoy learning new technologies
            and solving development challenges.
          </p>
        </div>

        <div className="glass-card">
          <div className="feature-icon">✦</div>
          <h3>My Goal</h3>

          <p>
            My goal is to grow as a developer, improve my
            technical skills and build useful digital products
            that provide excellent user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section container">
      <SectionHeading
        small="MY EXPERTISE"
        title="Technical"
        highlight="Skills"
        description="Technologies and tools used in my development journey."
      />

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={skill}>
            <span className="skill-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span>{skill}</span>
            <span className="skill-arrow">↗</span>
          </div>
        ))}
      </div>

      <p className="note">
        Update this list to reflect your actual technical experience.
      </p>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section container">
      <SectionHeading
        small="MY RECENT WORK"
        title="Featured"
        highlight="Projects"
        description="A selection of web applications and personal practice projects."
      />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            className="project-card glass-card"
            key={project.title}
          >
            <div className="project-top">
              <span>
                {String(index + 1).padStart(2, "0")} / PROJECT
              </span>

              <span className="project-symbol">↗</span>
            </div>

            <div className="project-illustration">
              <span>&lt; CODE /&gt;</span>
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-tags">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View GitHub Profile ↗
            </a>
          </article>
        ))}
      </div>

      <p className="note">
        These are sample project concepts. Replace them with your
        actual projects when they are ready.
      </p>
    </section>
  );
}

function TechStack() {
  const tools = [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Vite",
    "Git",
    "GitHub",
    "Node.js",
    "MongoDB",
  ];

  return (
    <section className="section container">
      <SectionHeading
        small="MY TOOLKIT"
        title="Technology"
        highlight="Stack"
        description="Tools and technologies used in my development workflow."
      />

      <div className="tech-cloud">
        {tools.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>
    </section>
  );
}

function AITools() {
  return (
    <section className="section container">
      <SectionHeading
        small="SMART DEVELOPMENT"
        title="AI Tools"
        highlight="Utilized"
        description="AI assistance used during the planning and development process."
      />

      <div className="glass-card ai-card">
        <div className="feature-icon">✧</div>

        <div>
          <h3>ChatGPT</h3>

          <p>
            Used for project planning, coding guidance,
            troubleshooting, design ideas and documentation.
          </p>
        </div>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section id="resume" className="section container">
      <SectionHeading
        small="MY QUALIFICATIONS"
        title="My"
        highlight="Resume"
        description="Explore my education, experience and technical background."
      />

      <div className="glass-card resume-card">
        <div className="resume-icon">📄</div>

        <div className="resume-info">
          <h3>Maulik Jasani - Resume</h3>

          <p>
            View or download my resume to learn more about
            my professional background and qualifications.
          </p>

          <div className="hero-actions">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="button primary"
            >
              View Resume ↗
            </a>

            <a
              href="/resume.pdf"
              download="Maulik_Jasani_Resume.pdf"
              className="button secondary"
            >
              Download CV ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section container">
      <SectionHeading
        small="GET IN TOUCH"
        title="Let's Work"
        highlight="Together"
        description="Have an idea or opportunity? Feel free to connect."
      />

      <div className="contact-card glass-card">
        <h3>Let's create something amazing.</h3>

        <p>
          I'm interested in learning opportunities, collaboration
          and exciting development projects.
        </p>

        <a href={`mailto:${EMAIL}`} className="button primary">
          ✉ Send Me an Email
        </a>

        <div className="contact-socials">
          <a href={LINKEDIN} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>

          <a href={GITHUB} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>

          <a href={`mailto:${EMAIL}`}>
            Email ↗
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="logo">
        Maulik<span>.</span>
      </a>

      <p>Designed and developed by Maulik Jasani.</p>

      <p>
        © {new Date().getFullYear()} Maulik Jasani. All rights reserved.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <TechStack />
        <AITools />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
