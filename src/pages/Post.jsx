import { Link, useParams } from 'react-router-dom'
import { posts } from '../data/content.js'
import Reveal from '../components/Reveal.jsx'
import NewsSidebar from '../components/NewsSidebar.jsx'
import NotFound from './NotFound.jsx'
import './News.css'

export default function Post() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return <NotFound />

  return (
    <div className="news-layout">
      <Reveal as="article" className="post">
        <Link to="/news" className="post__back">
          ← All news
        </Link>
        <header className="post__header">
          <p className="post-meta">
            <span className="post-meta__cat">{post.category}</span>
            <time dateTime={post.date}>{post.dateLabel}</time>
            <span>By {post.author}</span>
          </p>
          <h1 className="post__title">{post.title}</h1>
        </header>
        <div className="prose post__body">
          {post.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <figure className="post__figure">
          <a href={post.image} target="_blank" rel="noreferrer">
            <img src={post.image} alt={post.imageAlt} width="688" height="521" />
            <span className="visually-hidden"> (open full size in a new tab)</span>
          </a>
          <figcaption>GrandLinq detour map — click to open full size.</figcaption>
        </figure>
      </Reveal>

      <NewsSidebar />
    </div>
  )
}
