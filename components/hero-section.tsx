'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { ContactDialog } from '@/components/contact-dialog'

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            We turn manual processes into{' '}
            <span className="text-primary">powerful web apps</span> — fast.
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Dashboards, automations, and tools that save you time and headaches.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <ContactDialog>
            <Button
              size="lg"
              className="text-base px-8 h-12 rounded-full bg-primary hover:bg-primary/90"
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </ContactDialog>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 h-12 rounded-full border-2 bg-transparent"
            onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See Our Process
          </Button>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-6 pt-12 border-t border-border">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">2-6</div>
            <p className="text-sm text-muted-foreground mt-1">Week Delivery</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">100%</div>
            <p className="text-sm text-muted-foreground mt-1">Custom Built</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">24/7</div>
            <p className="text-sm text-muted-foreground mt-1">Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
