# Setup (Next.js 16 + Tailwind v4, src/ folder)
1. npm i framer-motion gsap animejs   (animejs v4)
2. Copy into your project (replace the old files, delete the old ArrowButton.jsx):
   components/ -> src/components/
   data/       -> src/data/
   lib/        -> src/lib/
   app/page.jsx, app/globals.css -> src/app/
   Keep your own layout.tsx (the font loads from globals.css).
3. Add excavator.png (tightly cropped arm) and p1.png - p4.png to /public.

# How it works
The design is a 686px-wide canvas. Every element uses the coordinates measured from the design
(see P(x, y, w, h) in lib/u.js) and everything scales with the viewport width.
- Text/prices/brands/reviews: src/data/content.js
- Positions and sizes: the numbers inside each component
