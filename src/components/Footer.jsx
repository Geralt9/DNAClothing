import { Link } from 'react-router-dom'
import { business } from '../data/content.js'
import logoDark from '../assets/dna-logo-dark.png'
import { ArrowIcon } from './Icons.jsx'
import SocialLinks from './SocialLinks.jsx'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer on-dark">
      <div className="site-footer__grid">
        <section aria-labelledby="footer-contact">
          <h2 id="footer-contact" className="site-footer__title">
            Contact Us
          </h2>
          <address className="site-footer__address">
            {business.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <p className="site-footer__lines">
            <a href={business.phoneHref}>{business.phone}</a>
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </p>
          <SocialLinks />
        </section>

        <section aria-labelledby="footer-hours">
          <h2 id="footer-hours" className="site-footer__title">
            Hours of Operation
          </h2>
          <dl className="hours">
            {business.hours.map(({ day, time }) => (
              <div key={day} className={time === 'Closed' ? 'is-closed' : undefined}>
                <dt>{day}</dt>
                <dd>{time}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="footer-quote" className="site-footer__quote">
          <h2 id="footer-quote" className="site-footer__title">
            Get a Quote
          </h2>
          <p>{business.quoteBlurb}</p>
          <Link to="/quote" className="btn">
            Start a quote now <ArrowIcon width={16} height={16} />
          </Link>
        </section>
      </div>

      <div className="site-footer__bottom">
        <img src={logoDark} alt="" width="56" height="58" className="site-footer__mark" />
        <p>
          © {business.name}, Kitchener ON — est. {business.founded}. <em>{business.tagline}</em>
        </p>
      </div>
    </footer>
  )
}
