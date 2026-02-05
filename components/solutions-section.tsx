'use client'

import { Card } from '@/components/ui/card'
import { BarChart3, Zap, Cog } from 'lucide-react'

const solutions = [
  {
    icon: BarChart3,
    title: 'Web Apps & Dashboards',
    description: 'Custom-built applications that give you real-time visibility into your business. From inventory management to financial reporting.',
    features: ['Real-time data', 'Custom workflows', 'Mobile-responsive'],
  },
  {
    icon: Zap,
    title: 'Automations',
    description: 'Set it and forget it. We connect your tools and eliminate manual work—whether it\'s data syncing, notifications, or report generation.',
    features: ['API integrations', 'Smart triggers', 'Error handling'],
  },
  {
    icon: Cog,
    title: 'Internal Business Tools',
    description: 'Build internal platforms that streamline how your team works—CRM systems, project trackers, resource planners, and more.',
    features: ['Team collaboration', 'Permissions & security', 'Scalable design'],
  },
]

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            What we build
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything we create is fast, intuitive, and designed to make your life easier.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <Card
                key={index}
                className="p-8 border-2 border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
