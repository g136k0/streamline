import { HeroSection } from '@/components/hero-section'
import { ProblemsSection } from '@/components/problems-section'
import { SolutionsSection } from '@/components/solutions-section'
import { ProcessSection } from '@/components/process-section'
import { AdvantagesSection } from '@/components/advantages-section'
import { CTASection } from '@/components/cta-section'
import { AboutSection } from '@/components/about-section'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <ProblemsSection />
      <SolutionsSection />
      <ProcessSection />
      <AdvantagesSection />
      <CTASection />
      <AboutSection />
      <Footer />
    </main>
  )
}
