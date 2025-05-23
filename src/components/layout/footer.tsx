"use client"

import Link from "next/link"

interface FooterSectionProps {
  title: string
  links: {
    label: string
    href: string
  }[]
}

const footerSections: FooterSectionProps[] = [
  {
    title: "Products",
    links: [
      { label: "Cloud Monitor", href: "/products/cloud-monitor/" },
      { label: "Content Filter", href: "/products/content-filter/" },
      { label: "Classroom Manager", href: "/products/classroom-manager/" },
    ],
  },
  {
    title: "Supported Apps",
    links: [
      { label: "Google", href: "/products/google-g-suite/" },
      { label: "Microsoft 365", href: "/products/microsoft-office-365/" },
      { label: "SaaS", href: "/products/saas-security/" },
      { label: "Browser", href: "/products/browser-web-filter/" },
    ],
  },
  {
    title: "Use Cases",
    links: [
      { label: "Cyber Safety & Security", href: "/use-cases/cloud-security-for-education/" },
      { label: "Data Security", href: "/use-cases/data-security/" },
      { label: "Phishing & Malware Protection", href: "/use-cases/phishing-malware-protection/" },
      { label: "Account Takeover Prevention", href: "/use-cases/account-takeover-prevention/" },
      { label: "Data Loss Prevention", href: "/use-cases/data-loss-prevention/" },
      { label: "Student Self-Harm Detection", href: "/use-cases/student-self-harm-detection/" },
      { label: "Cyberbullying Monitoring", href: "/use-cases/cyberbullying-monitoring/" },
    ],
  },
  {
    title: "Customer Stories",
    links: [
      { label: "Case Studies", href: "/blog/category/case-studies/" },
      { label: "Testimonials", href: "/testimonials/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog/" },
      { label: "Events", href: "/blog/events-tag/upcoming/?orderby=date_old" },
      { label: "Success Kits", href: "/success-kits/" },
      { label: "Resources", href: "/resources/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/company/" },
      { label: "In The News", href: "/blog/category/news/" },
      { label: "K-12 Technology Resellers", href: "/value-added-resellers/" },
      { label: "Contract Vehicles", href: "/purchasing/" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/support/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
]

const FooterSection = ({ title, links }: FooterSectionProps) => {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="w-full border-t bg-card py-12 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {footerSections.map((section) => (
            <FooterSection key={section.title} {...section} />
          ))}
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.svg" alt="ManagedMethods Logo" className="w-32 h-auto" />
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              ManagedMethods provides easy, affordable cybersecurity and student safety monitoring for technology leaders who need to secure online learning on a tight budget.
            </p>
          </div>

          <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} ManagedMethods Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy/" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service/" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
