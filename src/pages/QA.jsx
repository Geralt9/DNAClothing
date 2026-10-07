import { Link } from 'react-router-dom'
import { business, qa } from '../data/content.js'
import PageIntro from '../components/PageIntro.jsx'
import Reveal from '../components/Reveal.jsx'
import inkImage from '../assets/ink-is-my-life.jpg'
import './QA.css'

export default function QA() {
  return (
    <>
      <PageIntro
        title="Q&A"
        image={inkImage}
        imagePosition="center 70%"
        eyebrow="Questions & answers"
        lead="Art specs, services, inks, order sizes and garments — the things our customers ask most."
      />

      <div className="qa-layout">
        <div className="qa">
          {qa.map((item, i) => (
            <Reveal key={item.q} delay={Math.min(i, 4) * 50}>
              <details className="qa__item" open={i === 0}>
                <summary>
                  <span className="qa__num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="qa__question">{item.q}</span>
                  <span className="qa__toggle" aria-hidden="true" />
                </summary>
                <div className="qa__answer prose">
                  {item.lead && <p className="qa__lead">{item.lead}</p>}
                  {item.body?.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                  {item.list && (
                    <ul>
                      {item.list.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  )}
                  {item.after?.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                  {item.images && (
                    <div className="qa__images">
                      {item.images.map((img) => (
                        <img key={img.src} src={img.src} alt={img.alt} loading="lazy" />
                      ))}
                    </div>
                  )}
                </div>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal as="aside" className="qa-aside on-dark" aria-label="Still have questions?">
          <h2>Still have a question?</h2>
          <p>Email is the best method — include your image, quantity, garment style and colours, and your event date.</p>
          <a className="qa-aside__link" href={`mailto:${business.email}`}>
            {business.email}
          </a>
          <a className="qa-aside__link" href={business.phoneHref}>
            {business.phone}
          </a>
          <Link to="/quote" className="btn">
            Get a Quote
          </Link>
        </Reveal>
      </div>
    </>
  )
}
