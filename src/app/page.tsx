// app/page.tsx  — STRUCTURE ONLY (no colors, no images, no real styling)
// Every <section> = full screen: min-h-dvh (mobile-safe) + md:h-dvh on desktop
// Every section is `relative` so its decorative children can be `absolute`
// data-anim="..." = hooks for GSAP / Framer Motion / ScrollTrigger

const SECTION = "relative w-full min-h-dvh md:h-dvh overflow-hidden";
const WRAP = "mx-auto w-full max-w-[1440px] px-5 md:px-10"; // shared content width

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <BrandStatement />
      <MostSelling />
      <ShopByBrands />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}

/* ───────── 0. HEADER (the only FIXED element) ───────── */
function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-end px-5 py-4 md:px-10">
      <button aria-label="Menu" className="size-10">{/* hamburger */}</button>
    </header>
  );
}

/* ───────── 1. HERO ───────── */
function Hero() {
  return (
    <section className={SECTION}>
      {/* Top-left: title */}
      <div className="absolute left-5 top-10 z-10 md:left-10 md:top-14" data-anim="hero-title">
        <p className="text-xl md:text-3xl">Advanced Construction</p>
        <h1 className="text-6xl md:text-9xl leading-none">SPARES</h1>
      </div>

      {/* Top-right: line + tagline + CTA. Stacked on mobile, absolute on desktop */}
      <div className="absolute right-5 top-40 z-10 flex flex-col items-end gap-4 md:right-10 md:top-24">
        <span className="block h-1 w-20" />{/* small line */}
        <p className="text-right text-xl md:text-3xl">Find high-quality <br /> SPARE PARTS</p>
        <a href="#" className="rounded-full px-10 py-4">{/* CTA pill */}</a>
      </div>

      {/* Center/bottom: big product image (excavator). Bleeds off the edge */}
      <div className="absolute bottom-0 left-1/2 w-[130%] -translate-x-1/2 md:w-[80%]" data-anim="hero-img">
        {/* <Image /> */}
      </div>

      {/* Decorative floating squares / frame lines (all absolute, pointer-events-none) */}
      <div className="pointer-events-none absolute left-[20%] top-[45%] size-24" data-anim="float" />
      <div className="pointer-events-none absolute right-[10%] bottom-[12%] size-8" data-anim="float" />

      {/* Bottom-left caption */}
      <p className="absolute bottom-6 left-5 z-10 md:left-10">Caption text</p>
    </section>
  );
}

