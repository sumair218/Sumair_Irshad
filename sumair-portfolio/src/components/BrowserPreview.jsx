import Icon from './Icon.jsx';
import { COLORS } from '../data.js';

export default function BrowserPreview({ project }) {
  const [primary, secondary] = COLORS[project.color];
  const { screen, icons } = project;

  return (
    <div className="browser" aria-label={`${project.name} website preview`}>
      <div className="browser-bar">
        <span /><span /><span />
        <div className="browser-address">{project.link ? new URL(project.link).host : 'preview'}</div>
      </div>
      <div className="browser-page">
        <div className="browser-nav">
          <b><Icon name={icons.hero} size={16} />{screen.title}</b>
          <span><Icon name="list" size={16} /></span>
        </div>
        <div className="browser-hero" style={{ background: `linear-gradient(120deg,${primary},${secondary})` }}>
          <small>{screen.hero[0]}</small>
          <strong>{screen.hero[1]}</strong>
          <span>{screen.hero[2]}</span>
          <i>Explore</i>
        </div>
        <div className="browser-featured">
          <b>{screen.section}</b>
          <div>
            {screen.tiles.slice(0, 3).map((tile, index) => (
              <span key={tile}>
                <i style={{ background: `${index % 2 ? secondary : primary}18`, color: primary }}>
                  <Icon name={icons.tiles[index]} size={15} />
                </i>
                {tile}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
