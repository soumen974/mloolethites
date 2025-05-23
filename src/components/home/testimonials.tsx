"use client"

import * as React from "react"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "Cloud Monitor is proactive and easy to use, compared to Microsofts native tools that are more reactive. It's like having an additional employee on my team. We used to have to investigate an issue that we already knew about, and had to try to find information related to the problem. Now, Cloud Monitor gives us a heads-up that something is happening so we can get ahead of it before its a problem.",
    name: "David Termunde",
    title: "CTO, Arbor Park School District 145",
    link: "/blog/case-study-k12-arbor-park-school-district/",
  },
  {
    quote: "When I first learned about ManagedMethods I was skeptical that such an inexpensive solution would be able to secure our Google Workspace data better than Cloudlock. However, after our first week using the solution, I was more than convinced. Cloud Monitor has been one of the best technology decisions Ive made this year.",
    name: "Ed Newman",
    title: "CSO & Director of Technology Services ESC 12, TX",
    link: "/blog/case-study-k12-tx-esc12/",
  },
  {
    quote: "We have GoGuardian to manage students on a browser level. But its not even in the same ballpark as Cloud Monitor. It is the forensics tool that I use to get Google Workspace information our campus safety team needs to properly follow up with potential issues and incidents. Cloud Monitor is an invaluable tool for keeping our Google for Education environment and, to a degree, our campus a safe place for students to thrive.",
    name: "Justin Feltus",
    title: "System Specialist, Bremerton School District",
    link: "/blog/case-study-k12-bremerton/",
  },
  {
    quote: "At the time I was contacted by ManagedMethods, I really wasnt looking for a solution. I knew I had a problem because the state had recently passed a law requiring school districts to adhere to some of the NIST standards. The monitoring and tracking user accounts requirements in the NIST standards play right into the Cloud Monitor platform and its the perfect fit.",
    name: "Neal Richardson",
    title: "Director of Technology Hillsboro, Deering School District",
    link: "/blog/case-study-k12-hillsboro-deering-school-district/",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Testimonials</h2>
          <p className="text-xl text-muted-foreground">What our customers are saying</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                <Card className="border bg-card shadow-sm h-full flex flex-col">
                  <CardContent className="pt-6 flex-grow">
                    <blockquote className="text-muted-foreground italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start">
                    <Button
                      asChild
                      variant="link"
                      className="px-0 h-auto font-semibold text-foreground hover:no-underline"
                    >
                      <Link href={testimonial.link}>{testimonial.name}</Link>
                    </Button>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static mr-2 translate-y-0" />
            <CarouselNext className="relative static ml-2 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
