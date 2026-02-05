'use client'

import { Card } from '@/components/ui/card'
import { MessageSquare, Zap, Rocket, HeartHandshake } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Discovery Call',
    description: 'We talk about your business, challenges, and vision. No commitment—just a conversation about what\'s possible.',
    duration: 'Week 1',
  },
  {
    icon: Zap,
    number: '02',
    title: 'Custom Quote & Plan',
    description: 'Based on what we learn, we create a detailed proposal with timeline, features, and price. Clear and transparent.',
    duration: 'Week 1-2',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Build & Delivery',
    description: 'We build your solution with regular check-ins. You\'ll see progress—we keep you in the loop every step of the way.',
    duration: 'Week 2-6',
  },
  {
    icon: HeartHandshake,
    number: '04',
    title: 'Support & Next Steps',
    description: 'Post-launch support to make sure everything runs smoothly. We\'re here if you need tweaks or want to add features.',
    duration: 'Ongoing',
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process gets your solution built in 2–6 weeks. Here's what to expect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-6 h-1 bg-gradient-to-r from-primary to-transparent" />
                )}

                <Card className="p-6 sm:p-8 border-2 border-border bg-card h-full flex flex-col">
                  {/* Step number */}
                  <div className="text-4xl font-bold text-primary/20 mb-2">
                    {step.number}
                  </div>

                  <Icon className="w-8 h-8 text-primary mb-4" />

                  <h3 className="text-xl font-bold mb-2">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground text-sm flex-grow">
                    {step.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide">
                      {step.duration}
                    </p>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Trust note */}
        <div className="mt-12 p-8 bg-card border-2 border-primary/20 rounded-lg text-center">
          <p className="text-muted-foreground">
            💡 <span className="font-semibold text-foreground">Clear communication and transparency</span> are at the heart of everything we do. No surprises, no delays—just solid work and honest conversations.
          </p>
        </div>
      </div>
    </section>
  )
}
