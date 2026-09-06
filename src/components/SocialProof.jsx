import { site } from '../siteConfig'

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i + 1 <= Math.floor(rating)
        const half = !filled && i < rating
        return (
          <svg key={i} viewBox="0 0 20 20" className="h-5 w-5">
            <defs>
              <linearGradient id={`star-${i}`}>
                <stop offset={half ? '50%' : filled ? '100%' : '0%'} stopColor="#A9713F" />
                <stop offset={half ? '50%' : filled ? '100%' : '0%'} stopColor="#A9713F" stopOpacity="0.25" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#star-${i})`}
              d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.77l-5.2 2.75.99-5.8L1.58 7.62l5.82-.85L10 1.5Z"
            />
          </svg>
        )
      })}
    </div>
  )
}

const reviews = [
  {
    quote: 'A hidden gem. Great coffee and atmosphere.',
    author: 'Zain Khan',
    tag: 'Local Guide',
  },
  {
    quote: 'Loved their attention to minute details.',
    author: 'Mushfiq Hussain',
    tag: 'Local Guide',
  },
  {
    quote: 'One of the best cafes in Johar Town.',
    author: 'Rida Saleem',
    tag: null,
  },
]

export default function SocialProof() {
  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-oak">
          On Google
        </p>
        <div className="mt-4 flex flex-col items-center gap-2">
          <StarRating rating={site.googleRating} />
          <p className="font-display text-4xl font-medium text-forest">
            {site.googleRating}
            <span className="ml-2 font-sans text-base font-normal text-charcoal/50">
              · {site.googleReviewCount} reviews
            </span>
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="flex min-h-[160px] flex-col justify-between rounded-2xl bg-cream p-6 shadow-sm shadow-charcoal/5 ring-1 ring-charcoal/5"
            >
              <p className="font-serif text-base italic leading-relaxed text-charcoal">
                “{review.quote}”
              </p>
              <p className="mt-4 font-sans text-xs font-semibold uppercase tracking-wide text-forest">
                — {review.author}
                {review.tag && (
                  <span className="ml-1 font-normal normal-case text-charcoal/40">
                    · {review.tag}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
