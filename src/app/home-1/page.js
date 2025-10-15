import Image from "next/image";
import Link from "next/link";

// It's good practice to define icons as components for reusability
const FeatureIcon = ({ d }) => (
  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d}></path>
  </svg>
);

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gray-900">
        <h1 className="text-5xl font-bold">
          AI Appointment Setter: Automate Scheduling with Ease
        </h1>
        <p className="text-xl mt-4 max-w-3xl mx-auto text-gray-400">
          Synthflow's AI Appointment Setter automates scheduling, reminders, and rescheduling, 
          simplifying appointment management and enhancing customer satisfaction while saving time.
        </p>
        <Link href="/book-a-call">
          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            Contact Sales
          </button>
        </Link>
      </section>

      {/* Company Logos */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 mb-8">Trusted by innovative companies worldwide</p>
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
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 text-blue-400">FEATURES</h2>
          <h3 className="text-4xl font-bold text-center mb-12">Why Choose Our AI Appointment Setter?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="mb-4"><FeatureIcon d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></div>
              <h4 className="text-2xl font-bold mb-2">Quick & Easy Setup</h4>
              <p className="text-gray-400">Connect the AI Appointment Setter with your tools quickly and get started right away. The process is user-friendly and requires no technical expertise.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="mb-4"><FeatureIcon d="M13 10V3L4 14h7v7l9-11h-7z" /></div>
              <h4 className="text-2xl font-bold mb-2">Cost-Effective Scaling</h4>
              <p className="text-gray-400">Streamline scheduling without increasing overhead. By automating repetitive tasks, you can manage higher workloads without hiring additional staff.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="mb-4"><FeatureIcon d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0119 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></div>
              <h4 className="text-2xl font-bold mb-2">Efficient Call Handling</h4>
              <p className="text-gray-400">The AI efficiently handles bookings, cancellations, and reminders, ensuring smoother operations and saving time for your team.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="mb-4"><FeatureIcon d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></div>
              <h4 className="text-2xl font-bold mb-2">24/7 Availability</h4>
              <p className="text-gray-400">Customers can schedule or adjust appointments at any time. This ensures no opportunity is missed, and customers receive prompt responses to their requests.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="mb-4"><FeatureIcon d="M3 5h12M9 3v2m4 0v2M3 10h12M3 15h12M3 20h12" /></div>
              <h4 className="text-2xl font-bold mb-2">Customizable & Multilingual</h4>
              <p className="text-gray-400">Easily adjust settings to suit your business needs. The system works with multiple languages and integrates with popular tools, providing a consistent experience for all users.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="mb-4"><FeatureIcon d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></div>
              <h4 className="text-2xl font-bold mb-2">User-Friendly Dashboard</h4>
              <p className="text-gray-400">The dashboard allows you to monitor appointment activity, track interactions, and adjust workflows as needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Hear What Our Users Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-400 mb-4">"Synthflow's Voice AI agents help us book more demos faster. We increased the conversion rates in the top of our lead pipeline, the number of contacts dialed by 217% and the number of answered calls, 24%."</p>
              <p className="font-bold">- Daniel Lefanov</p>
              <p className="text-sm text-blue-400">Implementation Manager, Smartcat</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-400 mb-4">"We managed to beat our quarterly quota by 15% for 3 quarters in a row with Set The Sale."</p>
              <p className="font-bold">- Ryan</p>
              <p className="text-sm text-blue-400">Sales Manager - SaaS</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-400 mb-4">"My appointment setting process used to be a pain in the ass. Now it's just easy."</p>
              <p className="font-bold">- Lamar</p>
              <p className="text-sm text-blue-400">CEO - Coaching</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="text-center py-20 px-4 bg-blue-800 bg-opacity-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold">Managing Over 20K Minutes of Calls Monthly?</h2>
          <p className="text-xl mt-4 text-gray-300">Dive deeper with our experts to learn how Voice AI can scale your customer service operations and deliver ROI around the clock.</p>
          <Link href="/book-a-call">
            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              Contact Sales
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}