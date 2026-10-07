// Small inline SVG icon set. All icons are decorative (aria-hidden);
// the surrounding link or button carries the accessible name.

const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  'aria-hidden': true,
  focusable: false,
}

export function SearchIcon(props) {
  return (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  )
}

export function MenuIcon(props) {
  return (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...props}>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function ArrowIcon(props) {
  return (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function ExternalIcon(props) {
  return (
    <svg {...base} width={14} height={14} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </svg>
  )
}

export function FacebookIcon(props) {
  return (
    <svg {...base} fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1Z" />
    </svg>
  )
}

export function TwitterIcon(props) {
  return (
    <svg {...base} fill="currentColor" {...props}>
      <path d="M21.5 6.4c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.8.4-1.6.8-2.4.9a3.8 3.8 0 0 0-6.5 3.5A10.8 10.8 0 0 1 4.2 5.4a3.8 3.8 0 0 0 1.2 5.1c-.6 0-1.2-.2-1.7-.5 0 1.8 1.3 3.4 3 3.8-.6.1-1.1.2-1.7.1.5 1.5 1.9 2.6 3.6 2.7A7.7 7.7 0 0 1 2.5 18a10.8 10.8 0 0 0 16.7-9.6c.8-.5 1.4-1.2 2.3-2Z" />
    </svg>
  )
}
