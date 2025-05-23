"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-background">
      {/* Background Elements/Decorations */}
      <div className="absolute inset-0 z-0 bg-[url('https://ext.same-assets.com/2657846677/643547592.svg')] bg-no-repeat bg-center opacity-60"></div>

      {/* Decorative Icons */}
      <div className="absolute top-16 right-12 md:right-32 w-10 h-10">
        <img
          src="https://ext.same-assets.com/2657846677/3043228634.svg"
          alt="Decorative icon"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-28 left-10 md:left-32 w-10 h-10">
        <img
          src="https://ext.same-assets.com/2657846677/3214780202.svg"
          alt="Decorative icon"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute bottom-28 left-16 md:left-40 w-8 h-8">
        <img
          src="https://ext.same-assets.com/2657846677/2352105805.svg"
          alt="Decorative icon"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight md:leading-tight mb-4 text-primary">
            <span className="text-primary">Proactive Cybersecurity</span>
            <br />
            <span className="text-secondary">& Safety</span>
            <span className="text-primary"> Made Easy for</span>
            <br />
            <span className="text-primary">K-12 Schools</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-3xl">
            ManagedMethods provides easy, affordable cybersecurity and student safety monitoring for technology leaders who need to secure online learning on a tight budget.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <Link href="/free-trial/">Free Trial</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="/schedule-a-demo/">Book a Demo</Link>
            </Button>
          </div>

          <div className="relative w-full max-w-4xl">
            <img
              src="https://managedmethods.com/wp-content/uploads/2024/06/MacBook-contents4.png"
              alt="ManagedMethods dashboard preview"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
