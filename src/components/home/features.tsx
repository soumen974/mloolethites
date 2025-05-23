"use client"

import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "Cost-Effective",
    description: "Our products are designed to be affordable, ensuring you get reliable security without stretching your budget.",
  },
  {
    title: "Ease of Use",
    description: "Our tools feature user-friendly interfaces, making it time-efficient for technology leaders to implement and manage.",
  },
  {
    title: "Customizable",
    description: "Every school district has unique requirements. Our products are customizable to adapt to your specific needs.",
  },
  {
    title: "Reliable protection",
    description: "Rely on consistent protection against cyber threats, allowing you to focus on enhancing the learning experience for your students.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">What sets us apart?</h2>
          <p className="text-xl text-muted-foreground">Experience the difference</p>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            With affordability, ease of use, customization, and reliability at the core of our products,
            discover why we are the trusted choice for K-12 technology leaders dedicated to safeguarding
            online learning environments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border bg-card shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
