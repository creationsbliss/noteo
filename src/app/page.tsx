import CallToAction from "@/components/call-to-action";
import Features from "@/components/features";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <HeroHeader />
      <HeroSection />
      <Features />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <FooterSection />
    </div>
  );
}
