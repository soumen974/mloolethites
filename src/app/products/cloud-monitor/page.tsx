import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { TestimonialsSection } from "@/components/home/testimonials"
import { CustomerLogosSection } from "@/components/home/customer-logos"

export default function CloudMonitorPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Banner */}
      <section className="bg-background py-16 md:py-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <div className="text-sm text-muted-foreground mb-2">Advanced cloud security</div>
              <h1 className="text-3xl md:text-4xl font-semibold mb-4">Secure District Data with Cloud Monitor</h1>
              <p className="text-muted-foreground mb-8">
                Cloud Monitor makes Google Workspace and Microsoft 365 cloud security and safety easy for K-12 schools—no proxy,
                no agent, no extension, and no special training required.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link href="/schedule-a-demo/">Book a Demo</Link>
              </Button>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative">
                <img
                  src="https://managedmethods.com/wp-content/uploads/2024/05/Group-69.png"
                  alt="ManagedMethods Cloud Monitor"
                  className="w-full h-auto"
                />
                <img
                  src="https://managedmethods.com/wp-content/uploads/2024/07/MacBook-Pro-15.png"
                  alt="Cloud Monitor Dashboard"
                  className="w-full h-auto absolute top-10 left-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Cloud Monitor is a centralized command center for managing Google Workspace and Microsoft 365 cybersecurity and student safety risks.
            </h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              The platform uses deep API integrations to continuously monitor for these risks in district Google Workspace and Microsoft 365.
              It provides automated controls to prevent data security breaches, account takeovers, ransomware and phishing attacks, and detect student safety signals.
            </p>
          </div>
        </div>
      </section>

      {/* Problems Solved Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center">Problems Cloud Monitor Solves</h2>

          <Tabs defaultValue="app-management" className="w-full">
            <TabsList className="grid grid-cols-1 md:grid-cols-5 h-auto p-0 bg-transparent mb-8">
              {cloudMonitorFeatures.map((feature) => (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className="data-[state=active]:bg-muted data-[state=active]:shadow-sm border-b-2 border-transparent data-[state=active]:border-secondary py-4 px-6 rounded-none"
                >
                  <span className="text-sm font-medium">{feature.shortTitle}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {cloudMonitorFeatures.map((feature) => (
              <TabsContent key={feature.id} value={feature.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                  <div className="space-y-6">
                    <h3 className="text-xl md:text-2xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                    {feature.points && (
                      <ul className="space-y-2 list-disc pl-5">
                        {feature.points.map((point, i) => (
                          <li key={i} className="text-muted-foreground">{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto rounded-lg shadow-sm"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="rounded-full bg-secondary text-white hover:bg-secondary/90">
              <Link href="/casb-free-product-trial-free-security-audit/">Claim My Free Audit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Customers Logos */}
      <CustomerLogosSection />

      <Footer />
    </main>
  )
}

const cloudMonitorFeatures = [
  {
    id: "app-management",
    shortTitle: "3rd party app management",
    title: "3rd party app management",
    description: "Easily detect and revoke third-party apps with access to your districts emails and data. Cloud Monitor continuously scans OAuth permissions, assigns risk scores, and enables automatic remediation based on customizable rules.",
    points: [
      "The scope of required admin privileges.",
      "The presence of write permissions.",
      "The status of authorization within your specific environment.",
      "The endorsement status in other Cloud Monitor user environments.",
    ],
    image: "https://managedmethods.com/wp-content/uploads/2024/07/Apps-Tab_0421-43-768x503.png",
  },
  {
    id: "data-loss",
    shortTitle: "Data loss prevention",
    title: "Data loss prevention",
    description: "Student and staff data in school systems are prime targets for cyberattacks, often due to accidental exposure. District IT teams need to manage access to this sensitive information in Google Workspace and Microsoft 365 to comply with regulations and safeguard both students and staff.",
    points: [
      "Detect anomalous events that indicate unauthorized access to data.",
      "Identify when data is being improperly emailed or shared.",
      "Automate data loss prevention to protect social security numbers, W2s, payment, health information, and more.",
      "Continuously monitor behavior in Google Workspace and Microsoft 365 and automatically mitigate data security risks.",
    ],
    image: "https://ext.same-assets.com/565782042/2412559964.svg",
  },
  {
    id: "phishing",
    shortTitle: "Phishing & malware protection",
    title: "Phishing & malware threat protection",
    description: "Phishing remains the leading method for criminals to access school accounts, with a marked increase in malware and ransomware attacks. If your district is using Google Workspace and/or Microsoft 365, criminals can access sensitive student and staff information via email, file sharing, and risky third-party apps.",
    points: [
      "Artificial Intelligence-based phishing and malware scanning for both internal & external emails, analyzing threats in the message body, attachments, and links.",
      "Automatically quarantine or delete emails and shared files containing phishing and malware links.",
      "Identify risky 3rd party applications connected to district Google and Microsoft accounts through OAuth.",
    ],
    image: "https://ext.same-assets.com/565782042/3199220775.svg",
  },
  {
    id: "account-takeover",
    shortTitle: "Prevent account takeovers",
    title: "Prevent account takeovers",
    description: "Phishing and malware attacks can lead to your accounts being hijacked. An account takeover is notoriously difficult to detect in Google Workspace and Microsoft 365, and can lead to additional cyber risks and data exposure.",
    points: [
      "Protect your districts Google Workspace and Microsoft 365 from an account takeover with advanced phishing and malware threat protection built for the cloud.",
      "Easily identify suspicious activities indicating an ongoing account takeover, such as repeated failed login attempts, logins from unfamiliar locations, and unsuccessful multifactor authentication checks.",
      "Automatically detect and remediate successful account takeovers using highly customizable policy enforcements.",
    ],
    image: "https://ext.same-assets.com/565782042/3199220775.svg",
  },
  {
    id: "student-safety",
    shortTitle: "Student safety signals",
    title: "Student safety signals",
    description: "Signals by ManagedMethods uses artificial intelligence (AI) to monitor district Google Workspace and Microsoft 365 emails, files, drives and shared drives to detect red flags in text and image content.",
    points: [
      "Seamless, 24/7/365 API integrations with district Google Workspace and Microsoft 365 accounts ensure continuous monitoring without compromising personal data privacy.",
      "Using AI algorithms, Signals identifies various safety issues such as self-harm, cyberbullying, threats, and explicit content, promptly alerting school administrators.",
      "Detailed incident reports provide comprehensive information including document ownership, contributors, text history, sharing activity, and more, enabling informed decision-making for effective intervention.",
    ],
    image: "https://ext.same-assets.com/565782042/693692977.svg",
  },
]
