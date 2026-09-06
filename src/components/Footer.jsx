import { site, whatsappUrl } from '../siteConfig'
import Checkerboard from './Checkerboard'

export default function Footer() {
  return (
    <footer className="bg-forest-dark">
      <Checkerboard />
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-2xl font-medium text-paper">Green Door</p>
            <p className="mt-1 font-sans text-xs uppercase tracking-[0.2em] text-oak-light">
              Coffee Cafe &amp; Patisserie
            </p>
            <p className="mt-4 max-w-xs font-sans text-sm text-paper/70">
              {site.address}
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:items-end">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-paper/80 transition hover:text-paper"
            >
              {site.phoneDisplay}
            </a>
            {site.instagramUrl ? (
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-paper/80 transition hover:text-paper"
              >
                Instagram
              </a>
            ) : (
              <span className="font-sans text-sm text-paper/40">
                Instagram — link pending
              </span>
            )}
            <span className="font-sans text-xs text-paper/50">
              {site.hoursLabel}
            </span>
          </div>
        </div>

        <div className="mt-10 border-t border-paper/10 pt-6 text-center font-sans text-xs text-paper/40">
          © {new Date().getFullYear()} Green Door Coffee Cafe &amp; Patisserie. Johar Town, Lahore.
        </div>
      </div>
    </footer>
  )
}

