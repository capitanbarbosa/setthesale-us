import Image from "next/image";
import Link from "next/link";

// It's good practice to define icons as components for reusability
const FeatureIcon = ({ d }) => (
  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d}></path>
  </svg>
);

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20 px-4 max-w-7xl mx-auto">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-gray-900">
              Turn Leads Into Hot Sales Conversations — Automatically
            </h1>
            <p className="text-xl mt-4 max-w-3xl text-gray-600">
              Our AI-powered lead qualification books you more appointments —
              without adding headcount or wasting time on unqualified leads.
            </p>
            <Link href="/book-a-call">
              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                Book Your Free Growth Audit
              </button>
            </Link>
          </div>
          <div className="relative">
            <Image 
              src="/images/royalty-free/corinne-kutz-tMI2_-r5Nfo-unsplash.jpg" 
              alt="Modern office workspace with technology" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <p className="text-gray-600 mb-8">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Image src="/images/company-logo-1.svg" alt="Company Logo 1" width={120} height={40} className="opacity-70" />
            <Image src="/images/company-logo-2.svg" alt="Company Logo 2" width={120} height={40} className="opacity-70" />
            <Image src="/images/company-logo-3.svg" alt="Company Logo 3" width={120} height={40} className="opacity-70" />
            <Image src="/images/company-logo-4.svg" alt="Company Logo 4" width={120} height={40} className="opacity-70" />
            <Image src="/images/company-logo-5.svg" alt="Company Logo 5" width={120} height={40} className="opacity-70" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 text-blue-600">WHY SET THE SALE?</h2>
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">Stop Your Pipeline from Bleeding Money</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="mb-4"><FeatureIcon d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zM5 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm14 0c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" /></div>
              <h4 className="text-2xl font-bold mb-2 text-gray-900">Focus on Qualified Leads</h4>
              <p className="text-gray-600">Stop wasting 60% of your team's time. Our AI filters out the noise, so your reps only speak to prospects ready to buy.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="mb-4"><FeatureIcon d="M13 10V3L4 14h7v7l9-11h-7z" /></div>
              <h4 className="text-2xl font-bold mb-2 text-gray-900">Instant Response Times</h4>
              <p className="text-gray-600">Engage leads in seconds, not hours. Our system ensures you're the first to respond, increasing qualified appointments by up to 60%.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="mb-4"><FeatureIcon d="M3 6l3 6h12l3-6H3zm16 12H5a2 2 0 01-2-2V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2z" /></div>
              <h4 className="text-2xl font-bold mb-2 text-gray-900">Reduce Overhead Costs</h4>
              <p className="text-gray-600">Achieve better results without expanding your team. Save up to $70k per year in salaries and overhead while boosting performance.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="mb-4"><FeatureIcon d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></div>
              <h4 className="text-2xl font-bold mb-2 text-gray-900">Seamless Integration</h4>
              <p className="text-gray-600">Our system plugs directly into your existing CRM and sales tools, creating a frictionless workflow for your entire team.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="mb-4"><FeatureIcon d="M4 7v10c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V7" /></div>
              <h4 className="text-2xl font-bold mb-2 text-gray-900">Data-Driven Insights</h4>
              <p className="text-gray-600">Get detailed analytics on lead engagement, qualification rates, and campaign performance to continuously optimize your sales funnel.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="mb-4"><FeatureIcon d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></div>
              <h4 className="text-2xl font-bold mb-2 text-gray-900">Always-On Qualification</h4>
              <p className="text-gray-600">Our AI works 24/7 to qualify leads, ensuring no opportunity is missed, regardless of time zones or business hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Hear What Our Users Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <p className="text-gray-600 mb-4">"We saw a 60% increase in qualified appointments within the first month. Set The Sale is a game-changer for our sales pipeline."</p>
              <p className="font-bold text-gray-900">- Santiago</p>
              <p className="text-sm text-blue-600">Head of Sales - Tech Corp</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <p className="text-gray-600 mb-4">"We managed to beat our quarterly quota by 15% for 3 quarters in a row with Set The Sale."</p>
              <p className="font-bold text-gray-900">- Ryan</p>
              <p className="text-sm text-blue-600">Sales Manager - SaaS</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <p className="text-gray-600 mb-4">"My appointment setting process used to be a pain. Now it's just easy. Our reps are happier and more productive."</p>
              <p className="font-bold text-gray-900">- Lamar</p>
              <p className="text-sm text-blue-600">CEO - Coaching</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-r from-blue-50 to-gray-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900">Ready to Stop Wasting Time and Start Closing Deals?</h2>
          <p className="text-xl mt-4 text-gray-600">Book a free growth audit and discover how our AI-powered qualification can fill your pipeline with sales-ready leads.</p>
          <Link href="/book-a-call">
            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              Book Your Free Growth Audit
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}