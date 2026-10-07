import { Link } from 'react-router-dom'
import { posts } from '../data/content.js'
import PageIntro from '../components/PageIntro.jsx'
import Reveal from '../components/Reveal.jsx'
import { ArrowIcon } from '../components/Icons.jsx'
import NewsSidebar from '../components/NewsSidebar.jsx'
import headerImage from '../assets/header-image.png'
import './News.css'

export default function News() {
  return (
    <>
      <PageIntro title="News" image={headerImage} imagePosition="center 15%" eyebrow="From the shop" />

      <div className="news-layout">
        <div className="news-list">
          {posts.map((post) => (
            <Reveal as="article" key={post.slug} className="post-card">
              <Link to={`/news/${post.slug}`} className="post-card__media lift" tabIndex={-1} aria-hidden="true">
                <img src={post.image} alt="" loading="lazy" />
              </Link>
              <div className="post-card__body">
                <p className="post-meta">
                  <span className="post-meta__cat">{post.category}</span>
                  <time dateTime={post.date}>{post.dateLabel}</time>
                  <span>By {post.author}</span>
                </p>
                <h2 className="post-card__title">
                  <Link to={`/news/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="post-card__excerpt">{post.excerpt}</p>
                <Link to={`/news/${post.slug}`} className="btn btn--sm">
                  Read post <ArrowIcon width={14} height={14} />
                  <span className="visually-hidden">: {post.title}</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <NewsSidebar />
      </div>
    </>
  )
}
