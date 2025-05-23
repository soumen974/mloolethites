import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { AboutSection } from "@/components/home/about";
import { ProductsSection } from "@/components/home/products";
import { HowItWorksSection } from "@/components/home/how-it-works";
import { FeaturesSection } from "@/components/home/features";
import { TestimonialsSection } from "@/components/home/testimonials";
import { CustomerLogosSection } from "@/components/home/customer-logos";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <AboutSection />
      <ProductsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CustomerLogosSection />
      <Footer />
    </main>
  );
}
