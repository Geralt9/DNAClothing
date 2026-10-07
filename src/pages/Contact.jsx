import { useState } from 'react'
import { business } from '../data/content.js'
import PageIntro from '../components/PageIntro.jsx'
import Reveal from '../components/Reveal.jsx'
import SocialLinks from '../components/SocialLinks.jsx'
import { buildMailto } from '../utils/mailto.js'
import heroImage from '../assets/gallery/img-0109.jpg'
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  // No backend: hand the message to the visitor's email app instead.
  const onSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    window.location.href = buildMailto(`Website enquiry from ${data.get('fullname')}`, [
      data.get('comments'),
      '',
      '---',
      `Name: ${data.get('fullname')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone')}`,
    ])
    setSent(true)
  }

  return (
    <>
      <PageIntro
        title="Contact"
        image={heroImage}
        imagePosition="center 30%"
        eyebrow="Visit or drop us a line"
        lead="Our bay opens onto Halls Lane in downtown Kitchener."
      />

      <div className="contact">
        <Reveal className="contact__info">
          <section className="contact__card on-dark" aria-labelledby="contact-address">
            <h2 id="contact-address">Find us</h2>
            <address>
              {business.address.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
            <p className="contact__lines">
              <a href={business.phoneHref}>{business.phone}</a>
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </p>
            <a className="btn btn--sm" href={business.mapsUrl} target="_blank" rel="noreferrer">
              View on Google Maps<span className="visually-hidden"> (opens in a new tab)</span>
            </a>
            <SocialLinks />
          </section>

          <section className="contact__hours" aria-labelledby="contact-hours">
            <h2 id="contact-hours">Hours of Operation</h2>
            <table>
              <tbody>
                {business.hours.map(({ day, time }) => (
                  <tr key={day} className={time === 'Closed' ? 'is-closed' : undefined}>
                    <th scope="row">{day}</th>
                    <td>{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </Reveal>

        <Reveal className="contact__form-wrap" delay={100}>
          <h2 className="section-title">Drop us a line.</h2>
          <form className="contact__form" onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="c-name">Name*</label>
              <input id="c-name" name="fullname" className="input" required autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="c-email">Email*</label>
              <input id="c-email" name="email" type="email" className="input" required autoComplete="email" />
            </div>
            <div className="field">
              <label htmlFor="c-phone">Phone*</label>
              <input id="c-phone" name="phone" type="tel" className="input" required autoComplete="tel" />
            </div>
            <div className="field contact__full">
              <label htmlFor="c-message">Message</label>
              <textarea id="c-message" name="comments" className="input" rows={6} />
            </div>
            <div className="contact__full contact__submit">
              <button type="submit" className="btn btn--dark">
                Send message
              </button>
              <p className="contact__hint">Opens your email app with the message filled in.</p>
            </div>
            <p className="form-note contact__full" role="status">
              {sent
                ? `Your email app should now open with your message to ${business.email}. If it didn’t, email us directly.`
                : 'This is a static demo site — submitting opens a prefilled email rather than sending from the page.'}
            </p>
          </form>
        </Reveal>
      </div>

      <Reveal className="contact__map page-section">
        <iframe
          title="Map showing DNA Screen Printing at 18 Charles St. W, Kitchener"
          src={business.mapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Reveal>
    </>
  )
}
