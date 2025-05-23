"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu } from "lucide-react"

// For now, this is a static placeholder for the logo
const LOGO_URL = "/logo.svg"

const productsData = [
  {
    title: "Cloud Monitor",
    description: "Google Workspace & Microsoft 365 cybersecurity and student safety made easy and affordable.",
    image: "https://ext.same-assets.com/2657846677/2310169025.webp",
    href: "/products/cloud-monitor",
    howItWorks: "/how-it-works",
  },
  {
    title: "Content Filter",
    description: "E-rate CIPA compliance and online safety anywhere, anytime for on-the-go students made easy and affordable.",
    image: "https://ext.same-assets.com/2657846677/895057261.webp",
    href: "/products/content-filter",
    howItWorks: "/how-it-works-content-filter",
  },
  {
    title: "Classroom Manager",
    description: "Online classroom management, instruction, and learning made easy for teachers and students.",
    image: "https://ext.same-assets.com/2657846677/3739736558.webp",
    href: "/products/classroom-manager",
    howItWorks: "/products/classroom-manager/#how-it-works",
  },
]

const supportedAppsData = [
  {
    title: "Google",
    icon: "https://ext.same-assets.com/2657846677/3156097177.svg",
    href: "/products/google-g-suite/",
  },
  {
    title: "Microsoft 365",
    icon: "https://ext.same-assets.com/2657846677/1691123077.svg",
    href: "/products/microsoft-office-365/",
  },
  {
    title: "SaaS",
    icon: "https://ext.same-assets.com/2657846677/1616628861.svg",
    href: "/products/saas-security/",
  },
  {
    title: "Browser",
    icon: "https://ext.same-assets.com/2657846677/1649443032.svg",
    href: "/products/browser-web-filter/",
  },
]

const useCasesData = [
  {
    title: "Cyber Safety & Security",
    icon: "https://ext.same-assets.com/2657846677/172800044.svg",
    href: "/use-cases/cloud-security-for-education/",
  },
  {
    title: "Data Security",
    icon: "https://ext.same-assets.com/2657846677/2837170809.svg",
    href: "/use-cases/data-security/",
  },
  {
    title: "Phishing & Malware Protection",
    icon: "https://ext.same-assets.com/2657846677/1405559225.svg",
    href: "/use-cases/phishing-malware-protection/",
  },
  {
    title: "Account Takeover Prevention",
    icon: "https://ext.same-assets.com/2657846677/913691328.svg",
    href: "/use-cases/account-takeover-prevention/",
  },
  {
    title: "Data Loss Prevention",
    icon: "https://ext.same-assets.com/2657846677/3276625088.svg",
    href: "/use-cases/data-loss-prevention/",
  },
  {
    title: "Student Self-Harm Detection",
    icon: "https://ext.same-assets.com/2657846677/636087621.svg",
    href: "/use-cases/student-self-harm-detection/",
  },
  {
    title: "Cyberbullying Monitoring",
    icon: "https://ext.same-assets.com/2657846677/446538527.svg",
    href: "/use-cases/cyberbullying-monitoring/",
  },
]

const resourcesData = [
  {
    title: "Blog",
    icon: "https://ext.same-assets.com/2657846677/4065986367.svg",
    href: "/blog/",
  },
  {
    title: "Events",
    icon: "https://ext.same-assets.com/2657846677/4172125030.svg",
    href: "/blog/events-tag/upcoming/?orderby=date_old",
  },
  {
    title: "Success Kits",
    icon: "https://ext.same-assets.com/2657846677/472825213.svg",
    href: "/success-kits/",
  },
]

