import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import heroImage from '../assets/gallery/img-0106.jpg'

export default function NotFound() {
  return (
    <>
      <Hero title="Not Found" image={heroImage} imagePosition="center 40%" />
      <div style={{ display: 'grid', justifyItems: 'start', gap: '1rem', marginTop: '2rem' }}>
        <p>Sorry, that page doesn’t exist.</p>
        <Link to="/" className="btn btn--dark">
          Back to home
        </Link>
      </div>
    </>
  )
}