/* ───────── 2. BRAND STATEMENT ───────── */
function BrandStatement() {
  return (
    <section className={SECTION}>
      {/* Decorative circle, top-left */}
      <div className="absolute left-[8%] top-[8%] size-24 rounded-full md:size-40" />

      {/* Top-right info card: number beside title (flex) + description box below */}
      <div className="absolute right-5 top-8 z-10 w-[85%] max-w-md md:right-10 md:top-10">
        <div className="flex items-center gap-4 rounded-3xl p-4">
          <span className="text-5xl md:text-7xl">#01</span>
          <div>
            <h3>High-Quality Spare Parts</h3>
            <p>Everything You Need, In One Place</p>
          </div>
        </div>
        <p className="ml-auto mt-2 w-3/4 rounded-3xl p-4 text-sm">Description…</p>
      </div>

      {/* Giant 2-line headline: two rows, staggered with justify-start / justify-end */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-5 md:px-10" data-anim="statement">
        <h2 className="text-6xl leading-[0.9] md:text-[12rem]">
          <span className="block">Brand that</span>
          <span className="block">Trust Quality</span>
        </h2>
      </div>

      {/* Rotated logo card — dead center ON TOP of the text (z-20) */}
      <div className="absolute left-1/2 top-1/2 z-20 h-[55%] w-56 -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] rounded-3xl md:w-96"
           data-anim="logo-card">
        <span className="absolute inset-0 grid place-items-center">BRAND LOGO</span>
      </div>

      {/* Slider arrows: absolute left/right of center */}
      <button className="absolute left-[15%] top-[52%] size-10 rounded-full">←</button>
      <button className="absolute right-[15%] top-[52%] size-10 rounded-full">→</button>
      <span className="absolute bottom-[8%] right-[8%]">→</span>
    </section>
  );
}

/* ───────── 3. MOST SELLING ───────── */
function MostSelling() {
  return (
    <section className={`${SECTION} flex items-center`}>
      <div className={WRAP}>
        {/* Heading row: title left, link right */}
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-4xl md:text-7xl">Most Selling</h2>
          <a href="#" className="underline">Browse all</a>
        </div>

        {/* 2 cols mobile → 4 cols desktop */}
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {[1, 2, 3, 4].map((i) => (
            <li key={i} className="relative flex aspect-[3/4] flex-col overflow-hidden rounded-2xl p-4">
              <div>
                <h3>Product name</h3>
                <p>₹000</p>
              </div>
              {/* product image pinned to bottom */}
              <div className="absolute inset-x-0 bottom-0 h-3/5" />
            </li>
          ))}
        </ul>

        <hr className="mt-10" />{/* divider */}
      </div>
    </section>
  );
}

/* ───────── 4. SHOP BY BRANDS ───────── */
function ShopByBrands() {
  return (
    <section className={`${SECTION} flex flex-col justify-center`}>
      {/* Big diagonal band behind (absolute, rotated, bleeds off edges) */}
      <div className="pointer-events-none absolute -right-20 top-1/4 h-40 w-[120%] -rotate-[20deg]" />

      <div className={`${WRAP} relative z-10`}>
        <h2 className="mb-8 text-4xl md:text-7xl">Shop by Brands</h2>

        {/* 2 cols mobile → 4 cols desktop. Odd rows shifted for the staggered look */}
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {["B1","B2","B3","B4","B5","B6","B7","B8"].map((b, i) => (
            <li key={b}
                className={`grid h-20 place-items-center rounded-2xl text-4xl md:h-24 md:text-6xl
                            ${i >= 4 ? "md:-translate-x-4" : ""}`}>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────── 5. WHY CHOOSE US ───────── */
function WhyChooseUs() {
  return (
    <section className={SECTION}>
      {/* Two crossing tapes: absolute, full-width, rotated in opposite directions.
          Inside each: a flex row that scrolls infinitely (marquee animation) */}
      <div className="absolute -left-10 top-[8%] w-[120%] rotate-[4deg] overflow-hidden">
        <div className="flex w-max gap-6 whitespace-nowrap" data-anim="marquee-right">
          {Array.from({ length: 12 }).map((_, i) => <span key={i}>why choose us</span>)}
        </div>
      </div>
      <div className="absolute -left-10 top-[14%] w-[120%] -rotate-[4deg] overflow-hidden">
        <div className="flex w-max gap-6 whitespace-nowrap" data-anim="marquee-left">
          {Array.from({ length: 12 }).map((_, i) => <span key={i}>why choose us</span>)}
        </div>
      </div>

      {/* Crane hook + cables hanging from the tapes */}
      <div className="absolute left-1/2 top-[18%] h-[22%] w-2/3 -translate-x-1/2" data-anim="hook" />

      {/* Container box: centered, bottom part of screen */}
      <div className="absolute bottom-[6%] left-1/2 w-[92%] max-w-5xl -translate-x-1/2" data-anim="container">
        <div className="relative rounded-md px-8 py-12 text-center md:px-20 md:py-16">
          {/* vertical stripes = absolute overlay (repeating gradient later) */}
          <div className="pointer-events-none absolute inset-0" />
          <h2 className="relative text-4xl md:text-7xl">WHY CHOOSE US?</h2>
          <p className="relative mx-auto mt-4 max-w-2xl">Paragraph…</p>
        </div>
      </div>
    </section>
  );
}

/* ───────── 6. TESTIMONIALS ───────── */
function Testimonials() {
  return (
    <section className={`${SECTION} flex flex-col items-center justify-center`}>
      <h2 className="mb-10 px-5 text-center text-3xl md:text-6xl">
        VOICES OF PEOPLE WHO VALUE <br /> QUALITY OVER COMPROMISE
      </h2>

      {/* Horizontal row that overflows both sides (slider / drag / marquee) */}
      <div className="w-full overflow-hidden">
        <ul className="flex w-max gap-6 px-6" data-anim="testimonial-track">
          {[1, 2, 3, 4, 5].map((i) => (
            <li key={i}
                className="w-72 shrink-0 rounded-3xl p-5 md:w-96"
                style={{ transform: `rotate(${i % 2 ? -5 : 5}deg)` }}>
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-full" />{/* avatar */}
                <div>
                  <p>Name</p>
                  <p>28 years old</p>
                </div>
              </div>
              <p className="mt-3">Review text…</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Decorative arcs at the bottom */}
      <div className="pointer-events-none absolute -bottom-1/2 left-1/2 aspect-square w-[120%] -translate-x-1/2 rounded-full" />
    </section>
  );
}
