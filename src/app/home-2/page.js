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
      <section className="text-center py-24 px-4 bg-white">
        <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
          AI Appointment Setter:
          <br />
          <span className="text-blue-600">Automate Scheduling with Ease</span>
        </h1>
        <p className="text-lg mt-6 max-w-2xl mx-auto text-gray-600">
          Our advanced AI automates scheduling, reminders, and rescheduling,
          simplifying appointment management and enhancing customer satisfaction.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link href="/book-a-call">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105">
              Contact Sales
            </button>
          </Link>
          <Link href="/services">
            <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              View Features
            </button>
          </Link>
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
            <p className="text-blue-600 font-semibold">FEATURES</p>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Why Choose Our AI Appointment Setter?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="text-center p-6">
              <FeatureIcon d="M12 6v6m0 0v6m0-6h6m-6 0H6" className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Quick & Easy Setup</h3>
              <p className="text-gray-600">Get started in minutes. Our user-friendly process requires no technical expertise.</p>
            </div>
            <div className="text-center p-6">
              <FeatureIcon d="M13 10V3L4 14h7v7l9-11h-7z" className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Cost-Effective Scaling</h3>
              <p className="text-gray-600">Automate repetitive tasks and manage higher workloads without increasing overhead.</p>
            </div>
            <div className="text-center p-6">
              <FeatureIcon d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0119 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Efficient Call Handling</h3>
              <p className="text-gray-600">Our AI handles bookings, cancellations, and reminders, saving your team valuable time.</p>
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
              text="We increased our qualified appointments by 60% in the first quarter. It's a game-changer."
              author="Daniel Lefanov"
              role="Implementation Manager"
              company="Smartcat"
              imageSrc="/images/lamar.jpg" // Placeholder
            />
            <TestimonialCard 
              text="The reduction in manual follow-up has freed up our sales team to focus on closing deals. Incredible ROI."
              author="Ryan"
              role="Sales Manager"
              company="SaaS Inc."
              imageSrc="/images/ryan.jpg"
            />
            <TestimonialCard 
              text="My appointment setting process used to be a pain. Now it's just easy and incredibly efficient."
              author="Lamar"
              role="CEO"
              company="Coaching Co."
              imageSrc="/images/santiago.jpg" // Placeholder
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto text-center bg-blue-600 text-white p-16 rounded-2xl shadow-2xl">
          <h2 className="text-4xl font-bold">Managing Over 20K Minutes of Calls Monthly?</h2>
          <p className="text-xl mt-4 max-w-3xl mx-auto text-blue-100">
            Let our experts show you how Voice AI can scale your customer service operations and deliver ROI around the clock.
          </p>
          <Link href="/book-a-call">
            <button className="mt-8 bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-10 rounded-lg text-lg transition-colors">
              Contact Sales
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}