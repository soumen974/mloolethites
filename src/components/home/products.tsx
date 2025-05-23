"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    title: "Cloud Monitor",
    description: "Cloud Monitor makes Google Workspace and Microsoft 365 cloud security and safety easy for K-12 schools – no proxy, no agent, no extension, and no special training required.",
    image: "https://ext.same-assets.com/2657846677/2310169025.webp",
    link: "/products/cloud-monitor/",
  },
  {
    title: "Content Filter",
    description: "Content Filter is a cloud-based web filtering platform that uses browser-level URL blocking and artificial intelligence to provide internet student safety, security, and CIPA compliance.",
    image: "https://ext.same-assets.com/2657846677/895057261.webp",
    link: "/products/content-filter/",
  },
  {
    title: "Classroom Manager",
    description: "Classroom Manager is a cloud-based classroom management tool that makes online instruction and learning easy for teachers and students.",
    image: "https://ext.same-assets.com/2657846677/3739736558.webp",
    link: "/products/classroom-manager/",
  },
]

export function ProductsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our products</h2>
          <p className="text-xl text-muted-foreground">Comprehensive data security and student safety tools</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="border rounded-lg overflow-hidden shadow-sm">
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.title} product`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <Button asChild variant="ghost" className="p-0 h-auto text-secondary hover:text-secondary/80 hover:bg-transparent">
                    <Link href={product.link}>Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
