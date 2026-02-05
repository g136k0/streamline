'use client'

import { Card } from '@/components/ui/card'
import { Zap, Users, AlertCircle, LayoutDashboard } from 'lucide-react'

const problems = [
  {
    icon: Zap,
    title: 'Stop wasting time on spreadsheets',
    description: 'Replace error-prone manual data entry with automated workflows that actually work.',
  },
  {
    icon: AlertCircle,
    title: 'Manual processes slowing you down?',
    description: 'Automate repetitive tasks so your team focuses on high-value work.',
  },
  {
    icon: Users,
    title: 'Your tools don\'t talk to each other?',
    description: 'Seamlessly integrate your existing systems into one unified platform.',
  },
  {
    icon: LayoutDashboard,
    title: 'Need a client portal or dashboard?',
    description: 'Custom-built interfaces that make data accessible and actionable.',
  },
]

export function ProblemsSection() {
  return (
    <section id="problems" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Sound familiar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These are the exact problems we solve for businesses like yours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <Card
                key={index}
                className="p-6 sm:p-8 border-2 border-border bg-card hover:border-primary/50 transition-colors"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Icon className="w-8 h-8 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
