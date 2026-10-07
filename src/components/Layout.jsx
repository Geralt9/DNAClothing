import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import './Layout.css'

export default function Layout() {
  const { pathname } = useLocation()
  const mainRef = useRef(null)

  // New route: start at the top of the page.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // A plain #main anchor would be treated as a route by HashRouter,
  // so the skip link moves focus programmatically instead.
  const skipToContent = (event) => {
    event.preventDefault()
    mainRef.current?.focus()
  }

  return (
    <>
      <div className="backdrop" aria-hidden="true" />
      <a href="#" className="skip-link" onClick={skipToContent}>
        Skip to content
      </a>
      <div className="page-card">
        <Header />
        <main id="main" ref={mainRef} tabIndex={-1} className="page-main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}
