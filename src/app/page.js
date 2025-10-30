import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-center py-20 px-4 text-white bg-gradient-to-b from-blue-900 to-blue-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/Shapes-icons.png')] bg-no-repeat bg-center bg-cover opacity-10"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold max-w-4xl mx-auto leading-tight">
            Turn Leads Into Hot Sales Conversations — Automatically
          </h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto text-gray-300">
            AI-Powered Lead Qualification That Books You More Appointments —
            Without Adding Headcount or Wasting Time.
          </p>
          <Link
            href="https://calendly.com/setthesale/strategy-call"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-8 bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300">
              Book Your Free Growth Audit
            </button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Smart Companies Don’t Waste Time on Dead Leads. They Use Us.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-blue-600">70%</p>
              <p className="text-lg mt-2 text-gray-600">
                Reduction in SDR Hours
              </p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-600">60%</p>
              <p className="text-lg mt-2 text-gray-600">
                Increase in Qualified Appointments
              </p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-600">300%</p>
              <p className="text-lg mt-2 text-gray-600">Faster Response Time</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-600">
                Up to 70K/ Year
              </p>
              <p className="text-lg mt-2 text-gray-600">
                Saved in Salaries and Overhead
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by... */}
      <section className="py-12 px-4 bg-gray-50">
        <h3 className="text-center text-2xl font-semibold mb-8 text-blue-900">
          Trusted by Top Teams
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
          <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/images/company-logo-1.svg"
              alt="Company Logo 1"
              width={120}
              height={40}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/images/company-logo-2.svg"
              alt="Company Logo 2"
              width={120}
              height={40}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/images/company-logo-3.svg"
              alt="Company Logo 3"
              width={120}
              height={40}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/images/company-logo-4.svg"
              alt="Company Logo 4"
              width={120}
              height={40}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/images/company-logo-5.svg"
              alt="Company Logo 5"
              width={120}
              height={40}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Bleeding Pipeline Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-blue-900">
            Your Pipeline is Bleeding – Here's Why
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2C10.5523 2 11 2.44772 11 3V4.26756C13.0832 4.91444 14.5 6.81325 14.5 9.08333C14.5 11.3534 13.0832 13.2522 11 13.8991V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V13.8991C6.91684 13.2522 5.5 11.3534 5.5 9.08333C5.5 6.81325 6.91684 4.91444 9 4.26756V3C9 2.44772 9.44772 2 10 2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-blue-900">Your Reps</h3>
              <p className="mt-2 text-gray-600">
                waste 60% of their time chasing unqualified leads.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 2h8v8H6V6z" />
                    <circle cx="10" cy="10" r="2" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-blue-900">
                You're Spending
              </h3>
              <p className="mt-2 text-gray-600">
                thousands on ads — but not converting.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2v8h10V6H5z" />
                    <path d="M7 8h6v4H7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-blue-900">
                Your Cold Leads
              </h3>
              <p className="mt-2 text-gray-600">
                never get warm because follow-up sucks.
              </p>
            </div>
          </div>
          <Link
            href="https://calendly.com/setthesale/strategy-call"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-12 bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              Begin Here
            </button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Partners Love Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/ryan.jpg"
                  alt="Ryan - Sales Manager"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <p className="text-gray-400">
                "We managed to beat our quarterly quota by 15% for 3 quarters in
                a row with Set The Sale."
              </p>
              <p className="mt-4 font-bold">- Ryan</p>
              <p className="text-sm text-gray-500">Sales Manager - SaaS</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/santiago.jpg"
                  alt="Santiago - Founder"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <p className="text-gray-400">"It just makes sense!"</p>
              <p className="mt-4 font-bold">- Santiago</p>
              <p className="text-sm text-gray-500">Founder - SaaS</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/lamar.jpg"
                  alt="Lamar - CEO"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
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
      <section className="text-center py-20 px-4 bg-white">
        <h2 className="text-4xl font-bold text-blue-900">
          Get a Free Consultation!
        </h2>
        <Link href="/book-a-call">
          <button className="mt-8 bg-gradient-to-r from-red-400 to-pink-500 text-white font-bold py-3 px-8 rounded-lg text-lg">
            Schedule Now
          </button>
        </Link>
      </section>
    </div>
  );
}
