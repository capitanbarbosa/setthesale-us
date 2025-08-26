import Link from "next/link";

const ServicesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gray-50">
        <h1 className="text-5xl font-bold text-blue-900">Our Services</h1>
        <p className="text-xl mt-4 max-w-3xl mx-auto text-gray-600">
          We blend into your sales ops, up to half of the cost! A step-by-step
          roadmap to success. Smarter Sales Starts with Smarter Qualification.
        </p>
        <p className="text-lg mt-4 max-w-3xl mx-auto text-gray-500">
          We combine AI automation, data, and psychology to replace the old way
          of doing lead qualification — so you can scale pipeline without
          scaling payroll.
        </p>
      </section>

      {/* Services List Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Appointment As A Service
          </h2>
          <p className="text-center text-lg max-w-2xl mx-auto text-gray-600 mb-12">
            A fully managed, AI-powered sales development rep — without the
            salary.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900">
                Multi-Channel AI Engagement
              </h3>
              <p className="mt-2 text-gray-600">
                We engage leads on every channel — so you’re first to respond.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900">
                AI Lead Qualification
              </h3>
              <p className="mt-2 text-gray-600">
                We qualify your leads 24/7, so you don’t waste time on the wrong
                ones.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900">
                Lead Scoring & Routing
              </h3>
              <p className="mt-2 text-gray-600">
                Not all leads are equal. We score and route them in real time.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900">
                CRM & Sales Stack integration
              </h3>
              <p className="mt-2 text-gray-600">
                We integrate with your existing tools — or build your flow from
                scratch.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900">
                Reporting & Optimization
              </h3>
              <p className="mt-2 text-gray-600">
                We don’t just set the sale — we track, learn, and scale it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-2xl font-bold text-blue-900">Stay Relevant</h3>
            <p className="mt-4 text-gray-600">
              Increase sales. Automate your lead qualification to boost
              visibility, attract ready-to-buy customers, and close more deals —
              without hiring more sales reps.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-900">Count on us</h3>
            <p className="mt-4 text-gray-600">
              Your tailored AI. From setup to scale, we tailor our AI systems to
              your goals — and we’re here with hands-on support every step of
              the way.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-900">Try, try again</h3>
            <p className="mt-4 text-gray-600">
              Best practices. Growth isn’t luck — it’s engineered. Together,
              we’ll refine your lead process, install what scales, and turn your
              traffic into appointments that close.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-blue-950 text-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            We have great answers​ - Ask us anything
          </h2>
          <div className="space-y-4">
            <details className="bg-blue-900 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                What exactly does Set the Sale do?
              </summary>
              <p className="mt-2 text-gray-300">
                Set the Sale provides an AI-powered lead qualification service
                that engages leads across multiple channels, qualifies them
                24/7, and books appointments directly into your sales team's
                calendar, effectively acting as an automated Sales Development
                Rep.
              </p>
            </details>
            <details className="bg-blue-900 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                How is this different from a chatbot or a regular lead form?
              </summary>
              <p className="mt-2 text-gray-300">
                Unlike simple chatbots, our system uses advanced AI to hold
                intelligent, human-like conversations to deeply qualify leads
                based on your criteria. It's a proactive, multi-channel
                engagement system, not a passive form.
              </p>
            </details>
            <details className="bg-blue-900 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                What kind of results can I expect?
              </summary>
              <p className="mt-2 text-gray-300">
                Clients typically see a significant increase in qualified
                appointments (up to 60%), a 70% reduction in time spent on
                manual lead chasing, and a much faster lead response time, all
                while saving on the overhead of hiring additional staff.
              </p>
            </details>
            <details className="bg-blue-900 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                Will it work for my industry?
              </summary>
              <p className="mt-2 text-gray-300">
                Our system is adaptable and has proven successful across various
                industries, including SaaS, Real Estate, and Coaching. We tailor
                the qualification criteria and conversation flows to fit your
                specific business needs.
              </p>
            </details>
            <details className="bg-blue-900 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                Do I need to know how to use AI or change my tech stack?
              </summary>
              <p className="mt-2 text-gray-300">
                Not at all. We handle the entire setup. Our service is
                plug-and-play and integrates seamlessly with your existing CRM
                and sales tools. If you don't have a setup, we can even help
                build one for you.
              </p>
            </details>
            <details className="bg-blue-900 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                How fast can we launch?
              </summary>
              <p className="mt-2 text-gray-300">
                Launch times can be very quick, often within a few days to a
                week, depending on the complexity of your sales process and
                integration needs. Our goal is to get you booking appointments
                as fast as possible.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20 px-4 bg-white">
        <h2 className="text-4xl font-bold max-w-2xl mx-auto text-blue-900">
          Imagine Your Calendar Full of Sales-Ready Leads...
        </h2>
        <p className="text-xl mt-4 text-gray-600">
          Let AI do the qualification. You do the closing.
        </p>
        <Link href="https://calendly.com/pachocripto/initial-consultation-companies" target="_blank" rel="noopener noreferrer">
          <button className="mt-8 bg-gradient-to-r from-red-400 to-pink-500 text-white font-bold py-3 px-8 rounded-lg text-lg">
            Book a Free Demo Call
          </button>
        </Link>
      </section>
    </div>
  );
};

export default ServicesPage;
