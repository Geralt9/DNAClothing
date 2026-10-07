import { Link } from 'react-router-dom'
import { posts } from '../data/content.js'
import Reveal from './Reveal.jsx'

// Recent posts / archives / categories, derived from the post list.
export default function NewsSidebar() {
  const archives = [...new Set(posts.map((p) => new Date(`${p.date}T12:00:00`).toLocaleDateString('en-CA', { month: 'long', year: 'numeric' })))]
  const categories = [...new Set(posts.map((p) => p.category))]

  return (
    <Reveal as="aside" className="news-sidebar" aria-label="News sidebar" delay={100}>
      <section>
        <h2>Recent Posts</h2>
        <ul>
          {posts.map((p) => (
            <li key={p.slug}>
              <Link to={`/news/${p.slug}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Archives</h2>
        <ul>
          {archives.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Categories</h2>
        <ul className="news-sidebar__tags">
          {categories.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>
    </Reveal>
  )
}
