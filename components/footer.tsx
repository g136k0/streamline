'use client'

import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'

import { ContactDialog } from '@/components/contact-dialog'

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl font-bold">Streamline Labs</h3>
              <p className="text-muted-foreground max-w-sm">
                Custom web apps and automations that save time, reduce costs, and help your business scale.
              </p>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:contact@streamlinelabs.com"
                  className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#solutions" className="hover:text-foreground transition-colors">Web Apps</a></li>
                <li><a href="#solutions" className="hover:text-foreground transition-colors">Dashboards</a></li>
                <li><a href="#solutions" className="hover:text-foreground transition-colors">Automations</a></li>
                <li><a href="#solutions" className="hover:text-foreground transition-colors">Internal Tools</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#process" className="hover:text-foreground transition-colors">Our Process</a></li>
                <li><a href="#cta" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#privacy" className="hover:text-foreground transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>

          {/* CTA Strip */}
          <div className="border-t border-border pt-8 mb-8">
            <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold text-lg mb-1">Ready to build something amazing?</h4>
                <p className="text-sm text-muted-foreground">
                  Let's discuss your project and create a custom solution.
                </p>
              </div>
              <ContactDialog>
                <Button className="bg-primary hover:bg-primary/90 flex-shrink-0 rounded-full">
                  Book a Call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </ContactDialog>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 Streamline Labs. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
