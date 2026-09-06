import mirrorWall from '../assets/interior/mirror-wall.jpg'

export default function About() {
  return (
    <section id="about" className="bg-forest-dark py-16 sm:py-24">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-6 sm:grid-cols-2 sm:gap-14">
        <div className="order-2 sm:order-1">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-oak-light">
            The space
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium leading-tight tracking-tight text-paper sm:text-5xl">
            A green door,
            <br />
            wide open in Johar Town.
          </h2>
          <div className="mt-6 space-y-4 font-sans text-[15px] leading-relaxed text-paper/80">
            <p>
              Tucked into Block R of Phase 2, Green Door is the kind of room
              you end up staying in longer than you planned. High ceilings
              and whitewashed walls open the space up; terrazzo underfoot and
              a wall of nine round mirrors give it a little mischief.
            </p>
            <p>
              Plants crowd the corners, oak chairs gather around oak-top
              tables, and paper lanterns keep the light warm — we're open
              until 12:30 AM.
            </p>
          </div>
        </div>

        <div className="order-1 sm:order-2">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/30">
            <img
              src={mirrorWall}
              alt="Green Door Coffee Cafe's mirror wall — nine round convex mirrors over terrazzo flooring"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
