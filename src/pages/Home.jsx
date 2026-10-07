import { Link } from 'react-router-dom'
import { business, home, qa } from '../data/content.js'
import Hero from '../components/Hero.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { ArrowIcon } from '../components/Icons.jsx'
import subheader from '../assets/subheader-image.jpg'
import './Home.css'

const services = qa.find((item) => item.q === 'What services does DNA offer?').list

export default function Home() {
  return (
    <>
      <Hero title={home.heroTitle} image={home.heroImage} imagePosition="center 38%" variant="home" />

      <section className="showcase page-section" aria-label="Featured">
        <Reveal className="showcase__left">
          <FeatureCard {...home.left} stat="8" statLabel="spot colours" align="left" titlePosition="top" />
        </Reveal>

        <Reveal className="showcase__center" delay={120}>
          <p className="showcase__intro">{home.intro}</p>
          <blockquote className="showcase__quote">
            <p>{home.quote}</p>
          </blockquote>

          <h2 className="showcase__explore-title">Explore more</h2>
          <ul className="explore">
            {home.explore.map((item, i) => (
              <li key={item.title} className={`explore__item ${i % 2 ? 'explore__item--flip' : ''}`}>
                <Link to={item.to} className="explore__link">
                  <img src={item.image} alt={item.alt} loading="lazy" className="lift" />
                  <span className="explore__text">
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="showcase__right" delay={240}>
          <FeatureCard {...home.right} stat={String(business.founded)} statLabel="since" align="right" titlePosition="bottom" />
        </Reveal>
      </section>

      <section className="services page-section" aria-labelledby="services-title">
        <Reveal className="services__head">
          <span className="eyebrow">What we print</span>
          <h2 id="services-title" className="section-title">
            Screen printing, from one colour to full process
          </h2>
        </Reveal>
        <ul className="services__list">
          {services.map((service, i) => (
            <Reveal as="li" key={service} delay={i * 60}>
              <div className="services__item lift">
                <span className="services__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {service}
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="callouts page-section" aria-label="Learn more about DNA">
        <Reveal>
          <img
            src={subheader}
            alt="Three sepia paintings of characters wearing printed t-shirts"
            className="callouts__banner"
            loading="lazy"
          />
        </Reveal>
        <div className="callouts__grid">
          {home.callouts.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <Link to={item.to} className="callout lift">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="callout__more">
                  More <ArrowIcon width={16} height={16} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
