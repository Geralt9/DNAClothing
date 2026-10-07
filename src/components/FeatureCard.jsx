import { Link } from 'react-router-dom'
import './FeatureCard.css'

// Image card with a stat badge and a "Discover" button overlay.
export default function FeatureCard({ title, text, image, alt, to, stat, statLabel, align = 'left', titlePosition = 'top' }) {
  const heading = (
    <div className="feature__head">
      <h2 className="feature__title">{title}</h2>
      <p className="feature__text">{text}</p>
    </div>
  )

  return (
    <article className={`feature feature--${align} feature--title-${titlePosition}`}>
      {titlePosition === 'top' && heading}
      <div className="feature__media lift">
        <img src={image} alt={alt} loading="lazy" />
        <div className="feature__overlay">
          {stat && (
            <p className="feature__stat">
              <strong>{stat}</strong> / {statLabel}
            </p>
          )}
          <Link to={to} className="feature__discover">
            Discover<span className="visually-hidden"> {title}</span>
          </Link>
        </div>
      </div>
      {titlePosition === 'bottom' && heading}
    </article>
  )
}
