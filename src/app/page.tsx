import Hero from "@/components/sections/Hero"

import Location from "@/components/sections/Location"
import Doctors from "@/components/sections/Doctors"
import Services from "@/components/sections/Services"
import Stats from "@/components/sections/Stats"
import Testimonials from "@/components/sections/Testimonails"
import Gallery from "@/components/sections/Gallery"


import About from "@/components/sections/About"

export default function Home() {
  return (
    <main className="font-geist">
      <Hero />
      <About />
      <Location />
      <Doctors />
      <Services />
      <Testimonials />
      <Stats />
      <Gallery />
    </main>
  )
}