const companyData = [
  {
    title: "In The News",
    icon: "https://ext.same-assets.com/2657846677/4065986367.svg",
    href: "/blog/category/news/",
  },
  {
    title: "K-12 Technology Resellers",
    icon: "https://ext.same-assets.com/2657846677/3069606655.svg",
    href: "/value-added-resellers/",
  },
  {
    title: "Contract Vehicles",
    icon: "https://ext.same-assets.com/2657846677/561083217.svg",
    href: "/purchasing/",
  },
]

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom flex h-16 items-center justify-between py-4">
        <div className="flex gap-6 md:gap-10">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-32 h-8 relative">
              <img src="/logo.svg" alt="ManagedMethods Logo" className="w-full h-auto" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[800px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[800px] lg:grid-cols-3">
                      {productsData.map((product) => (
                        <li key={product.title} className="row-span-3">
                          <Link
                            href={product.href}
                            className="flex h-full w-full flex-col justify-between rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md hover:bg-muted"
                          >
                            <div className="mb-2 h-[156px] relative overflow-hidden rounded-md">
                              <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="mb-2 mt-4 text-lg font-medium">
                              {product.title}
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              {product.description}
                            </p>
                            <div className="flex mt-4">
                              <Link
                                href={product.href}
                                className="mr-4 text-sm text-secondary font-medium"
                              >
                                View Product
                              </Link>
                              <Link
                                href={product.howItWorks}
                                className="text-sm text-secondary font-medium flex items-center gap-1"
                              >
                                How it Works
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </Link>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Supported Apps</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      {supportedAppsData.map((app) => (
                        <li key={app.title}>
                          <Link
                            href={app.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              <img src={app.icon} alt="" className="w-5 h-5" />
                              <div className="text-sm font-medium leading-none">{app.title}</div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Use Cases</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-2">
                      {useCasesData.map((useCase) => (
                        <li key={useCase.title}>
                          <Link
                            href={useCase.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              <img src={useCase.icon} alt="" className="w-5 h-5" />
                              <div className="text-sm font-medium leading-none">{useCase.title}</div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blog/category/case-studies/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Customer Stories
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      {resourcesData.map((resource) => (
                        <li key={resource.title}>
                          <Link
                            href={resource.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              <img src={resource.icon} alt="" className="w-5 h-5" />
                              <div className="text-sm font-medium leading-none">{resource.title}</div>
                            </div>
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link
                          href="/resources/"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">More Resources</div>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      {companyData.map((item) => (
                        <li key={item.title}>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              <img src={item.icon} alt="" className="w-5 h-5" />
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/support/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Support
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact/" className="text-sm font-medium">
            Contact
          </Link>
          <Button asChild variant="secondary" className="rounded-full bg-secondary text-white hover:bg-secondary/90">
            <Link href="/free-trial/">Free Trial</Link>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="pr-0">
            <div className="px-7">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <span className="font-semibold">ManagedMethods</span>
              </Link>
            </div>
            <nav className="flex flex-col gap-4 px-7 py-6">
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium">Products</div>
                {productsData.map((product) => (
                  <Link
                    key={product.title}
                    href={product.href}
                    className="text-sm text-muted-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {product.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium">Supported Apps</div>
                {supportedAppsData.map((app) => (
                  <Link
                    key={app.title}
                    href={app.href}
                    className="text-sm text-muted-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {app.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium">Use Cases</div>
                {useCasesData.map((useCase) => (
                  <Link
                    key={useCase.title}
                    href={useCase.href}
                    className="text-sm text-muted-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {useCase.title}
                  </Link>
                ))}
              </div>
              <Link
                href="/blog/category/case-studies/"
                className="text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Customer Stories
              </Link>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium">Resources</div>
                {resourcesData.map((resource) => (
                  <Link
                    key={resource.title}
                    href={resource.href}
                    className="text-sm text-muted-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {resource.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium">Company</div>
                {companyData.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-sm text-muted-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <Link
                href="/support/"
                className="text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Support
              </Link>
              <div className="flex flex-col gap-3 pt-4">
                <Link
                  href="/contact/"
                  className="text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Button asChild className="rounded-full bg-secondary text-white hover:bg-secondary/90">
                  <Link href="/free-trial/" onClick={() => setIsOpen(false)}>
                    Free Trial
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
