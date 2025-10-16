import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-24 px-4 bg-white">
        <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
          About <span className="text-blue-600">Set the Sale</span>
        </h1>
        <p className="text-lg mt-6 max-w-3xl mx-auto text-gray-600">
          We are a team of innovators, strategists, and sales experts dedicated to redefining how businesses grow. We believe in the power of technology to augment human potential.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="pr-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story: From Idea to Impact</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Set the Sale was born from a simple observation: too many sales teams were bogged down by manual, repetitive tasks, preventing them from focusing on high-value activities. We saw an opportunity to change that.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We developed an end-to-end system that combines the best of AI with proven sales strategies. Our goal is to create a seamless, efficient pipeline that not only qualifies leads but also delivers sales-ready conversations, empowering teams to achieve unprecedented growth.
            </p>
          </div>
          <div>
            <Image
              src="/aboutus-images/About-Page-intro-pic.png"
              alt="Our Story"
              width={500}
              height={400}
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {/* Icon for Results */}
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Results-Driven</h3>
              <p className="text-gray-600">We measure our success by the success of our clients. Outcomes are everything.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {/* Icon for Partnership */}
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 21a6 6 0 006-5.197M12 15a4 4 0 110-8 4 4 0 010 8z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">True Partnership</h3>
              <p className="text-gray-600">We work as an extension of your team, deeply invested in your goals and growth.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {/* Icon for Innovation */}
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.636-6.364l.707-.707M12 21v-1m-6.364-1.636l.707-.707M6.343 6.343l-.707-.707" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Constant Innovation</h3>
              <p className="text-gray-600">We are always learning, testing, and improving to stay at the forefront of sales technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">Meet the Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Image
                src="/aboutus-images/PP.jpg"
                alt="Francisco Ovalle"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900">Francisco Ovalle</h3>
              <p className="text-blue-600 font-semibold">Founder</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Image
                src="/aboutus-images/1724261669050.jpg"
                alt="Sebastian Castro"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900">Sebastian Castro</h3>
              <p className="text-blue-600 font-semibold">Head of Growth</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Image
                src="/aboutus-images/1744670789746.jpg"
                alt="Juanita Angel"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900">Juanita Angel</h3>
              <p className="text-blue-600 font-semibold">Head of Marketing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto text-center bg-blue-600 text-white p-16 rounded-2xl shadow-2xl">
          <h2 className="text-4xl font-bold">Ready to Become Future-Proof?</h2>
          <p className="text-xl mt-4 max-w-3xl mx-auto text-blue-100">
            Let's have a conversation about how we can elevate your sales process.
          </p>
          <Link href="/book-a-call">
            <button className="mt-8 bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-10 rounded-lg text-lg transition-colors">
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;