import Image from "next/image";
import Link from "next/link";

export default function Home5() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative text-center py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Add <span className="text-orange-500">$400k+ Annually</span> with
            <br />
            120-day AI Deployment
          </h1>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            Go from zero to fully integrated AI that transforms your entire workflow within 4 months
          </p>

          {/* Video Placeholder */}
          <div className="mt-8 mb-6 max-w-2xl mx-auto">
            <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-white text-sm font-semibold">
                Become an AI First Company
              </div>
            </div>
          </div>

          <Link
            href="https://calendly.com/setthesale/strategy-call"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Now
            </button>
          </Link>
        </div>
      </section>

      {/* Navigation Bar */}
      <section className="bg-black py-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-white text-xs md:text-sm">
            <span className="font-semibold">Who we've worked with across sharpshooting projects</span>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <span className="hover:text-orange-500 transition-colors cursor-pointer">Cyril AI</span>
              <span className="hover:text-orange-500 transition-colors cursor-pointer">RISK ACADEMY</span>
              <span className="hover:text-orange-500 transition-colors cursor-pointer">Sierra Productions</span>
              <span className="hover:text-orange-500 transition-colors cursor-pointer">Dropside Media</span>
              <span className="hover:text-orange-500 transition-colors cursor-pointer">Proposal</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Forward-Thinking Teams */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Trusted by Forward-Thinking Teams
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Agencies or high-net-worth business, forward-affiliates, and others who prioritize growth through intelligent automation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-orange-500 text-5xl font-bold mb-2">78%</div>
              <p className="text-gray-700 font-semibold mb-1">retention consistently</p>
              <p className="text-gray-500 text-sm">We've helped our clients maintain contracts, long-term through higher value added</p>
            </div>
            <div className="text-center">
              <div className="text-orange-500 text-5xl font-bold mb-2">4-months</div>
              <p className="text-gray-700 font-semibold mb-1">to full roll out</p>
              <p className="text-gray-500 text-sm">The complexity isn't your burden, we learn your business then structure AI to optimize accordingly</p>
            </div>
            <div className="text-center">
              <div className="text-orange-500 text-5xl font-bold mb-2">$400K+</div>
              <p className="text-gray-700 font-semibold mb-1">in new revenue captured</p>
              <p className="text-gray-500 text-sm">Clients typically add this much, if not more, within the first year of their AI infrastructure</p>
            </div>
            <div className="text-center">
              <div className="text-orange-500 text-5xl font-bold mb-2">100%</div>
              <p className="text-gray-700 font-semibold mb-1">done-for-you architecture</p>
              <p className="text-gray-500 text-sm">We don't consult or suggest, we dive-in, build the systems and ensure team adoption</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial 1 */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-gray-700 text-lg mb-6 italic">
                  "We closed a <span className="font-bold text-orange-500">six-figure deal</span> because our AI agent sounded like a real American guy. My previous AI demo felt robotic, with kind. My closers were burnt out from angry callers spamming 9 – they wanted to speak to a person, not a bot. Now our AI agent handles it seamlessly. There's no angry wasters, and qualifies serious leads flawlessly."
                </p>
                <div>
                  <p className="font-bold text-gray-900">Jason Wardrop</p>
                  <p className="text-gray-600 text-sm">Founder, AI-agent platform</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white text-sm font-semibold">
                  Jason Wardrop
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial 2 */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white text-sm font-semibold">
                  Alex Solomon
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-700 text-lg mb-6 italic">
                  "Nick and his team delivered a <span className="font-bold">content automation system</span> in just two weeks before our deadline. Our partners loved it; the entire website - converted it into a knowledge base. Your AI now answers customer questions using social posts, articles, and testimonials. <span className="font-bold">Simple, fast, flawless.</span>"
                </p>
                <div>
                  <p className="font-bold text-gray-900">Alex Solomon</p>
                  <p className="text-gray-600 text-sm">Marketing Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps - Identify, Educate, Develop */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">1</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Identify</h3>
              <p className="text-gray-600">
                We discover the highest-impact opportunities within your workflow and pinpoint exactly where AI can save time, reduce costs, and boost output
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">2</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Educate</h3>
              <p className="text-gray-600">
                We onboard you team with our AI tools, so they know how to use it correctly. Full ongoing support - no complexity left behind
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">3</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Develop</h3>
              <p className="text-gray-600">
                We design and build custom AI solutions that integrate with your systems and supercharge performance long-term
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions We Build */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Solutions We Build
          </h2>
          <p className="text-center text-gray-600 mb-12">Core Services</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Voice Agents</h3>
              <p className="text-gray-600 text-sm">
                Human-like AI voice bots for outbound and inbound calls
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Content Automation</h3>
              <p className="text-gray-600 text-sm">
                Automated research, writing, and content calendar management
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Automations</h3>
              <p className="text-gray-600 text-sm">
                Zapier, Make.com, or custom code to connect your entire stack
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Education & training</h3>
              <p className="text-gray-600 text-sm">
                Onboarding, consulting & prompt-level instruction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Proven Process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Our Proven Process
          </h2>
          <p className="text-center text-gray-600 mb-12">
            A systematic approach to turning AI into a 24/7 business accelerator for you
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Phase 1</h3>
              <h4 className="text-lg font-semibold text-orange-500 mb-3">Discovery & Scoping</h4>
              <p className="text-gray-600 text-sm mb-3">1-2 weeks</p>
              <p className="text-gray-600 text-sm">
                We map your operations and identify the highest-impact AI opportunities
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Phase 2</h3>
              <h4 className="text-lg font-semibold text-orange-500 mb-3">Development & Integration</h4>
              <p className="text-gray-600 text-sm mb-3">6-8 weeks</p>
              <p className="text-gray-600 text-sm">
                We build, test, and wire your custom AI tools directly into your workflow
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Phase 3</h3>
              <h4 className="text-lg font-semibold text-orange-500 mb-3">Training & Rollout</h4>
              <p className="text-gray-600 text-sm mb-3">2-3 weeks</p>
              <p className="text-gray-600 text-sm">
                Your team learns how to use their new systems. We provide documentation and live training
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Phase 4</h3>
              <h4 className="text-lg font-semibold text-orange-500 mb-3">Optimization & Support</h4>
              <p className="text-gray-600 text-sm mb-3">Ongoing</p>
              <p className="text-gray-600 text-sm">
                We fine-tune, add new agents or automations, and scale with your growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Join forward-thinking companies already scaling with AI. Schedule your 20-minute strategy call today — no strings attached
          </p>
          <Link
            href="https://calendly.com/setthesale/strategy-call"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-10 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Book a Free Call
            </button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            FAQ's
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Get the answers to the most frequently asked questions
          </p>

          <div className="space-y-4">
            <details className="bg-white p-6 rounded-lg shadow-sm group">
              <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                What if we need our AI before your 120 days is up? Is that possible?
                <span className="text-orange-500 text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Yes! We can often accelerate timelines based on your specific needs. During our discovery call, we'll discuss your urgency and adjust the roadmap accordingly.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm group">
              <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                How long does the entire process really take - start to finish with AI in my system?
                <span className="text-orange-500 text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Typically 120 days from kickoff to full deployment. This includes discovery, development, integration, testing, training, and optimization.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm group">
              <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                Will I have control over the process? Will we work together - or are you just going to build what YOU think is right?
                <span className="text-orange-500 text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-gray-600">
                You'll be involved every step of the way. We collaborate closely and nothing gets deployed without your approval. This is your system, built around your needs.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm group">
              <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                Can this make our employees irrelevant? How do we handle the "people" aspect of AI?
                <span className="text-orange-500 text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-gray-600">
                AI augments your team, it doesn't replace them. We help your people focus on high-value work while AI handles repetitive tasks. We also provide change management guidance.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm group">
              <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                What if we're not technical people? How will we know all this stuff is working?
                <span className="text-orange-500 text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-gray-600">
                That's exactly why we exist. We build everything for you and train your team in plain English. No technical expertise required on your end.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm group">
              <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                Do you just AI like ChatGPT or is this all custom AI?
                <span className="text-orange-500 text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-gray-600">
                We use the best AI models (including ChatGPT's underlying tech), but customize and fine-tune them specifically for your business, your data, and your workflows.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm group">
              <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                Where is this AI deployed? Is there a limit on how I can deploy it (UNLIMITED)?
                <span className="text-orange-500 text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-gray-600">
                The AI is deployed in your existing systems and tools. There are no arbitrary limits - we scale the solution to match your business needs.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm group">
              <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                Why are AI tools of this type supposed to be expensive?
                <span className="text-orange-500 text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Custom AI solutions require deep technical expertise, significant development time, and ongoing optimization. However, the ROI typically far exceeds the investment within the first year.
              </p>
            </details>
          </div>

          <div className="text-center mt-12">
            <Link
              href="https://calendly.com/setthesale/strategy-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Featured Content
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Explore how we've helped AI-first companies hit their stride with AI
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative aspect-video">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                  <div className="text-center text-white">
                    <div className="text-6xl font-bold mb-2">Become an AI</div>
                    <div className="text-6xl font-bold">First Company</div>
                    <div className="mt-4 text-2xl">In <span className="text-orange-500">Under 4 Months</span></div>
                    <div className="mt-6">
                      <span className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold">
                        $400k+ Today
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">
                  <span className="font-bold">Watch this</span> video + become an AI-first company in under 4 months. Get the full AI implementation guide.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative aspect-video">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                  <div className="text-center text-white">
                    <div className="text-6xl font-bold mb-2">Become an AI</div>
                    <div className="text-6xl font-bold">First Company</div>
                    <div className="mt-4 text-2xl">In <span className="text-orange-500">Under 4 Months</span></div>
                    <div className="mt-6">
                      <span className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold">
                        $400k+ Today
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">
                  <span className="font-bold">30 page Ebook:</span> Get the complete roadmap to becoming an AI-first organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to add $400k+ to your bottom line?
          </h3>
          <p className="mb-6 text-lg">
            Book your strategy call now and discover how AI can transform your business in 120 days
          </p>
          <Link
            href="https://calendly.com/setthesale/strategy-call"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-orange-500 hover:bg-gray-100 font-semibold py-3 px-10 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Schedule Your Free Call
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}



