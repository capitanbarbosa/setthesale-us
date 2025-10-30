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
          In a world full of overhyped tools and empty sales promises, Set the Sale doesn't just cut costs — we engineer qualified conversations that actually convert.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="pr-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Beyond Sales</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              In a world full of overhyped tools and empty sales promises, Set the Sale doesn't just cut costs — we engineer qualified conversations that actually convert.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our end-to-end system uses AI and proven strategy to align with your business goals — from identifying high-intent leads, qualifying them in real time, and booking appointments with buyers who are ready to talk.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This isn't just automation. It's a smarter, faster pipeline — built for real revenue, not just activity.
            </p>
          </div>
          <div>
            <Image
              src="/aboutus-images/Post-1.png"
              alt="Beyond sales"
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
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Results-Driven Excellency</h3>
              <p className="text-gray-600">We measure success by outcomes, not activity. Every action we take is designed to drive measurable growth and real revenue.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {/* Icon for Partnership */}
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 21a6 6 0 006-5.197M12 15a4 4 0 110-8 4 4 0 010 8z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Partner-Centered Growth</h3>
              <p className="text-gray-600">By understanding your unique Areas of Impact (AOIs), we deploy AI-powered systems and strategic automation to optimize what matters most.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {/* Icon for Innovation */}
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Seamless Execution</h3>
              <p className="text-gray-600">Our services are built to plug in and perform—fast. We value simplicity, speed, and operational precision in everything we deliver.</p>
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
          <h2 className="text-4xl font-bold">Your pain. Our mission.</h2>
          <p className="text-xl mt-4 max-w-3xl mx-auto text-blue-100">
            We combine skilled LATAM talent with automated AI systems and processes to help you scale faster — no hiring headaches, no guesswork, just consistent sales momentum.
          </p>
          <Link href="/book-a-call">
            <button className="mt-8 bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-10 rounded-lg text-lg transition-colors">
              Begin Here
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;