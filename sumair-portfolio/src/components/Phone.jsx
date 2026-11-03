import Icon from './Icon.jsx';
import { COLORS } from '../data.js';

// Mock mobile app screen drawn from a project's `screen` and `icons` data.
export default function Phone({ project, className = '' }) {
  const [a, b] = COLORS[project.color];
  const s = project.screen;
  const k = project.icons;
  return (
    <div className={`ph ${className}`}>
      <div className="scr">
        <div style={{ background: a }}>
          <div className="nt" />
          <div className="s-top">
            <span className="s-brand"><Icon name={k.hero} size={16} />{s.title}</span>
            <Icon name="search" size={15} />
          </div>
        </div>
        <div style={{ background: `linear-gradient(${a} 40px,#fff 40px)`, paddingBottom: 4 }}>
          <div className="s-hero" style={{ background: `linear-gradient(135deg,${a},${b})` }}>
            <span className="s-big"><Icon name={k.hero} size={46} /></span>
            <span className="s-pill">{s.hero[0]}</span>
            <b>{s.hero[1]}</b>
            {s.hero[2]}
          </div>
        </div>
        <div className="s-sec">{s.section}</div>
        <div className="s-row">
          {s.tiles.map((t, i) => (
            <div className="s-tile" key={t + i}>
              <i style={{ background: `linear-gradient(${135 + i * 40}deg,${b},${a})` }}><Icon name={k.tiles[i]} size={26} /></i>
              <small>{t}</small>
            </div>
          ))}
        </div>
        <div className="s-list">
          {s.list.map((x, i) => (
            <div className="s-item" key={x[0]}>
              <i style={{ background: `${b}22`, color: a }}><Icon name={k.list[i]} size={18} /></i>
              <div>{x[0]}<small>{x[1]}</small></div>
              <em style={{ color: a }}>{x[2]}</em>
            </div>
          ))}
        </div>
        <div className="s-tab" style={{ color: a }}>
          {['home', 'search', k.list[1], 'user'].map((n, i) => <span key={i}><Icon name={n} size={18} /></span>)}
        </div>
      </div>
    </div>
  );
}
