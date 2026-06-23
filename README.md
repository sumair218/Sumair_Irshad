# Sumair Irshad — Portfolio

A single-page developer portfolio for **Sumair Irshad** — Full Stack Developer, AI Engineer & Data Scientist based in Gilgit-Baltistan, Pakistan. Built as one self-contained HTML file styled like a JSON API explorer, with an alpine/glacier-inspired visual theme (slate blues, glacial teal, topographic gold) that ties together a Geoinformatics & Remote Sensing background with AI/software engineering work.

## Live sections

| Route | Section |
|---|---|
| `/` | Hero — intro, status badge, JSON profile card, animated icon grid |
| `/profile` | About, skills (Frontend, Backend & AI, ML & Data, Infrastructure) |
| `/experience` | Work history (XVision, Sufary Tech, Pentavision Technologies), Education (KIU, NUST), Certifications (IBM) |
| `/projects` | 6 project cards — cancer cell detection, jewelry logo removal, RAG hotel recommender, LangGraph chatbot, MERN e-commerce, road condition detection |
| `/contact` | Email, phone, LinkedIn, GitHub |

## Tech

- **Plain HTML/CSS/JS** — no build step, no framework, no dependencies beyond Google Fonts
- **Fonts:** Inter (display/body) + JetBrains Mono (code/labels)
- **Animation:** CSS keyframes for entrance fades, staggered reveals, and ambient motion (glow pulse, floating icon tiles); scroll-triggered via `IntersectionObserver`
- **Responsive:** breakpoints at 1024px, 768px, and 480px
- Respects `prefers-reduced-motion`

## File structure

```
index.html   → entire site (HTML + inline <style> + small <script> at the bottom)
```

Everything lives in this one file by design — open it directly in a browser, no server required.

## Running it locally

Just open `index.html` in any browser. For live-reload while editing, you can optionally serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Customizing

- **Colors / fonts:** all defined as CSS variables at the top of `<style>` under `:root` (`--ink`, `--slate`, `--teal-bright`, `--gold`, `--display`, `--mono`, etc.) — change once, applies everywhere.
- **Content:** each section is clearly marked with an HTML comment, e.g. `<!-- ========== PAGE: /projects ========== -->`. Edit the markup inside that section directly.
- **Adding a project:** copy an existing `.proj-card` block inside `.proj-grid` and edit the title, year, description, stack tags, and (optionally) icon SVGs or a GitHub link.
- **Animations:** keyframes are named descriptively (`fadeInUp`, `cardIn`, `tileIn`, `pulseBorder`, `floatY`) and scoped near the elements that use them — search for the class name to find its animation.

## Deploying

Since it's a single static file, it deploys anywhere static hosting is supported:
- **GitHub Pages:** push `index.html` to a repo, enable Pages on the `main` branch
- **Netlify / Vercel:** drag-and-drop deploy, or connect the repo
- **Any static host:** just upload `index.html`

## Contact

- Email: sumair@example.com *(placeholder — update to your real address before deploying)*
- LinkedIn: [linkedin.com/in/sumairimam](https://www.linkedin.com/in/sumair-arshad-5947ba401/)
- GitHub: https://github.com/sumair218

---

*Built by Sumair Irshad.*
