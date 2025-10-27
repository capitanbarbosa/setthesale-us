import Image from "next/image";
import Link from "next/link";

// Icon component for features
const FeatureIcon = ({ d, className }) => (
  <div className={`bg-blue-100 p-3 rounded-full ${className}`}>
    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d}></path>
    </svg>
  </div>
);

// Testimonial card component
const TestimonialCard = ({ text, author, role, company, imageSrc }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
    <p className="text-gray-600 mb-6">"{text}"</p>
    <div className="flex items-center">
      {imageSrc && <Image src={imageSrc} alt={author} width={48} height={48} className="rounded-full mr-4" />}
      <div>
        <p className="font-bold text-gray-900">{author}</p>
        <p className="text-sm text-gray-500">{role}, {company}</p>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative text-center py-32 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/royalty-free/meeting-7063199_1280.png" 
            alt="Professional team meeting with AI technology" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/85"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
            Turn Leads Into Hot Sales Conversations —
            <br />
            <span className="text-blue-600">Automatically</span>
          </h1>
          <p className="text-lg mt-6 max-w-2xl mx-auto text-gray-600">
            AI-Powered Lead Qualification That Books You More Appointments —
            Without Adding Headcount or Wasting Time.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/book-a-call">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg">
                Book Your Free Growth Audit
              </button>
            </Link>
            <Link href="/services">
              <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-md">
                View Our Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* "Trusted by" Logos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <p className="text-gray-500 uppercase tracking-widest mb-8">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <Image src="/images/company-logo-1.svg" alt="Company Logo 1" width={130} height={45} className="opacity-60" />
            <Image src="/images/company-logo-2.svg" alt="Company Logo 2" width={130} height={45} className="opacity-60" />
            <Image src="/images/company-logo-3.svg" alt="Company Logo 3" width={130} height={45} className="opacity-60" />
            <Image src="/images/company-logo-4.svg" alt="Company Logo 4" width={130} height={45} className="opacity-60" />
            <Image src="/images/company-logo-5.svg" alt="Company Logo 5" width={130} height={45} className="opacity-60" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold">WHY SET THE SALE?</p>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Smart Companies Don't Waste Time on Dead Leads</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="text-center p-6">
              <FeatureIcon d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Qualified Leads Only</h3>
              <p className="text-gray-600">Our AI filters out unqualified prospects so your team focuses on hot leads ready to buy.</p>
            </div>
            <div className="text-center p-6">
              <FeatureIcon d="M13 10V3L4 14h7v7l9-11h-7z" className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Lightning-Fast Response</h3>
              <p className="text-gray-600">Engage leads in seconds with 300% faster response times, increasing conversions by up to 60%.</p>
            </div>
            <div className="text-center p-6">
              <FeatureIcon d="M12 8c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm-7 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm14 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z" className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Save Up to $70K/Year</h3>
              <p className="text-gray-600">Reduce SDR hours by 70% and slash overhead costs while boosting appointment quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold">TESTIMONIALS</p>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Hear What Our Users Are Saying</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              text="We saw a 60% increase in qualified appointments within the first month. Set The Sale transformed our pipeline."
              author="Santiago"
              role="Head of Sales"
              company="Tech Corp"
              imageSrc="/images/santiago.jpg"
            />
            <TestimonialCard 
              text="We managed to beat our quarterly quota by 15% for 3 quarters in a row with Set The Sale."
              author="Ryan"
              role="Sales Manager"
              company="SaaS"
              imageSrc="/images/ryan.jpg"
            />
            <TestimonialCard 
              text="My appointment setting process used to be a pain. Now it's just easy and our team is more productive."
              author="Lamar"
              role="CEO"
              company="Coaching"
              imageSrc="/images/lamar.jpg"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto text-center bg-blue-600 text-white p-16 rounded-2xl shadow-2xl">
          <h2 className="text-4xl font-bold">Ready to Stop Wasting Time on Dead Leads?</h2>
          <p className="text-xl mt-4 max-w-3xl mx-auto text-blue-100">
            Book a free growth audit and discover how our AI qualification system can fill your pipeline with sales-ready appointments.
          </p>
          <Link href="/book-a-call">
            <button className="mt-8 bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-10 rounded-lg text-lg transition-colors">
              Book Your Free Growth Audit
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}