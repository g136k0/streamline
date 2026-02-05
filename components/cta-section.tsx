'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'

import { ContactDialog } from '@/components/contact-dialog'

export function CTASection() {
  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5 border-t-2 border-primary/20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl sm:text-5xl font-bold">
          Ready to streamline your business?
        </h2>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Let's talk about what you need. No pressure, no commitment—just a conversation about how we can help.
        </p>

        {/* Benefits list */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center my-8">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
            <span>Free discovery call</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
            <span>Custom proposal</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
            <span>No hidden fees</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <ContactDialog>
            <Button
              size="lg"
              className="text-base px-8 h-12 rounded-full bg-primary hover:bg-primary/90 w-full sm:w-auto"
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </ContactDialog>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 h-12 rounded-full border-2 w-full sm:w-auto bg-transparent"
            onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
