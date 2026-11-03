import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import Phone from './Phone.jsx';
import BrowserPreview from './BrowserPreview.jsx';
import { profile, projects, experience, skills, education, certifications, stats, marquee } from '../data.js';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav className="wrap" aria-label="Main">
        <a href="#top" className="logo">Sumair Irshad<span>.</span></a>
        <div className="links">
          <a href="#work" onClick={closeMenu}>Work</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
        <a href="#contact" className="btn btn-accent nav-cta">Hire me</a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((open) => !open)}>
          <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
        </button>
      </nav>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobile-menu" aria-hidden={!menuOpen}>
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a href="#contact" className="btn btn-accent" onClick={closeMenu}>Hire me</a>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="wrap hero2">
      <div className="hg">
        <div>
          <div className="hello">
            <img className="avatar" src="/avatar.jpg" alt="Sumair Irshad" width="64" height="64" />
            <div>
              <b>{profile.name}</b>
              <small><span className="dot" aria-hidden="true" style={{ display: 'inline-block', marginRight: 6 }} />Open to opportunities · Gilgit-Baltistan</small>
            </div>
          </div>
          <h1>I build <em>full-stack web and mobile apps</em> powered by AI.</h1>
          <div className="roles">
            <span className="role"><Icon name="code" size={16} />Full-stack web development</span>
            <span className="role"><Icon name="phone" size={16} />Flutter &amp; native apps</span>
            <span className="role"><Icon name="spark" size={16} />LLMs &amp; RAG</span>
            <span className="role"><Icon name="chart" size={16} />Production ML</span>
          </div>
          <p className="lead">Building full-stack web apps with React, Node.js and Express, alongside Android and iOS products. Currently Head of AI Engineering at XVision.</p>
          <div className="row-btns">
            <a href="#work" className="btn btn-light">See my projects</a>
            <a href="#contact" className="btn btn-ghost">Let's talk</a>
          </div>
        </div>
        <div className="fan" aria-hidden="true">
          <Phone project={projects[2]} className="f1" />
          <Phone project={projects[1]} className="f2" />
          <Phone project={projects[0]} className="f3" />
          <div className="badge2 b1"><i><Icon name="users" size={18} /></i><div><b>10k+</b><small>users served</small></div></div>
          <div className="badge2 b2"><i><Icon name="chart" size={18} /></i><div><b>−40%</b><small>inference latency</small></div></div>
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  const items = [...marquee, ...marquee];
  return (
    <div className="wrap" style={{ paddingBottom: 24 }}>
      <div className="stats">
        {stats.map(([n, l]) => <div className="stat" key={l}><b>{n}</b><span>{l}</span></div>)}
      </div>
      <div className="marquee" aria-label="Tech stack">
        <div className="track">{items.map((t, i) => <span key={i}>{t}</span>)}</div>
      </div>
    </div>
  );
}

const FILTERS = [['all', 'All'], ['mobile', 'Mobile'], ['web', 'Web'], ['ai', 'AI']];

