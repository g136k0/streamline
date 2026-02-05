'use client'

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              About Streamline Labs
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're a small, focused team of experienced developers who genuinely care about building great software. We started Streamline Labs because we saw businesses losing productivity to outdated tools and manual processes.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Our approach</h3>
            <p className="text-muted-foreground leading-relaxed">
              We don't believe in one-size-fits-all solutions. Every business is unique, so we build custom tools tailored to your exact workflow. We communicate clearly, move fast, and focus on results—not on billing more hours or adding unnecessary features.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">What we value</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">→</span>
                <span><strong>Speed & Quality:</strong> Fast delivery doesn't mean cutting corners. We build things right, the first time.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">→</span>
                <span><strong>Honesty:</strong> We tell you what's realistic, what's not, and what it will actually cost.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">→</span>
                <span><strong>Partnership:</strong> We're not vendors—we're partners invested in your success.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">→</span>
                <span><strong>Learning:</strong> Every project teaches us something new, and we apply that to make your solution better.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 bg-card border-2 border-primary/20 rounded-lg">
            <p className="text-center text-lg">
              <span className="font-semibold text-foreground">Ready to work with us?</span>
              <br />
              <span className="text-muted-foreground">Let's talk about your project—no pressure, just conversation.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
