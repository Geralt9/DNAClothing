import { Link } from 'react-router-dom'
import { about, business } from '../data/content.js'
import PageIntro from '../components/PageIntro.jsx'
import Reveal from '../components/Reveal.jsx'
import headerImage from '../assets/header-image.png'
import revolutionBanner from '../assets/home_header1.png'
import './About.css'

export default function About() {
  return (
    <>
      <PageIntro
        title="About"
        image={headerImage}
        imagePosition="center 20%"
        eyebrow={`Est. ${business.founded} · Kitchener, ON`}
        lead={about.heading}
      />

      <div className="about">
        <Reveal className="prose about__body">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>

        <Reveal as="figure" className="lyric on-dark" delay={100}>
          <blockquote>
            {about.lyric.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </blockquote>
          <figcaption>— {about.lyricCite}</figcaption>
        </Reveal>

        <Reveal className="prose about__closing">
          <p>{about.closing}</p>
          <p>
            <Link to="/gallery" className="btn btn--dark">
              See the gallery
            </Link>
          </p>
        </Reveal>
      </div>

      <Reveal className="about__banner">
        <img
          src={revolutionBanner}
          alt="DNA Screen Printing banner: “The revolution is just a t-shirt away.”"
          loading="lazy"
        />
      </Reveal>
    </>
  )
}
