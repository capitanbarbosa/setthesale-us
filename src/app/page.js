import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold max-w-4xl mx-auto leading-tight">
          Turn Leads Into Hot Sales Conversations — Automatically
        </h1>
        <p className="text-xl mt-4 max-w-2xl mx-auto text-gray-300">
          AI-Powered Lead Qualification That Books You More Appointments —
          Without Adding Headcount or Wasting Time.
        </p>
        <Link href="/book-a-call">
          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
            Book Your Free Growth Audit
          </button>
        </Link>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Smart Companies Don’t Waste Time on Dead Leads. They Use Us.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-blue-500">70%</p>
              <p className="text-lg mt-2">Reduction in SDR Hours</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-500">60%</p>
              <p className="text-lg mt-2">Increase in Qualified Appointments</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-500">300%</p>
              <p className="text-lg mt-2">Faster Response Time</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-500">
                Up to 70K/ Year
              </p>
              <p className="text-lg mt-2">Saved in Salaries and Overhead</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by... */}
      <section className="py-12 px-4">
        <h3 className="text-center text-2xl font-semibold mb-8">
          Trusted by Top Teams
        </h3>
        <div className="flex justify-center items-center space-x-12">
          <p className="text-xl text-gray-400">Coaching</p>
          <p className="text-xl text-gray-400">Real Estate</p>
          <p className="text-xl text-gray-400">SaaS</p>
        </div>
      </section>

      {/* Bleeding Pipeline Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Your Pipeline is Bleeding – Here's Why
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Your Reps</h3>
              <p className="mt-2 text-gray-400">
                waste 60% of their time chasing unqualified leads.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">You're Spending</h3>
              <p className="mt-2 text-gray-400">
                thousands on ads — but not converting.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Your Cold Leads</h3>
              <p className="mt-2 text-gray-400">
                never get warm because follow-up sucks.
              </p>
            </div>
          </div>
          <Link href="/book-a-call">
            <button className="mt-12 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
              Begin Here
            </button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Partners Love Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-400">
                "We managed to beat our quarterly quota by 15% for 3 quarters in
                a row with Set The Sale."
              </p>
              <p className="mt-4 font-bold">- Ryan</p>
              <p className="text-sm text-gray-500">Sales Manager - SaaS</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-400">"It just makes sense!"</p>
              <p className="mt-4 font-bold">- Santiago</p>
              <p className="text-sm text-gray-500">Founder - SaaS</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-400">
                "My appointment setting process used to be a pain in the ass.
                Now it's just easy."
              </p>
              <p className="mt-4 font-bold">- Lamar</p>
              <p className="text-sm text-gray-500">CEO - Coaching</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20 px-4">
        <h2 className="text-4xl font-bold">Get a Free Consultation!</h2>
        <Link href="/book-a-call">
          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
            Schedule Now
          </button>
        </Link>
      </section>
    </div>
  );
}
