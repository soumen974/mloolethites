"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const features = [
  {
    id: "identify",
    title: "Identify cyber safety and security risks in Google Workspace, Microsoft 365, and in the browser",
    description: "ManagedMethods offers K-12 IT teams efficient, cost-effective products to detect cyber safety signals and data security risks in district Google Workspace and Microsoft 365 accounts, and in the browser. Continually monitor and audit your users online browsing and your Google Workspace for Education and/or Microsoft 365 for Education environment. This includes Chrome and Edge, as well as all files stored in Drive and Shared Drives, Gmail, Google Meet, SharePoint, OneDrive, Outlook 365 and Exchange.",
    image: "https://ext.same-assets.com/2657846677/3891044378.svg",
    link: "/products/cloud-monitor/",
  },
  {
    id: "secure",
    title: "Secure data and monitor student safety signals",
    description: "ManagedMethods provides enterprise-grade cloud security and web content filtering platforms built specifically for the unique needs of IT teams in K-12 school districts. Cloud Monitor protects sensitive data in Google Workspace and Microsoft 365 from loss and theft, monitoring district cloud apps for safety signals like cyberbullying, violence, and inappropriate content, with machine learning detecting self-harm. Content Filter streamlines web filtering and CIPA compliance, enhancing browser safety to detect self-harm, suicide, and cyberbullying comprehensively across online learning platforms.",
    image: "https://ext.same-assets.com/2657846677/3891044378.svg",
    link: "/free-trial/",
  },
  {
    id: "automate",
    title: "Automate cybersecurity and safety management policies",
    description: "Cloud Monitor and Content Filter deploy in minutes without impacting your network or end-user experience. With just a few clicks, you will have full visibility and control over district Google Workspace, Microsoft 365, and online browsing. Set up automated policies to prevent data loss, detect account takeovers, protect against phishing and malware, and identify student safety signals.",
    image: "https://ext.same-assets.com/2657846677/3891044378.svg",
    link: "/free-trial/",
  },
  {
    id: "protect",
    title: "Protect students from inappropriate content",
    description: "Content Filter is meticulously crafted to enhance internet safety in K-12 schools without impacting device performance. This cloud-based solution applies browser-level URL blocking coupled with artificial intelligence to ensure student safety, security, and CIPA compliance. This system not only blocks inappropriate content but also uses advanced AI to monitor online activities, providing a safe, controlled browsing experience for students.",
    image: "https://ext.same-assets.com/2657846677/3891044378.svg",
    link: "/products/content-filter/",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">How it Works</h2>
          <p className="text-xl text-muted-foreground">Discover product core functionalities</p>
        </div>

        <Tabs defaultValue="identify" className="w-full">
          <TabsList className="grid grid-cols-1 md:grid-cols-4 h-auto p-0 bg-transparent">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className="data-[state=active]:bg-muted data-[state=active]:shadow-sm border-b-2 border-transparent data-[state=active]:border-secondary py-4 px-6 rounded-none"
              >
                <h3 className="text-sm font-medium">{feature.title.split(' ').slice(0, 3).join(' ')}</h3>
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id} className="mt-8">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2 space-y-6">
                  <h3 className="text-xl md:text-2xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                  <Button asChild variant="outline" className="rounded-full">
                    <Link href={feature.link}>Learn More</Link>
                  </Button>
                </div>

                <div className="w-full md:w-1/2">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto max-h-96 object-contain"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
