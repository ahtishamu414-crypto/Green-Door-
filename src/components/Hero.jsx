import diningRoom from '../assets/interior/dining-room-wide.jpg'
import { site, whatsappUrl } from '../siteConfig'
import Checkerboard from './Checkerboard'

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      <img
        src={diningRoom}
        alt="Green Door Coffee Cafe interior — terrazzo floor, oak chairs, and paper lanterns"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/60 to-charcoal/30" />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-10 pt-32 text-center text-paper sm:pb-14">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-oak-light">
          Johar Town, Lahore
        </p>
        <h1 className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
          Green Door
          <br />
          Coffee Cafe &amp; Patisserie
        </h1>
        <p className="mx-auto mt-5 max-w-md font-serif text-base italic text-paper/90 sm:text-lg">
          Specialty coffee and fresh patisserie, open till midnight in Johar Town.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={whatsappUrl("Hi! I'd like to place an order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-oak px-7 py-3.5 font-sans text-sm font-semibold text-paper shadow-lg shadow-black/20 transition hover:bg-oak-light sm:w-auto"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.28 4.9L2 22l5.25-1.38A9.94 9.94 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.15c-1.6 0-3.15-.43-4.5-1.24l-.32-.19-3.11.82.83-3.03-.21-.31A8.15 8.15 0 1 1 20.19 12a8.16 8.16 0 0 1-8.15 8.15Zm4.48-6.11c-.25-.12-1.45-.71-1.67-.8-.22-.08-.39-.12-.55.13-.16.24-.63.79-.78.96-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.24-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.04 0 1.2.88 2.37 1 2.53.12.16 1.74 2.66 4.22 3.72.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28Z" />
            </svg>
            Order on WhatsApp
          </a>
          <a
            href="#menu"
            className="inline-flex w-full items-center justify-center rounded-full border border-paper/40 px-7 py-3.5 font-sans text-sm font-semibold text-paper transition hover:bg-paper/10 sm:w-auto"
          >
            View Menu
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-sans text-xs text-paper/80">
          <span>{site.hoursLabel}</span>
          <span className="h-1 w-1 rounded-full bg-paper/50" />
          <span>★ {site.googleRating} · {site.googleReviewCount} reviews</span>
          <span className="h-1 w-1 rounded-full bg-paper/50" />
          <span>{site.services.join(' · ')}</span>
        </div>
      </div>

      <Checkerboard className="relative z-10" />
    </section>
  )
}
