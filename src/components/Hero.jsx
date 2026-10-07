import { useLayoutEffect, useRef } from 'react'
import './Hero.css'

// Glyph widths vary a lot between words, so after the CSS clamp() gives a
// first size, measure the rendered line and scale it to fill the stage exactly.
function useFitText(stageRef, fitKey) {
  useLayoutEffect(() => {
    const stage = stageRef.current
    const layer = stage.querySelector('.hero__layer--top')
    let lastWidth = 0

    const fit = (force) => {
      const width = stage.clientWidth
      if (!force && width === lastWidth) return
      lastWidth = width
      stage.style.removeProperty('--fs-fit')
      const range = document.createRange()
      range.selectNodeContents(layer)
      const textWidth = range.getBoundingClientRect().width
      if (!textWidth) return
      const current = parseFloat(getComputedStyle(layer).fontSize)
      const max = parseFloat(getComputedStyle(stage).getPropertyValue('--fs-max')) * parseFloat(getComputedStyle(document.documentElement).fontSize)
      const next = Math.min((current * width * 0.98) / textWidth, max || Infinity)
      stage.style.setProperty('--fs-fit', `${next.toFixed(2)}px`)
    }

    fit(true)
    document.fonts?.ready.then(() => fit(true))
    const observer = new ResizeObserver(() => fit(false))
    observer.observe(stage)
    return () => observer.disconnect()
  }, [stageRef, fitKey])
}

/**
 * Giant knockout headline. The photo fills the top band; the headline is
 * sliced along `--split`: above the cut the letters are white over the photo,
 * below it the photo shows through the letters (background-clip: text) and
 * the lower slice is nudged down for the offset effect from the reference.
 *
 * `title` is a string or an array of words. On narrow screens the "stack"
 * variant puts one word per line.
 */
export default function Hero({ title, image, imagePosition = 'center', variant = 'page', className = '' }) {
  const stageRef = useRef(null)
  const words = Array.isArray(title) ? title.join(' ').split(' ') : title.split(' ')
  const lineChars = words.join(' ').length
  const wordChars = Math.max(...words.map((w) => w.length))
  useFitText(stageRef, words.join(' '))

  const text = words.map((word, i) => (
    <span key={i} className="hero__word">
      {word}
      {i < words.length - 1 ? ' ' : ''}
    </span>
  ))

  return (
    <div
      className={`hero hero--${variant} ${className}`.trim()}
      style={{
        '--hero-img': `url(${image})`,
        '--hero-pos': imagePosition,
        '--chars-line': lineChars,
        '--chars-word': wordChars,
        '--lines-stacked': words.length,
      }}
    >
      <div className="hero__stage" ref={stageRef}>
        <div className="hero__band" />
        <h1 className="hero__layer hero__layer--top">{text}</h1>
        <div className="hero__layer hero__layer--bottom" aria-hidden="true">
          <span className="hero__fill">{text}</span>
        </div>
      </div>
    </div>
  )
}
