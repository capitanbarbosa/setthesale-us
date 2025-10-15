"use client";
import { useState } from "react";
import { FaPlay, FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin, FaPlus } from "react-icons/fa";
import { FiMessageSquare, FiUsers, FiTrendingUp, FiCheckCircle, FiZap } from "react-icons/fi";
import Image from "next/image";

const HomePage3 = () => {
  const [faqOpen, setFaqOpen] = useState(null);

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const faqs = [
    "How does Setter AI work?",
    "What can Setter AI do for my business?",
    "Does Setter AI work inbound or outbound?",
    "Can Setter AI follow up with my leads?",
    "What is the pricing for Setter AI?",
    "Can I customize the AI's personality?",
    "Can I connect Setter AI to WhatsApp?",
    "Will it work with our current lead sources (Meta ads, etc.)?",
    "We want exclusivity in our market.",
    "We already have a call center / SDR team.",
    "Will it break our CRM / lead flow?",
    "We don't want another tool to manage.",
    "How do I embed the WhatsApp Link on my website?",
    "Does Setter AI integrate with GoHighLevel?",
    "Does Setter AI integrate with Hubspot?",
    "Does Setter AI speak French?",
    "How do I connect my lead forms?",
    "Which languages do you support?",
    "How much effort is required from my side?",
    "How reliable is the AI in achieving accurate results?",
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <p className="text-purple-600 font-semibold">AI APPOINTMENT SETTER</p>
        <h1 className="text-5xl md:text-6xl font-bold mt-4">
          Never Miss a Lead Again.
          <br />
          Book <span className="text-purple-600">More Sales Calls.</span>
        </h1>
        <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
          Follow up leads in 10 seconds - with a 62% lead to booking rate.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-purple-700 transition-colors">
            Get Started
          </button>
          <button className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg border border-purple-600 hover:bg-purple-50 transition-colors">
            Book a Demo
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-6">
          The #1 AI lead response solution for businesses.
        </p>
        <div className="mt-8 flex justify-center items-center gap-8">
          <Image src="/images/company-logo-1.svg" alt="Mindvalley" width={100} height={30} />
          <Image src="/images/company-logo-2.svg" alt="Windesheim" width={100} height={30} />
          <Image src="/images/company-logo-3.svg" alt="Intel" width={50} height={30} />
        </div>
        <div className="mt-12 relative max-w-4xl mx-auto">
          <Image
            src="/aboutus-images/screencapture-setthesale-us-about-2025-08-25-19_40_04.png"
            alt="Video thumbnail"
            width={1920}
            height={1080}
            className="rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-purple-600 p-4 rounded-full text-white shadow-lg">
              <FaPlay className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>

      {/* Hiring More SDRs Won't Fix... */}
      <section className="py-20 px-4 text-center bg-gray-50">
        <h2 className="text-4xl font-bold">
          Hiring More SDRs Won't Fix a{" "}
          <span className="text-purple-600">Broken Lead Response.</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Automate first contact in under 10 seconds - and convert up to 62%
          of your leads into meetings - without expanding your sales team.
        </p>
      </section>

      {/* Setter AI is the fastest way... */}
      <section className="py-20 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold">
              Setter AI is the{" "}
              <span className="text-purple-600">fastest</span> way to turn
              leads into sales calls for businesses.
            </h2>
            <button className="mt-6 bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-purple-700 transition-colors">
              Get Started
            </button>
          </div>
          <div className="text-center">
            <p className="text-8xl font-bold text-purple-600">10s</p>
            <p className="text-gray-600 mt-2">
              Setter AI follow up with your leads in just 10 seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Setter AI requires zero change... */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">
            Setter AI requires <span className="text-purple-600">zero change</span> to
            your business.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-8">
            <FaFacebook size={40} className="text-blue-600" />
            <FaWhatsapp size={40} className="text-green-500" />
            <Image src="/images/company-logo-4.svg" alt="Zapier" width={100} height={40} />
            <Image src="/images/company-logo-5.svg" alt="Stripe" width={100} height={40} />
            <p className="font-semibold">Acuity Scheduling</p>
          </div>
        </div>
      </section>

      {/* You connect your lead forms... */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <ul className="space-y-4 text-2xl font-semibold">
            <li>You connect your lead forms.</li>
            <li className="text-purple-600">
              Your response time drops to 10 seconds.
            </li>
            <li>Your booking rate skyrockets.</li>
            <li>Your team talks only to real buyers.</li>
            <li>Your business grows without more hires.</li>
          </ul>
        </div>
      </section>

      {/* Stop losing hot leads... */}
      <section className="py-20 px-4 text-center bg-gray-50">
        <h2 className="text-4xl font-bold">
          Stop losing hot leads.
          <br />
          Follow-up every lead in <span className="text-purple-600">10 seconds.</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          First message in 10 seconds after form submission.
          <br />
          Then human-like texting conversation and booking into your calendar.
          <br />
          This is how we achieve up to 62% lead-to-booking-rates.
        </p>
        <div className="mt-12 relative max-w-4xl mx-auto">
          <Image
            src="/aboutus-images/Post-1.png"
            alt="Follow-up process"
            width={1920}
            height={1080}
            className="rounded-lg shadow-2xl"
          />
           <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-purple-600 p-4 rounded-full text-white shadow-lg">
              <FaPlay className="w-8 h-8" />
            </button>
          </div>
        </div>
        <button className="mt-8 bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-purple-700 transition-colors">
          Get me a demo
        </button>
      </section>

      {/* WhatsApp Demo */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-md text-center">
          <h2 className="text-3xl font-bold">
            Try The Outbound
            <br />
            <span className="text-purple-600">WhatsApp Demo</span> Below
          </h2>
          <div className="mt-8 bg-white p-8 rounded-lg shadow-2xl border border-gray-200">
            <p className="font-semibold">
              Receive an <span className="text-purple-600">instant follow up</span> from
              our AI Setter
            </p>
            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                placeholder="Enter your work Email"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="text"
                placeholder="Enter your WhatsApp Phone Number"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <button className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-purple-700 transition-colors">
                Chat with Setter AI
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* How Setter AI books... */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <h2 className="text-4xl font-bold">
            Here's how Setter AI books YOU more meetings in 4 simple steps.
          </h2>
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-purple-600 bg-white rounded-r-lg shadow">
              <h3 className="font-bold">Step 1: Instant Response (10 Seconds)</h3>
              <p className="text-gray-600">
                Your lead gets a message in under 10 seconds. No delays. No
                drop-off.
              </p>
            </div>
            <div className="p-4 border-l-4 border-gray-300 bg-white rounded-r-lg shadow">
              <h3 className="font-bold">Step 2: Automated Follow-Ups</h3>
              <p className="text-gray-600">
                Your AI keeps following up - until the lead replies or books.
              </p>
            </div>
            <div className="p-4 border-l-4 border-gray-300 bg-white rounded-r-lg shadow">
              <h3 className="font-bold">Step 3: Conversational Booking</h3>
              <p className="text-gray-600">
                The lead books directly inside the chat. Low friction.
              </p>
            </div>
             <div className="p-4 border-l-4 border-gray-300 bg-white rounded-r-lg shadow">
              <h3 className="font-bold">Step 4: Meeting Reminders</h3>
              <p className="text-gray-600">
                Automatic reminders are sent to your leads to reduce no-shows and close more deals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book More Meetings... */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-4xl font-bold">
          Book More Meetings with <span className="text-purple-600">Conversational AI.</span>
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6">
            <FaWhatsapp size={40} className="mx-auto text-purple-600" />
            <h3 className="mt-4 font-bold text-xl">WhatsApp</h3>
            <p className="mt-2 text-gray-600">
              Use WhatsApp to turn leads into meetings on autopilot. Connect
              WhatsApp Business in just 5 mins.
            </p>
            <a href="#" className="mt-4 inline-block text-purple-600 font-semibold">
              Get Started →
            </a>
          </div>
          <div className="p-6">
            <FiMessageSquare size={40} className="mx-auto text-purple-600" />
            <h3 className="mt-4 font-bold text-xl">Text</h3>
            <p className="mt-2 text-gray-600">
              Automate text responses via SMS. Turn more inbound appointments
              effortlessly using conversational booking.
            </p>
            <a href="#" className="mt-4 inline-block text-purple-600 font-semibold">
              Get Started →
            </a>
          </div>
          <div className="p-6">
            <FiZap size={40} className="mx-auto text-purple-600" />
            <h3 className="mt-4 font-bold text-xl">Website Embed</h3>
            <p className="mt-2 text-gray-600">
              Add a lead generation chatbot to your website. Respond to every
              lead in a matter of seconds and book more meetings.
            </p>
            <a href="#" className="mt-4 inline-block text-purple-600 font-semibold">
              Get Started →
            </a>
          </div>
          <div className="p-6">
            <FaFacebook size={40} className="mx-auto text-purple-600" />
            <h3 className="mt-4 font-bold text-xl">Facebook Messenger</h3>
            <p className="mt-2 text-gray-600">
              Automate conversations on Facebook Messenger. Respond to
              messenger ads and book more meetings.
            </p>
            <a href="#" className="mt-4 inline-block text-purple-600 font-semibold">
              Learn More →
            </a>
          </div>
          <div className="p-6">
            <FaInstagram size={40} className="mx-auto text-purple-600" />
            <h3 className="mt-4 font-bold text-xl">Instagram</h3>
            <p className="mt-2 text-gray-600">
              Automate lead generation on Instagram. Turn comments, replies,
              and DMs into booked appointments instantly.
            </p>
            <a href="#" className="mt-4 inline-block text-purple-600 font-semibold">
              Learn More →
            </a>
          </div>
          <div className="p-6">
            <FaLinkedin size={40} className="mx-auto text-purple-600" />
            <h3 className="mt-4 font-bold text-xl">LinkedIn</h3>
            <p className="mt-2 text-gray-600">
              Automate lead generation on LinkedIn. Turn comments, messages,
              and community into booked meetings with AI.
            </p>
            <a href="#" className="mt-4 inline-block text-purple-600 font-semibold">
              Learn More →
            </a>
          </div>
        </div>
      </section>

      {/* Use Case: Facebook Lead Ads */}
      <section className="py-20 px-4 text-center bg-gray-50">
        <h2 className="text-4xl font-bold">
          Use Case: How to Automate Facebook Lead Ads - Full Tutorial
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          First message in 10 seconds after form submission.
          <br />
          Then human-like texting conversation and booking into your calendar.
          <br />
          This is how we achieve up to 62% lead-to-booking-rates.
        </p>
        <div className="mt-12 relative max-w-4xl mx-auto">
          <Image
            src="/aboutus-images/Imagen5.png"
            alt="Facebook Lead Ads Tutorial"
            width={1920}
            height={1080}
            className="rounded-lg shadow-2xl"
          />
           <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-purple-600 p-4 rounded-full text-white shadow-lg">
              <FaPlay className="w-8 h-8" />
            </button>
          </div>
        </div>
        <button className="mt-8 bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-purple-700 transition-colors">
          Get me a demo
        </button>
      </section>

      {/* What our users say */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl font-bold">What our users say</h2>
          <div className="mt-12 space-y-8">
            <div className="p-8 bg-white rounded-lg shadow-lg border border-gray-200">
              <p className="text-gray-600">
                "I love it. It's working perfectly! Our business generates
                30,000 leads per month, which we previously had to reach out
                manually. Thanks to Setter AI, we now wake up every day to find
                new meetings seamlessly booked into my calendar. I would gladly
                pay $1,000 per day for Setter AI as we scale our operations."
              </p>
              <div className="mt-6 flex items-center justify-center">
                <Image
                  src="/images/santiago.jpg"
                  alt="Carlos de Ory"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4 text-left">
                  <p className="font-bold">Carlos de Ory</p>
                  <p className="text-sm text-gray-500">Ice Beach City, Real Estate</p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg border border-gray-200">
              <p className="text-gray-600">"Wow, this is good"</p>
              <div className="mt-6 flex items-center justify-center">
                <Image
                  src="/images/ryan.jpg"
                  alt="Jake Rogers"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4 text-left">
                  <p className="font-bold">Jake Rogers</p>
                  <p className="text-sm text-gray-500">Lamarck, Solar</p>
                </div>
              </div>
            </div>
             <div className="p-8 bg-white rounded-lg shadow-lg border border-gray-200">
              <p className="text-gray-600">"Great product - much needed in this market, nothing comes close from a 60 sec lead response time!"</p>
              <div className="mt-6 flex items-center justify-center">
                <Image
                  src="/images/lamar.jpg"
                  alt="Matt Bertoli"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4 text-left">
                  <p className="font-bold">Matt Bertoli</p>
                  <p className="text-sm text-gray-500">Solar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center">
            Frequently asked questions
          </h2>
          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-5 text-left font-semibold"
                >
                  {faq}
                  <FaPlus
                    className={`transform transition-transform ${
                      faqOpen === index ? "rotate-45" : ""
                    }`}
                  />
                </button>
                {faqOpen === index && (
                  <div className="p-5 pt-0 text-gray-600">
                    <p>
                      Detailed answer for the question: "{faq}" would go here.
                      This is a placeholder.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage3;
