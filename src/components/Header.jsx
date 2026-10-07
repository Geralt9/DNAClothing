import { useEffect, useId, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { business, navLinks } from '../data/content.js'
import logo from '../assets/dna-logo-sm.png'
import { CloseIcon, ExternalIcon, MenuIcon, SearchIcon } from './Icons.jsx'
import SocialLinks from './SocialLinks.jsx'
import './Header.css'

function SearchBox({ className = '' }) {
  const [notice, setNotice] = useState('')
  const id = useId()

  // Visual only: there's no backend to search against.
  const onSubmit = (event) => {
    event.preventDefault()
    setNotice('Search isn’t available on this demo site.')
    window.setTimeout(() => setNotice(''), 3500)
  }

  return (
    <form role="search" className={`search ${className}`.trim()} onSubmit={onSubmit}>
      <label htmlFor={id} className="visually-hidden">
        Search the site
      </label>
      <SearchIcon className="search__icon" width={16} height={16} />
      <input id={id} type="search" className="search__input" placeholder="Search" />
      <p className="search__notice" role="status">
        {notice}
      </p>
    </form>
  )
}

function LoginLink({ className = '' }) {
  return (
    <a className={className} href={business.loginUrl} target="_blank" rel="noreferrer">
      Login
      <ExternalIcon />
      <span className="visually-hidden"> (customer order tracking, opens in a new tab)</span>
    </a>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const toggleRef = useRef(null)
  const closeRef = useRef(null)

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    // Wait for the drawer's visibility transition to start before focusing it.
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 60)
    document.body.style.overflow = 'hidden'
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.clearTimeout(focusTimer)
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const close = () => {
    setOpen(false)
    toggleRef.current?.focus()
  }

  return (
    <header className="site-header">
      <button
        ref={toggleRef}
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-drawer"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
        <span className="visually-hidden">Open menu</span>
      </button>

      <nav className="site-nav" aria-label="Primary">
        <ul>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === '/'}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <Link to="/" className="site-logo">
        <img src={logo} alt="DNA Screen Printing — home" width="253" height="82" />
      </Link>

      <div className="site-actions">
        <SearchBox className="search--header" />
        <LoginLink className="site-actions__login" />
        <Link to="/quote" className="btn btn--dark btn--sm site-actions__quote">
          Get a Quote
        </Link>
      </div>

      {/* Mobile slide-in drawer */}
      <div className={`drawer-overlay ${open ? 'is-open' : ''}`} onClick={close} aria-hidden="true" />
      <div
        id="mobile-drawer"
        className={`drawer on-dark ${open ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!open}
      >
        <div className="drawer__top">
          <img src={logo} alt="" width="110" height="36" />
          <button ref={closeRef} type="button" className="drawer__close" onClick={close}>
            <CloseIcon />
            <span className="visually-hidden">Close menu</span>
          </button>
        </div>
        <nav aria-label="Mobile">
          <ul className="drawer__links">
            {navLinks.map((link, i) => (
              <li key={link.to} style={{ '--i': i }}>
                <NavLink to={link.to} end={link.to === '/'}>
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li style={{ '--i': navLinks.length }}>
              <LoginLink />
            </li>
          </ul>
        </nav>
        <SearchBox className="search--drawer" />
        <Link to="/quote" className="btn drawer__quote">
          Get a Quote
        </Link>
        <div className="drawer__contact">
          <a href={business.phoneHref}>{business.phone}</a>
          <a href={`mailto:${business.email}`}>{business.email}</a>
        </div>
        <SocialLinks />
      </div>
    </header>
  )
}
