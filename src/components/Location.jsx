import { site } from '../siteConfig'
import Checkerboard from './Checkerboard'

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0 fill-forest" aria-hidden="true">
      <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7.05 11.25 7.35 11.5a1 1 0 0 0 1.3 0C13 21.25 20 15.25 20 10c0-4.42-3.58-8-8-8Zm0 10.75A2.75 2.75 0 1 1 12 7.25a2.75 2.75 0 0 1 0 5.5Z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0 fill-forest" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm.75 10.4 4.2 2.5a.9.9 0 1 1-.92 1.55l-4.6-2.74a.9.9 0 0 1-.43-.77V6.9a.9.9 0 0 1 1.8 0v5.5Z" />
    </svg>
  )
}

export default function Location() {
  return (
    <section id="location" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-oak">
            Find us
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-forest sm:text-5xl">
            Visit Green Door
          </h2>
        </div>

        <Checkerboard className="my-10" />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
          <div className="order-2 flex flex-col justify-center gap-6 sm:order-1">
            <div className="flex items-start gap-3">
              <PinIcon />
              <div>
                <p className="font-sans text-sm font-semibold text-charcoal">Address</p>
                <p className="mt-1 font-sans text-[15px] text-charcoal/70">
                  {site.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ClockIcon />
              <div>
                <p className="font-sans text-sm font-semibold text-charcoal">Hours</p>
                <p className="mt-1 font-sans text-[15px] text-charcoal/70">
                  {site.hoursLabel}, daily
                </p>
              </div>
            </div>

            <a
              href={site.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-forest px-6 py-3 font-sans text-sm font-semibold text-paper transition hover:bg-forest-light"
            >
              Get Directions
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="order-1 overflow-hidden rounded-2xl shadow-lg shadow-charcoal/10 ring-1 ring-charcoal/5 sm:order-2">
            <iframe
              title="Green Door Coffee Cafe & Patisserie location map"
              src={site.mapsEmbedUrl}
              className="h-72 w-full sm:h-full sm:min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
