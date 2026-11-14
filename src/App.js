import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Download } from "lucide-react";
import { profile, stats, experience, projects, skills, education } from "./data";
import "./index.css";

const NAV = [
  ["about", "About"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["contact", "Contact"],
];

function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) { setShown(true); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${shown ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

const Heading = ({ num, title }) => (
  <Reveal className="heading">
    <span className="num">{num}</span>
    <h2>{title}</h2>
  </Reveal>
);

const Tags = ({ items }) => (
  <ul className="tags">{items.map((t) => <li key={t}>{t}</li>)}</ul>
);

export default function App() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      let cur = "";
      NAV.forEach(([id]) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) cur = id;
      });
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <a href="#top" className="mark">Shreya Mhetre<i /></a>
        <nav>
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>{label}</a>
          ))}
        </nav>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">{profile.role} — {profile.location}</p>
            <h1>
              Building LLM systems<br />that hold up in <em>production.</em>
            </h1>
            <p className="hero-sub">{profile.summary}</p>
            <div className="actions">
              <a className="btn solid" href="#projects">Selected work</a>
              <a className="btn" href={profile.resume} target="_blank" rel="noreferrer">
                Resume <Download size={15} />
              </a>
            </div>
          </div>
          <aside className="hero-panel">
            <p className="panel-label">At a glance</p>
            <dl>
              {stats.map((s) => (
                <div key={s.label}>
                  <dt>{s.value}</dt>
                  <dd>{s.label}</dd>
                </div>
              ))}
            </dl>
            <p className="panel-foot">Python · LangChain · CrewAI · Next.js · AWS</p>
          </aside>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <Heading num="01" title="About" />
          <div className="about">
            <Reveal as="p" className="about-lead">
              I build agentic RAG pipelines, multi-agent systems and the cloud-native platforms around them,
              from the first prototype to something enterprise teams rely on.
            </Reveal>
            <Reveal delay={100} className="about-body">
              <p>
                Over 2.5 years I've worked across Python, LangChain, pgvector, Next.js and Node.js, with
                end-to-end ownership of systems used by enterprise clients and partners across 30 markets.
              </p>
              <p>
                I care about the parts that make a model trustworthy once real people depend on it:
                evaluation, evidence verification, access control and observability.
              </p>
              <ul className="focus">
                <li>Agentic RAG</li>
                <li>Multi-agent orchestration</li>
                <li>Model Context Protocol</li>
                <li>AWS cloud-native systems</li>
              </ul>
            </Reveal>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <Heading num="02" title="Experience" />
          <Reveal className="company">
            <div>
              <h3>{experience.company}</h3>
              <p>{experience.place}</p>
            </div>
            <ol className="roles">
              {experience.roles.map((r, i) => (
                <li key={r.title} className={i === 0 ? "current" : ""}>
                  <span>{r.period}</span>
                  <b>{r.title}</b>
                </li>
              ))}
            </ol>
          </Reveal>

          <div className="rows">
            {experience.projects.map((p, i) => (
              <Reveal key={p.name} className="row" delay={i * 50}>
                <div className="row-meta">
                  <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                  <h4>{p.name}</h4>
                  <p>{p.subtitle}</p>
                </div>
                <div className="row-body">
                  <ul>{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                  <Tags items={p.stack} />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section band">
          <div className="band-inner">
            <Heading num="03" title="Selected projects" />
            <div className="projects">
              {projects.map((p, i) => (
                <Reveal key={p.name} className="project" delay={(i % 2) * 80}>
                  <div className="project-top">
                    <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                    <span className="period">{p.period}</span>
                  </div>
                  <h4>{p.name}</h4>
                  <p className="tagline">{p.tagline}</p>
                  <ul>{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                  <Tags items={p.stack} />
                  <div className="links">
                    {p.links.map((l) => (
                      <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                        {l.label} <ArrowUpRight size={15} />
                      </a>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <Heading num="04" title="Skills" />
          <div className="skills">
            {skills.map((g, i) => (
              <Reveal key={g.group} className="skill" delay={i * 30}>
                <h5>{g.group}</h5>
                <p>{g.items.join("  ·  ")}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="edu">
            <span className="panel-label">Education</span>
            <h4>{education.school}</h4>
            <p>{education.degree} — {education.period}</p>
          </Reveal>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <Heading num="05" title="Contact" />
          <Reveal>
            <p className="contact-lead">Have a question or an idea worth discussing?</p>
            <a className="mail" href={`mailto:${profile.email}`}>
              {profile.email}<ArrowUpRight size={34} />
            </a>
            <div className="contact-links">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
              <a href={profile.resume} target="_blank" rel="noreferrer">Resume <ArrowUpRight size={14} /></a>
              <span>{profile.phone}</span>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Shreya Mhetre</span>
        <span>{profile.location}</span>
      </footer>
    </>
  );
}
