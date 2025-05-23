import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProductsSection } from "@/components/home/products"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Banner */}
      <section className="bg-background py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-semibold mb-6">Internet Safety for Students</h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8">
              Our cybersecurity and student safety solutions are designed specifically for K-12 schools
              and protect Google Workspace, Microsoft 365, web browsing, and app risks.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/schedule-a-demo/">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our cybersecurity products</h2>
            <p className="text-xl text-muted-foreground">Simplifying cybersecurity and safety for K-12 technology teams</p>
          </div>

          <ProductsSection />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Automate and protect with precision</h2>
            <p className="text-xl text-muted-foreground">Your problems, our solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">{solution.title}</h3>
                <p className="text-muted-foreground mb-4">{solution.description}</p>

                <Link
                  href={solution.videoLink}
                  className="flex items-center text-secondary hover:text-secondary/80"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary/10 mr-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3L19 12L5 21V3Z" fill="currentColor" />
                    </svg>
                  </div>
                  <span>Watch Video</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-primary">5000+</h3>
              <p className="text-muted-foreground">Schools served</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-primary">10M+</h3>
              <p className="text-muted-foreground">Accounts secured</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-primary">5M+</h3>
              <p className="text-muted-foreground">Students protected</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-primary">99%</h3>
              <p className="text-muted-foreground">Customers satisfied</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

const solutions = [
  {
    title: "Automate Google/Microsoft Security & Safety",
    description: "Automate and optimize your Google Workspace and Microsoft 365 security protocols.",
    videoLink: "https://www.youtube.com/watch?v=XK6sdheWNms",
  },
  {
    title: "Data Loss Prevention",
    description: "Protect sensitive information with automated detection and response to unauthorized access and data exposures.",
    videoLink: "https://www.youtube.com/watch?v=DiIYRNuXXKU",
  },
  {
    title: "Control FERPA Violations",
    description: "Ensure compliance with FERPA by monitoring and managing access to student information and preventing data breaches.",
    videoLink: "https://www.youtube.com/watch?v=LCvNestRRmY",
  },
  {
    title: "Manage 3rd Party Apps",
    description: "Control and monitor third-party app usage to secure your organization's data and prevent unauthorized access.",
    videoLink: "https://www.youtube.com/watch?v=_831k4-IN2Y",
  },
  {
    title: "Control Compromised Accounts",
    description: "Detect and mitigate compromised accounts, securing access and preventing unauthorized data breaches.",
    videoLink: "https://www.youtube.com/watch?v=K0_NzXnYReE",
  },
  {
    title: "Find & Delete Specific Emails",
    description: "Easily locate and delete specific emails to comply with policies and remove sensitive or harmful content.",
    videoLink: "https://www.youtube.com/watch?v=e379WEDMOI4",
  },
]
