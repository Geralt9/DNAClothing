import { useCallback, useEffect, useRef, useState } from 'react'
import { gallery } from '../data/content.js'
import PageIntro from '../components/PageIntro.jsx'
import Reveal from '../components/Reveal.jsx'
import { ArrowIcon, CloseIcon } from '../components/Icons.jsx'
import './Gallery.css'

function Lightbox({ index, onClose, onStep }) {
  const dialogRef = useRef(null)
  const item = gallery[index]

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog.open) dialog.showModal()
    const onKey = (event) => {
      if (event.key === 'ArrowRight') onStep(1)
      if (event.key === 'ArrowLeft') onStep(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onStep])

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label={item.client ? `Client: ${item.client}` : 'Gallery image'}
      onClose={onClose}
      onClick={(event) => event.target === dialogRef.current && dialogRef.current.close()}
    >
      <figure className="lightbox__figure">
        <img src={item.full} alt={item.alt} />
        <figcaption>
          {item.client ? (
            <span>
              <span className="lightbox__label">Client:</span> {item.client}
            </span>
          ) : (
            <span className="lightbox__label">Client not listed</span>
          )}
          <span className="lightbox__count">
            {index + 1} / {gallery.length}
          </span>
        </figcaption>
      </figure>
      <button type="button" className="lightbox__btn lightbox__close" onClick={() => dialogRef.current.close()}>
        <CloseIcon />
        <span className="visually-hidden">Close</span>
      </button>
      <button type="button" className="lightbox__btn lightbox__prev" onClick={() => onStep(-1)}>
        <ArrowIcon style={{ transform: 'rotate(180deg)' }} />
        <span className="visually-hidden">Previous image</span>
      </button>
      <button type="button" className="lightbox__btn lightbox__next" onClick={() => onStep(1)}>
        <ArrowIcon />
        <span className="visually-hidden">Next image</span>
      </button>
    </dialog>
  )
}

export default function Gallery() {
  const [active, setActive] = useState(null)
  const triggers = useRef([])

  const step = useCallback((dir) => {
    setActive((i) => (i + dir + gallery.length) % gallery.length)
  }, [])

  // Return focus to the thumbnail that opened the lightbox.
  const close = () => {
    triggers.current[active]?.focus()
    setActive(null)
  }

  return (
    <>
      <PageIntro
        title="Gallery"
        image={gallery[3].full}
        imagePosition="center 45%"
        eyebrow="Our work"
        lead="Band wear, fan wear and shop tees printed by DNA for our clients."
      />

      <ul className="gallery">
        {gallery.map((item, i) => (
          <Reveal as="li" key={item.full} delay={(i % 3) * 80}>
            <button
              type="button"
              ref={(el) => {
                triggers.current[i] = el
              }}
              className="gallery__item lift"
              onClick={() => setActive(i)}
            >
              <img src={item.thumb} alt={item.alt} loading="lazy" />
              <span className="gallery__caption">
                {item.client ? (
                  <>
                    <span className="gallery__label">Client</span>
                    {item.client}
                  </>
                ) : (
                  <span className="gallery__label">Client not listed</span>
                )}
              </span>
              <span className="visually-hidden"> — view larger</span>
            </button>
          </Reveal>
        ))}
      </ul>

      {active !== null && <Lightbox index={active} onClose={close} onStep={step} />}
    </>
  )
}
