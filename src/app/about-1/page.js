import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gray-900">
        <h1 className="text-5xl font-bold text-purple-400">About Us</h1>
        <p className="text-xl mt-4 max-w-3xl mx-auto text-gray-300">
          We are the architects of the future of sales. We blend AI-driven precision with human ingenuity to create a sales engine that never sleeps.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Beyond Sales: Our Story</h2>
            <p className="text-gray-400 mb-4">
              In a world full of overhyped tools and empty sales promises, Set the Sale was founded to engineer qualified conversations that actually convert. We don't just cut costs; we build revenue.
            </p>
            <p className="text-gray-400">
              Our end-to-end system uses AI and proven strategy to align with your business goals — from identifying high-intent leads to booking appointments with buyers who are ready to talk. This isn't just automation. It's a smarter, faster pipeline.
            </p>
          </div>
          <div>
            <Image
              src="/aboutus-images/Post-1.png"
              alt="Our Story"
              width={500}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white">Our Mission</h2>
          <p className="text-xl mt-4 max-w-3xl mx-auto text-gray-300">
            To empower businesses with intelligent automation that transforms their sales process, freeing up human talent to do what they do best: build relationships and close deals.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <Image
                src="/aboutus-images/PP.jpg"
                alt="Francisco Ovalle"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-white">Francisco Ovalle</h3>
              <p className="text-purple-400">Founder</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <Image
                src="/aboutus-images/1724261669050.jpg"
                alt="Sebastian Castro"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-white">Sebastian Castro</h3>
              <p className="text-purple-400">Head of Growth</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <Image
                src="/aboutus-images/1744670789746.jpg"
                alt="Juanita Angel"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-white">Juanita Angel</h3>
              <p className="text-purple-400">Head of Marketing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20 px-4 bg-purple-800 bg-opacity-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold">Ready to Revolutionize Your Sales?</h2>
          <p className="text-xl mt-4 text-gray-300">Let's build the future of your sales pipeline, together.</p>
          <Link href="/book-a-call">
            <button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              Book a Free Demo
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;