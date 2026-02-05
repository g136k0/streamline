'use client'

import { Zap, MessageCircle, Rocket } from 'lucide-react'

const advantages = [
  {
    icon: Zap,
    title: 'Lightning-Fast Delivery',
    stat: '2-6 Weeks',
    description: 'No months-long projects. We move fast without cutting corners. You get your solution quickly and can start seeing ROI immediately.',
  },
  {
    icon: MessageCircle,
    title: 'Clear Communication',
    stat: '100% Transparent',
    description: 'We keep you updated every step of the way. Regular check-ins, honest timelines, no hidden surprises or surprise bills.',
  },
  {
    icon: Rocket,
    title: 'Built to Scale',
    stat: 'Future-Ready',
    description: 'We don\'t just build what you need today—we build with tomorrow in mind. Your solution grows with your business.',
  },
]

export function AdvantagesSection() {
  return (
    <section id="advantages" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Why choose Streamline Labs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not your typical agency. Here's what makes us different.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            return (
              <div
                key={index}
                className="relative p-8 rounded-lg border-2 border-border bg-card hover:bg-secondary/50 transition-colors"
              >
                {/* Icon background */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full blur-xl" />

                <div className="relative">
                  <Icon className="w-10 h-10 text-primary mb-4" />

                  <h3 className="text-2xl font-bold mb-2">
                    {advantage.title}
                  </h3>

                  <div className="text-3xl font-bold text-primary mb-4">
                    {advantage.stat}
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
