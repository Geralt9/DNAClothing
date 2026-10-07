import { business } from '../data/content.js'

// Builds a mailto: link to the shop with a prefilled subject and body.
export function buildMailto(subject, lines) {
  const body = lines.filter((line) => line !== null && line !== undefined).join('\n')
  return `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
