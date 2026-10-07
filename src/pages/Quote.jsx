import { useState } from 'react'
import { business, quoteForm } from '../data/content.js'
import PageIntro from '../components/PageIntro.jsx'
import Reveal from '../components/Reveal.jsx'
import { buildMailto } from '../utils/mailto.js'
import heroImage from '../assets/gallery/img-0113.jpg'
import './Quote.css'

const sizeName = (label) => label.toLowerCase().replace(/\s+/g, '')

export default function Quote() {
  const [sent, setSent] = useState(false)

  // No backend: summarise the request into a prefilled email.
  const onSubmit = (event) => {
    event.preventDefault()
    const d = new FormData(event.currentTarget)
    const val = (k) => (d.get(k) || '').toString().trim() || '—'
    const extras = d.getAll('customize')

    window.location.href = buildMailto(`Quote request — ${val('name')}`, [
      'STYLE & COLOUR',
      `Garment: ${val('garment-type')}`,
      `Colour: ${val('garment-colour')}`,
      '',
      'SIZING',
      ...quoteForm.sizes.map((s) => `${s}: ${val(sizeName(s))}`),
      `Womens: ${val('womens')}`,
      '',
      `INK COLOURS: ${val('inks')}`,
      `CUSTOMIZE: ${extras.length ? extras.join(', ') : '—'}`,
      '',
      'NOTES',
      val('notes'),
      '',
      'YOUR INFORMATION',
      `Name: ${val('name')}`,
      `Email: ${val('email')}`,
      `Phone: ${val('phone')}`,
      '',
      'SHIPPING',
      `Address: ${val('address')}`,
      `City: ${val('city')}`,
      `Province/State: ${val('province')}`,
      `Postal/Zip: ${val('postal')}`,
      `Expected delivery date: ${val('delivery')}`,
      '',
      '(Please attach your artwork to this email.)',
    ])
    setSent(true)
  }

  return (
    <>
      <PageIntro
        title="Get a Quote"
        image={heroImage}
        imagePosition="center 40%"
        eyebrow="Quick quote"
        lead={business.quoteBlurb}
      />

      <form className="quote" onSubmit={onSubmit}>
        <Reveal as="fieldset" className="quote__group">
          <legend>
            <span className="quote__step">01</span> Style &amp; Colour
          </legend>
          <div className="quote__grid">
            <div className="field">
              <label htmlFor="q-garment">Garment*</label>
              <input id="q-garment" name="garment-type" className="input" required placeholder="For example: Gildan T-shirt, American Apparel T-Shirt" />
            </div>
            <div className="field">
              <label htmlFor="q-colour">Colour*</label>
              <input id="q-colour" name="garment-colour" className="input" required placeholder="Apparel colour" />
            </div>
          </div>
        </Reveal>

        <Reveal as="fieldset" className="quote__group">
          <legend>
            <span className="quote__step">02</span> Sizing
          </legend>
          <div className="quote__sizes">
            {quoteForm.sizes.map((size) => (
              <div className="field" key={size}>
                <label htmlFor={`q-${sizeName(size)}`}>{size}</label>
                <input id={`q-${sizeName(size)}`} name={sizeName(size)} className="input" inputMode="numeric" placeholder="Qty" />
              </div>
            ))}
          </div>
          <div className="field quote__womens">
            <label htmlFor="q-womens">Womens</label>
            <input id="q-womens" name="womens" className="input" placeholder="List sizes/quantities" aria-describedby="q-womens-hint" />
            <p id="q-womens-hint" className="quote__hint">
              Some sizes/styles are unavailable in Womens
            </p>
          </div>
        </Reveal>

        <div className="quote__row">
          <Reveal as="fieldset" className="quote__group">
            <legend>
              <span className="quote__step">03</span> How many colours?
            </legend>
            <div className="field">
              <label htmlFor="q-inks">Ink colours</label>
              <select id="q-inks" name="inks" className="input">
                {quoteForm.colours.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
            <p className="form-note">
              Artwork: attach it to the email that opens on submit. High resolution (300–600 DPI) PDF, AI, EPS, PSD or
              TIF works best.
            </p>
          </Reveal>

          <Reveal as="fieldset" className="quote__group" delay={100}>
            <legend>
              <span className="quote__step">04</span> Customize
            </legend>
            <div className="quote__checks">
              {quoteForm.customize.map((option) => (
                <label key={option} className="check">
                  <input type="checkbox" name="customize" value={option} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal as="fieldset" className="quote__group">
          <legend>
            <span className="quote__step">05</span> Notes
          </legend>
          <div className="field">
            <label htmlFor="q-notes" className="visually-hidden">
              Notes
            </label>
            <textarea id="q-notes" name="notes" className="input" rows={5} placeholder="Anything we should know?" />
          </div>
        </Reveal>

        <div className="quote__row">
          <Reveal as="fieldset" className="quote__group">
            <legend>
              <span className="quote__step">06</span> Your Information
            </legend>
            <div className="quote__stack">
              <div className="field">
                <label htmlFor="q-name">Your Name*</label>
                <input id="q-name" name="name" className="input" required autoComplete="name" placeholder="Jane Doe" />
              </div>
              <div className="field">
                <label htmlFor="q-email">Your Email*</label>
                <input id="q-email" name="email" type="email" className="input" required autoComplete="email" placeholder="jane.doe@example.com" />
              </div>
              <div className="field">
                <label htmlFor="q-phone">Your Phone</label>
                <input id="q-phone" name="phone" type="tel" className="input" autoComplete="tel" placeholder="555-555-5555" />
              </div>
            </div>
          </Reveal>

          <Reveal as="fieldset" className="quote__group" delay={100}>
            <legend>
              <span className="quote__step">07</span> Shipping Information
            </legend>
            <div className="quote__stack">
              <div className="field">
                <label htmlFor="q-address">Address</label>
                <input id="q-address" name="address" className="input" autoComplete="street-address" placeholder="(We cannot ship to PO Boxes)" />
              </div>
              <div className="quote__grid">
                <div className="field">
                  <label htmlFor="q-city">City</label>
                  <input id="q-city" name="city" className="input" autoComplete="address-level2" />
                </div>
                <div className="field">
                  <label htmlFor="q-province">Province/State</label>
                  <input id="q-province" name="province" className="input" autoComplete="address-level1" />
                </div>
                <div className="field">
                  <label htmlFor="q-postal">Postal/Zip</label>
                  <input id="q-postal" name="postal" className="input" autoComplete="postal-code" />
                </div>
                <div className="field">
                  <label htmlFor="q-delivery">Expected Delivery Date*</label>
                  <input id="q-delivery" name="delivery" className="input" required placeholder="ie. September 3rd" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="quote__submit">
          <button type="submit" className="btn btn--dark">
            Send quote request
          </button>
          <p className="form-note" role="status">
            {sent
              ? `Your email app should now open with your quote request to ${business.email}. Don’t forget to attach your artwork.`
              : 'This is a static demo site — submitting opens a prefilled email to DNA rather than sending from the page.'}
          </p>
        </div>
      </form>
    </>
  )
}
