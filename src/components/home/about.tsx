"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/4 flex justify-center">
            <img
              src="https://ext.same-assets.com/2657846677/2838098675.svg"
              alt="About us icon"
              className="w-24 h-24"
            />
          </div>

          <div className="w-full md:w-3/4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              We're here to help IT teams secure online learning with reliable products
            </h2>

            <p className="text-muted-foreground mb-8">
              Designed specifically for technology leaders responsible for securing online learning on a limited budget.
              From the browser to the cloud, we provide the tools and support needed to ensure a safe and secure online
              learning environment for all.
            </p>

            <Button asChild variant="outline" className="rounded-full">
              <Link href="/company/">About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
