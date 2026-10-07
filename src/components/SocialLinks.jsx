import { business } from '../data/content.js'
import { FacebookIcon, TwitterIcon } from './Icons.jsx'
import './SocialLinks.css'

export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`social ${className}`.trim()}>
      <li>
        <a href={business.social.facebook} target="_blank" rel="noreferrer" aria-label="DNA Screening on Facebook (opens in a new tab)">
          <FacebookIcon />
        </a>
      </li>
      <li>
        <a href={business.social.twitter} target="_blank" rel="noreferrer" aria-label="DNA Screening on Twitter (opens in a new tab)">
          <TwitterIcon />
        </a>
      </li>
    </ul>
  )
}
