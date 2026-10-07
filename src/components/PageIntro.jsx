import Hero from './Hero.jsx'
import Reveal from './Reveal.jsx'
import './PageIntro.css'

// Knockout page title plus an optional lead paragraph.
export default function PageIntro({ title, image, imagePosition, eyebrow, lead }) {
  return (
    <header className="page-intro">
      <Hero title={title} image={image} imagePosition={imagePosition} variant="page" />
      {(eyebrow || lead) && (
        <Reveal className="page-intro__meta">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {lead && <p className="page-intro__lead">{lead}</p>}
        </Reveal>
      )}
    </header>
  )
}