export function Projects() {
  const [filter, setFilter] = useState('all');
  const [demoProject, setDemoProject] = useState(null);

  useEffect(() => {
    if (!demoProject) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setDemoProject(null);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [demoProject]);

  return (
    <section id="work" className="wrap">
      <div className="sec-head">
        <div><div className="eyebrow">Selected work</div><h2 className="h2">Featured projects</h2></div>
        <div className="filters" role="group" aria-label="Filter projects">
          {FILTERS.map(([k, l]) => (
            <button key={k} className="chip" aria-pressed={filter === k} onClick={() => setFilter(k)}>{l}</button>
          ))}
        </div>
      </div>
      <div className="phones">
        {projects.map((p, i) => (
          <article className="pcard" key={p.name} hidden={!(filter === 'all' || p.cats.includes(filter))}>
            <div className="device-wrap">
              {p.cats.includes('web') ? <BrowserPreview project={p} /> : <Phone project={p} />}
            </div>
            <div className="pinfo">
              <div className="mono">{String(i + 1).padStart(2, '0')} · {p.stack.join(' · ')}</div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              {p.link
                ? <a className="cta" href={p.link} target="_blank" rel="noopener noreferrer">{p.cta || 'Live demo'} ↗</a>
                : <button className="cta demo-trigger" type="button" aria-label={`View ${p.name} demo`} onClick={() => setDemoProject(p)}>View demo ↗</button>}
              {p.source && <a className="cta" href={p.source} target="_blank" rel="noopener noreferrer">Source code ↗</a>}
            </div>
          </article>
        ))}
      </div>
      {demoProject && (
        <div className="demo-backdrop" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setDemoProject(null);
        }}>
          <section className="demo-dialog" role="dialog" aria-modal="true" aria-labelledby="demo-title">
            <button className="demo-close" type="button" autoFocus onClick={() => setDemoProject(null)}>Close</button>
            <div className="eyebrow">Project preview</div>
            <h2 className="h2" id="demo-title">{demoProject.name}</h2>
            <p>{demoProject.desc}</p>
            <div className="demo-stage">
              {demoProject.cats.includes('web')
                ? <BrowserPreview project={demoProject} />
                : <Phone project={demoProject} />}
            </div>
            <small className="demo-note">Visual preview only — interactive features are not connected.</small>
          </section>
        </div>
      )}
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="wrap">
      <div className="eyebrow" style={{ marginBottom: 12 }}>Experience</div>
      <h2 className="h2" style={{ marginBottom: 32 }}>Where I've worked</h2>
      <ol className="tl">
        {experience.map((e) => (
          <li className={`tl-item${e.current ? ' cur' : ''}`} key={e.role}>
            <span className="tl-node" aria-hidden="true"><Icon name={e.icon} size={18} /></span>
            <article className="tl-card">
              <div className="tl-top">
                <span className="logo-sq" aria-hidden="true">{e.initials}</span>
                <div className="tl-h"><h3>{e.role}</h3><div className="co">{e.company}</div></div>
                <span className="date">{e.current && <span className="live" />}{e.date}</span>
              </div>
              <p>{e.desc}</p>
              <div className="pills">{e.tags.map((t) => <span className="pill" key={t}>{t}</span>)}</div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="wrap">
      <div className="eyebrow" style={{ marginBottom: 12 }}>Capabilities</div>
      <h2 className="h2" style={{ marginBottom: 32 }}>Stack &amp; credentials</h2>
      <div className="stk">
        {skills.map((c) => (
          <div className="stk-cat" key={c.title}>
            <div className="stk-h">
              <span className="stk-ic"><Icon name={c.icon} size={24} /></span>
              <div><h3>{c.title}</h3><small>{c.sub}</small></div>
              <span className="stk-n">{c.items.length}</span>
            </div>
            <ul className="stk-g">
              {c.items.map((t) => (
                <li className="tech" key={t.n}>
                  <span className="tlogo">{t.logo ? <img src={t.logo} alt="" width="28" height="28" /> : <Icon name={t.icon} />}</span>
                  <span><b>{t.n}</b><small>{t.d}</small></span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="cred-wrap">
        <div className="sub-h"><span><Icon name="cap" size={18} /></span><h3>Education</h3></div>
        <div className="edu-g">
          {education.map((e) => (
            <article className="edu" key={e.title}>
              <div className="edu-top"><span className="edu-ic"><Icon name={e.icon} size={24} /></span><span className="edu-kind">{e.kind}</span></div>
              <h4>{e.title}</h4>
              <p className="edu-inst"><Icon name="pin" size={14} />{e.inst}</p>
              <div className="edu-foot"><span className="edu-y">{e.years}</span><span className="edu-mark">{e.mark}</span></div>
            </article>
          ))}
        </div>
        <div className="sub-h"><span><Icon name="award" size={18} /></span><h3>Certifications</h3></div>
        <div className="cert-g">
          {certifications.map((c) => (
            <article className="cert" key={c.title}>
              <div className="cert-l">
                <div className="cert-lab">Professional Certificate</div>
                <h4>{c.title}</h4>
                <p>Issued by IBM · Professional Certificate</p>
                <div className="cert-meta">
                  <span className="ok"><Icon name="check" size={14} /> Completed</span><span>Issued 2025</span><span>{c.area}</span>
                </div>
              </div>
              <div className="seal" aria-hidden="true"><div className="seal-in"><Icon name="award" size={30} /><b>IBM</b></div></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [msg, setMsg] = useState('');
  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setMsg('Email copied to clipboard.'); }
    catch { setMsg(`Copy failed. The email is ${profile.email}`); }
  };
  return (
    <>
      <section id="contact" className="wrap">
        <div className="contact">
          <div className="eyebrow">Contact</div>
          <h2>Have an app or AI idea?<br />Let's build it.</h2>
          <p>Available for mobile roles, AI engineering work and product consulting. English and Urdu.</p>
          <div className="row-btns">
            <a className="btn btn-dark" href={`mailto:${profile.email}`}><span className="email">{profile.email}</span></a>
            <button className="btn btn-outline" type="button" onClick={copy}>Copy email</button>
            <a href={profile.linkedin} className="btn btn-outline" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href={profile.github} className="btn btn-outline" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          </div>
          <div className="toast" role="status" aria-live="polite">{msg}</div>
        </div>
      </section>
      <footer className="wrap"><span>© {new Date().getFullYear()} {profile.name}</span><span>{profile.location}</span></footer>
    </>
  );
}
