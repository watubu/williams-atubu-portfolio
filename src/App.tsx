import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronDown,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from 'lucide-react';

const sections = ['home', 'about', 'skills', 'projects', 'journey', 'contact'];

const skills = {
  Languages: ['Python', 'Go', 'JavaScript'],
  Web: ['HTML', 'CSS'],
  Backend: ['Go', 'REST APIs'],
  Database: ['PostgreSQL'],
  Tools: ['Git', 'GitHub', 'Linux / Ubuntu', 'VS Code'],
  Interests: ['Artificial Intelligence', 'Cybersecurity'],
};

const projects = [
 {
    name: 'Williams-Fits',
    label: 'Fitness / Workout Web App',
    summary: 'A responsive fitness web application designed to help users follow workout plans, explore exercises and track their progress.',
    description: 'A responsive fitness web application built to provide users with structured workout plans, an exercise library, workout timing and progress tracking through a clean and accessible interface.',
    purpose: 'Provide a clear and engaging digital experience for users to follow workouts, explore exercises, use workout timers and monitor their fitness progress.',
    built: 'A frontend-focused fitness application with responsive layouts, workout plans, exercise presentation, an integrated timer and progress tracking features.',
    features: [
        'Responsive web design',
        'Workout plans',
        'Exercise library',
        'Workout timer',
        'Progress tracking'
    ],

    contribution: 'Hands-on frontend development focused on responsive UI, workout presentation, user experience and interactive fitness features.',
    tech: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Vite'
    ],
    github: 'https://github.com/watubu/williams-fits',
    demo: '',
},
];
function NotFound() {
  return (
    <div className="site-shell">
      <main className="not-found-page">
        <p className="eyebrow">404 / Page not found</p>
        <h1>This page isn't part of the portfolio.</h1>
        <p>
          The page you're looking for doesn't exist. Return to Williams Atubu's portfolio to explore
          software engineering projects, skills and current work.
        </p>
        <a className="button primary" href="./">
          Back to portfolio <ArrowUpRight size={16} />
        </a>
      </main>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [sent, setSent] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-30% 0px -60% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById(id)?.scrollIntoView({
      behavior: reduce ? 'auto' : 'smooth',
      block: 'start',
    });
    setMenuOpen(false);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  if (window.location.pathname !== '/' && window.location.pathname !== '') {
    return <NotFound />;
  }

  return (
    <div className="site-shell">
      <header className="navbar">
        <a
          className="brand"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            go('home');
          }}
        >
          WA<span>.</span>
        </a>

        <nav
          id="primary-navigation"
          className={menuOpen ? 'nav-links open' : 'nav-links'}
          aria-label="Primary navigation"
        >
          {sections.map((id) => (
            <a
              href={`#${id}`}
              key={id}
              className={active === id ? 'active' : ''}
              aria-current={active === id ? 'location' : undefined}
              onClick={(e) => {
                e.preventDefault();
                go(id);
              }}
            >
              {id === 'home' ? 'Home' : id[0].toUpperCase() + id.slice(1)}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-cta"
            onClick={(e) => {
              e.preventDefault();
              go('contact');
            }}
          >
            Let's Connect <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero section" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="status-dot" /> Software Engineering Fellow{' '}
                <span className="eyebrow-divider">/</span> Abuja, Nigeria
              </p>
              <h1 id="hero-title">
                Software engineering, built through <em>practice.</em>
              </h1>
              <p className="hero-lede">
                I'm Williams Atubu, a Software Engineering Fellow in Abuja, Nigeria, building
                practical projects while developing as a Python and Go developer across backend and
                full-stack systems.
              </p>
              <div className="hero-tech">
                <span>Python</span>
                <span>Go</span>
                <span>JavaScript</span>
                <span>PostgreSQL</span>
                <span>REST APIs</span>
              </div>
              <div className="hero-actions">
                <button className="button primary" onClick={() => go('projects')}>
                  View My Work <ArrowUpRight size={17} />
                </button>
                <button className="button secondary" onClick={() => go('contact')}>
                  Contact Me <ArrowDownRight size={16} />
                </button>
              </div>
              <div className="socials">
                <a
                  href="https://www.linkedin.com/in/atubu-agih-williams/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Williams Atubu on LinkedIn"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>

                <span className="social-divider">·</span>

                <a href="mailto:williamsatubu99@gmail.com" aria-label="Email Williams Atubu">
                  <Mail size={18} /> Email
                </a>
              </div>
            </div>

            <div className="hero-aside" aria-hidden="true">
              <div className="code-card">
                <div className="code-top">
                  <span />
                  <span />
                  <span />
                  <b>developer.focus</b>
                </div>
                <pre>
                  {`const focus = [
  'Python',
  'Go',
  'Backend',
  'AI + Cybersecurity'
];`}
                </pre>
                <div className="code-footer">
                  <span className="terminal-dot">●</span> currently building
                </div>
              </div>
              <div className="hero-note">
                hands-on development <span>+</span> continuous learning
              </div>
            </div>

            <button
              type="button"
              className="scroll-cue"
              onClick={() => go('about')}
              aria-label="Scroll to about"
            >
              <span>Scroll to explore</span>
              <ChevronDown size={17} />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section split-section" aria-labelledby="about-title">
          <div className="section-kicker">01 / About</div>
          <div className="section-content">
            <div>
              <p className="section-number">01</p>
              <h2 id="about-title">
                Curious by nature.
                <br />
                <span>Practical by practice.</span>
              </h2>
            </div>
            <div className="about-copy">
              <p>
                I'm developing as a software engineer by writing code, building projects, and working
                through the details behind the systems I use. Hands-on practice is a core part of how I
                learn.
              </p>
              <p>
                My current focus spans Python, Go, backend development, databases and web technologies,
                with growing interests in Artificial Intelligence and Cybersecurity. I'm developing
                toward backend and full-stack work by understanding how the pieces connect, then
                applying that understanding in practical projects.
              </p>
              <p>
                I'm still building my experience, so I stay deliberate about the fundamentals: write
                clearer code, understand systems more deeply, and keep improving through practice.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section skills-section" aria-labelledby="skills-title">
          <div className="section-kicker">02 / Tech Stack</div>
          <div className="section-heading">
            <div>
              <h2 id="skills-title">
                Technologies I'm
                <br />
                <span>building with.</span>
              </h2>
            </div>
            <p>
              A practical toolkit I'm developing through projects, backend work, web development and
              consistent hands-on practice.
            </p>
          </div>
          <div className="skill-grid">
            {Object.entries(skills).map(([category, items], i) => (
              <article className="skill-card" key={category}>
                <div className="skill-card-top">
                  <span className="card-index">0{i + 1}</span>
                  <span className="skill-mark">0{i + 1}</span>
                </div>
                <h3>{category}</h3>
                <div className="pill-list">
                  {items.map((item) => (
                    <span className="pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section projects-section" aria-labelledby="projects-title">
          <div className="section-kicker">03 / Selected Work</div>
          <div className="section-heading row-heading">
            <div>
              <p className="section-number">03</p>
              <h2 id="projects-title">
                Built, tested,
                <br />
                <span>still evolving.</span>
              </h2>
            </div>
            <p>
              Projects where I apply what I'm learning, work across application layers, and get closer
              to understanding how real software is put together.
            </p>
          </div>
          <div className="project-list">
            {projects.map((p, i) => {
              const isOpen = expanded === p.name;
              return (
                <article
                  className={`project-card project-${i + 1} ${isOpen ? 'is-expanded' : ''}`}
                  key={p.name}
                >
                  <div className="project-visual">
                    <span>0{i + 1}</span>
                    <div className="project-visual-grid" />
                    <div className="project-visual-label">{p.name}</div>
                  </div>
                  <div className="project-main">
                    <p className="project-label">{p.label}</p>
                    <p className="project-summary">{p.summary}</p>
                    <h3>{p.name}</h3>
                    <p className="project-description">{p.description}</p>
                    <div className="project-tech">
                      {p.tech.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={p.github} target="_blank" rel="noreferrer">
                        GitHub <ExternalLink size={14} />
                      </a>
                      {p.demo ? (
                        <a href={p.demo} target="_blank" rel="noreferrer">
                          Live Demo <ExternalLink size={14} />
                        </a>
                      ) : (
                        <span className="disabled-link">
                          Live Demo <small>not available yet</small>
                        </span>
                      )}
                      <button
                        type="button"
                        className="project-details-toggle"
                        onClick={() => setExpanded(isOpen ? null : p.name)}
                        aria-expanded={isOpen}
                        aria-controls={`details-${i}`}
                      >
                        {isOpen ? 'Hide details' : 'View case study'} <ChevronDown size={14} />
                      </button>
                    </div>
                    <div id={`details-${i}`} className="project-details" hidden={!isOpen}>
                      <div className="project-detail-block">
                        <span>Problem / purpose</span>
                        <p>{p.purpose}</p>
                      </div>
                      <div className="project-detail-block">
                        <span>What I built</span>
                        <p>{p.built}</p>
                      </div>
                      <div className="project-detail-block">
                        <span>Key features</span>
                        <div className="feature-list">
                          {p.features.map((f) => (
                            <span key={f}>{f}</span>
                          ))}
                        </div>
                      </div>
                      <div className="project-detail-block">
                        <span>My contribution</span>
                        <p>{p.contribution}</p>
                      </div>
                    </div>
                  </div>
                  <div className="project-arrow">
                    <ArrowUpRight size={22} />
                  </div>
                </article>
              );
            })}
            <article className="project-card more-projects">
              <div className="project-visual more-visual">
                <span>+</span>
              </div>
              <div>
                <p className="project-label">Next up</p>
                <h3>More projects in progress.</h3>
                <p>This space is ready for future work as the portfolio grows.</p>
              </div>
            </article>
          </div>
        </section>

        {/* Journey Section */}
        <section id="journey" className="section journey-section" aria-labelledby="journey-title">
          <div className="section-kicker">04 / Journey</div>
          <div className="section-heading">
            <h2 id="journey-title">
              A journey of <span>consistent progress.</span>
            </h2>
            <p>
              A straightforward record of the work I'm doing, the skills I'm developing, and the areas
              I want to understand more deeply.
            </p>
          </div>
          <div className="timeline">
            <article className="timeline-item">
              <span className="timeline-dot" />
              <div>
                <p className="timeline-meta">Software Engineering Program</p>
                <h3>Learn2Earn</h3>
                <p>
                  Developing practical software engineering foundations through structured learning,
                  projects, problem-solving and hands-on implementation.
                </p>
              </div>
            </article>
            <article className="timeline-item">
              <span className="timeline-dot" />
              <div>
                <p className="timeline-meta">Hands-on development</p>
                <h3>Practical projects</h3>
                <p>
                  Building web and full-stack projects while growing capability across Python, Go,
                  frontend development, APIs, databases and backend systems.
                </p>
              </div>
            </article>
            <article className="timeline-item">
              <span className="timeline-dot" />
              <div>
                <p className="timeline-meta">Next chapter</p>
                <h3>Deeper engineering</h3>
                <p>
                  Continuing to strengthen backend development, software architecture, AI and
                  Cybersecurity through deliberate practice and experimentation.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Learning Section */}
        <section className="section learning-section" aria-labelledby="learning-title">
          <div className="learning-panel">
            <div>
              <div className="section-kicker">05 / Currently Learning</div>
              <h2 id="learning-title">
                Always one layer
                <br />
                deeper.
              </h2>
              <p className="learning-intro">
                Areas I'm actively developing through study, experimentation and hands-on work.
              </p>
            </div>
            <div className="learning-list">
              {[
                'Advanced Python',
                'Go backend development',
                'PostgreSQL',
                'APIs',
                'Artificial Intelligence',
                'Cybersecurity',
                'Software architecture',
              ].map((item, i) => (
                <div key={item}>
                  <span>0{i + 1}</span>
                  <strong>{item}</strong>
                  <ArrowUpRight size={16} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GitHub Section */}
        <section className="section github-section" aria-labelledby="github-title">
          <div className="github-panel">
            <div className="github-icon">
              <Github size={27} />
            </div>
            <div>
              <p className="eyebrow">06 / Open Source</p>
              <h2 id="github-title">
                See what I'm <span>building.</span>
              </h2>
              <p>
                Explore my GitHub to see the projects, experiments and code behind what I'm learning
                and building.
              </p>
            </div>
            <a
              className="button primary"
              href="https://github.com/watubu"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub <ExternalLink size={16} />
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section" aria-labelledby="contact-title">
          <div className="section-kicker">07 / Contact</div>
          <div className="contact-grid">
            <div>
              <p className="section-number">07</p>
              <h2 id="contact-title">
                Let's talk <span>software.</span>
              </h2>
              <p>
                Have a project idea, collaboration opportunity, or want to discuss software
                engineering? Send a message.
              </p>
              <div className="contact-links">
                <a href="https://github.com/watubu" target="_blank" rel="noreferrer">
                  <Github size={18} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/atubu-agih-williams/" target="_blank" rel="noreferrer">
                  <span className="muted-social">
                    <Linkedin size={18} /> LinkedIn <small>link coming soon</small>
                  </span>
                </a>
                <a href="mailto:williamsatubu99@gmail.com" aria-label="Email Williams Atubu">
                  <span className="muted-social">
                    <Mail size={18} /> Email <small>add address</small>
                  </span>
                </a>
              </div>
            </div>
            <form className="contact-form" onSubmit={submit}>
              <label htmlFor="contact-name">
                Name
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="Your name"
                />
              </label>
              <label htmlFor="contact-email">
                Email
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                />
              </label>
              <label htmlFor="contact-message">
                Message
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a little about your idea..."
                />
              </label>
              <button className="button primary" type="submit">
                {sent ? 'Form checked ✓' : 'Check Message'} <ArrowUpRight size={16} />
              </button>
              <small className="form-note" aria-live="polite">
                This form does not deliver messages yet. Use GitHub to contact me until an email
                service is connected.
              </small>
            </form>
          </div>
        </section>
      </main>

      <footer aria-label="Site footer">
        <div>
          <a className="brand" href="#home" aria-label="Williams Atubu — back to home">
            WA<span>.</span>
          </a>
          <p>Williams Atubu · Software Engineering Fellow</p>
        </div>
        <div className="footer-right">
          <a href="https://github.com/watubu" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/atubu-agih-williams/" target="_blank" rel="noreferrer">
            <span>LinkedIn · coming soon</span>
          </a>
          <span>© 2026 Williams Atubu</span>
        </div>
      </footer>
    </div>
  );
}
