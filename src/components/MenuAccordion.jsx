import { useState } from 'react'
import { menuGroups } from '../menuData'
import Checkerboard from './Checkerboard'

function ChevronIcon({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 flex-shrink-0 stroke-forest transition-transform duration-200 ${
        open ? 'rotate-180' : ''
      }`}
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function CategoryPanel({ category, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = `menu-panel-${category.name.replace(/\s+/g, '-').toLowerCase()}`

  return (
    <div className="border-b border-charcoal/10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
      >
        <span className="flex items-baseline gap-2">
          <span className="font-serif text-lg font-semibold text-forest underline decoration-forest/30 decoration-2 underline-offset-4">
            {category.name}
          </span>
          <span className="font-sans text-xs text-charcoal/40">
            {category.items.length}
          </span>
        </span>
        <span className="flex items-center gap-3">
          {category.note && (
            <span className="hidden font-sans text-xs uppercase tracking-wide text-charcoal/40 sm:inline">
              {category.note}
            </span>
          )}
          <ChevronIcon open={open} />
        </span>
      </button>

      {open && (
        <div id={panelId} className="pb-5">
          {category.note && (
            <p className="mb-2 font-sans text-xs uppercase tracking-wide text-charcoal/40 sm:hidden">
              {category.note}
            </p>
          )}
          <ul className="divide-y divide-charcoal/5">
            {category.items.map((item) => (
              <li
                key={item.name}
                className="flex items-baseline justify-between gap-4 py-2.5"
              >
                <span className="font-sans text-[15px] leading-snug text-charcoal">
                  {item.name}
                  {item.badge && (
                    <span className="ml-2 rounded-full bg-forest/10 px-2 py-0.5 font-sans text-[10px] font-medium uppercase tracking-wide text-forest">
                      {item.badge}
                    </span>
                  )}
                </span>
                <span className="flex-shrink-0 font-sans text-[15px] font-semibold tabular-nums text-charcoal">
                  {item.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default function MenuAccordion() {
  return (
    <section id="menu" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-oak">
            What we serve
          </p>
          <h2 className="mt-3 font-display text-5xl font-medium tracking-tight text-forest sm:text-6xl">
            Menu
          </h2>
          <p className="mx-auto mt-4 max-w-sm font-sans text-sm text-charcoal/60">
            All prices in PKR, exclusive of tax.
          </p>
        </div>

        <Checkerboard className="my-10" />

        {menuGroups.map((group, gi) => (
          <div key={group.group} className="mb-4">
            <h3 className="mb-1 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/40">
              {group.group}
            </h3>
            <div className="rounded-2xl bg-paper px-5 shadow-sm shadow-charcoal/5 ring-1 ring-charcoal/5">
              {group.categories.map((category) => (
                <CategoryPanel
                  key={category.name}
                  category={category}
                  defaultOpen
                />
              ))}
            </div>
            {gi < menuGroups.length - 1 && <Checkerboard className="my-8" />}
          </div>
        ))}
      </div>
    </section>
  )
}
