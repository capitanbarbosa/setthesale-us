import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-center py-20 px-4 text-white bg-gradient-to-b from-blue-900 to-blue-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/Shapes-icons.png')] bg-no-repeat bg-center bg-cover opacity-10"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">About us</h1>
        </div>
        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-12"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              fill="#FFFFFF"
              d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Content Section 1 */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/aboutus-images/Post-1.png"
              alt="Beyond sales"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-900">Beyond sales</h2>
            <p className="mt-4 text-gray-600">
              In a world full of overhyped tools and empty sales promises, Set
              the Sale doesn't just cut costs — we engineer qualified
              conversations that actually convert.
            </p>
            <p className="mt-4 text-gray-600">
              Our end-to-end system uses AI and proven strategy to align with
              your business goals — from identifying high-intent leads,
              qualifying them in real time, and booking appointments with buyers
              who are ready to talk.
            </p>
            <p className="mt-4 text-gray-600">
              This isn't just automation. It's a smarter, faster pipeline —
              built for real revenue, not just activity.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section 2 */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-900">
              Digital empowerment
            </h2>
            <p className="mt-4 text-gray-600">
              We're not just optimizing your pipeline — we're redefining how
              modern sales teams grow through intelligent automation and
              empowered human talent.
            </p>
            <p className="mt-4 text-gray-600">
              Our plug-and-play AI sales systems integrate seamlessly into your
              workflow, delivering qualified leads, booked appointments, and
              sales-ready conversations — without hiring or overhead.
            </p>
            <p className="mt-4 text-gray-600">
              And behind every result is a highly trained LATAM sales pro,
              supported by automation and driven by opportunity — ready to
              accelerate your revenue and scale your success.
            </p>
          </div>
          <div>
            <Image
              src="/aboutus-images/About-Page-intro-pic.png"
              alt="Digital empowerment"
              width={375}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - 2x2 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="bg-white p-8 shadow-sm"
                style={{ borderRadius: "1rem 1rem 1rem 3rem" }}
              >
                <h3 className="text-lg font-bold text-blue-900 mb-3">
                  Results-Driven Excellency
                </h3>
                <p className="text-gray-600 text-sm">
                  We measure success by outcomes, not activity. Every action we
                  take is designed to drive measurable growth and real revenue.
                </p>
              </div>
              <div
                className="bg-white p-8 shadow-sm"
                style={{ borderRadius: "1rem 1rem 1rem 3rem" }}
              >
                <h3 className="text-lg font-bold text-blue-900 mb-3">
                  Partner-Centered Growth
                </h3>
                <p className="text-gray-600 text-sm">
                  By understanding your unique Areas of Impact (AOIs), we deploy
                  AI-powered systems and strategic automation to optimize what
                  matters most.
                </p>
              </div>
              <div
                className="bg-white p-8 shadow-sm"
                style={{ borderRadius: "1rem 1rem 1rem 3rem" }}
              >
                <h3 className="text-lg font-bold text-blue-900 mb-3">
                  Seamless Execution
                </h3>
                <p className="text-gray-600 text-sm">
                  Our services are built to plug in and perform—fast. We value
                  simplicity, speed, and operational precision in everything we
                  deliver.
                </p>
              </div>
              <div
                className="bg-white p-8 shadow-sm"
                style={{ borderRadius: "1rem 1rem 1rem 3rem" }}
              >
                <h3 className="text-lg font-bold text-blue-900 mb-3">
                  Trust Through Transparency
                </h3>
                <p className="text-gray-600 text-sm">
                  We build long-term relationships through open communication,
                  honest reporting, and consistent delivery on promises.
                </p>
              </div>
            </div>

            {/* Right side - Text Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold text-blue-950 mb-4">
                Empowered performance.
              </h2>
              <h3 className="text-3xl font-bold text-blue-950 mb-6">
                Delivered Simply
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We combine skilled LATAM talent with automated AI systems and
                processes to help you scale faster — no hiring headaches, no
                guesswork, just consistent sales momentum. Our approach is built
                on real partnership, clear communication, and a deep commitment
                to both your growth and ours.
              </p>
              <Link href="/book-a-call">
                <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300">
                  Begin Here
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 text-center bg-blue-950 text-white">
        <h2 className="text-4xl font-bold">Your pain. Our mission.</h2>
        <p className="text-xl mt-4 text-gray-300">
          Empowered performance.
          <br />
          Delivered Simply
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-gray-400">
          We combine skilled LATAM talent with automated AI systems and
          processes to help you scale faster — no hiring headaches, no
          guesswork, just consistent sales momentum. Our approach is built on
          real partnership, clear communication, and a deep commitment to both
          your growth and ours.
        </p>
        <Link href="/book-a-call">
          <button className="mt-8 bg-gradient-to-r from-red-400 to-pink-500 text-white font-bold py-3 px-8 rounded-lg text-lg">
            Begin Here
          </button>
        </Link>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2 text-blue-900">
            Meet our team
          </h2>
          <p className="text-lg text-gray-400 mb-12">
            The faces behind set the sale
          </p>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
              <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl px-2 py-1 text-center shadow-lg">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/aboutus-images/PP.jpg"
                    alt="Francisco Ovalle"
                    width={240}
                    height={360}
                    className="rounded-xl object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  Francisco Ovalle
                </h3>
                <p className="text-gray-600 text-sm mb-3">Founder</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl px-2 py-1 text-center shadow-lg">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/aboutus-images/1724261669050.jpg"
                    alt="Sebastian Castro"
                    width={240}
                    height={360}
                    className="rounded-xl object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  Sebastian Castro
                </h3>
                <p className="text-gray-600 text-sm mb-3">Head of Growth</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl px-2 py-1 text-center shadow-lg">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/aboutus-images/1744670789746.jpg"
                    alt="Juanita Angel"
                    width={240}
                    height={360}
                    className="rounded-xl object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  Juanita Angel
                </h3>
                <p className="text-gray-600 text-sm mb-3">Head of Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2 text-blue-900">
            Meet our clients
          </h2>
          <p className="text-lg text-gray-400 mb-12">Working for you</p>
          <p className="max-w-3xl mx-auto text-gray-600 mb-12">
            We partner with forward-thinking brands that trust us to step their
            sales game up. Together, we achieve remarkable results
          </p>
          <div className="flex justify-center items-center space-x-12">
            <Image
              src="/aboutus-images/Elite-Services-Logo-BW-2.png"
              alt="Elite Services"
              width={100}
              height={60}
              className="opacity-60"
            />
            <Image
              src="/aboutus-images/Imagen2.jpg"
              alt="Client Logo"
              width={80}
              height={80}
              className="opacity-60"
            />
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-blue-900 to-blue-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/Shapes-icons.png')] bg-no-repeat bg-center bg-cover opacity-10"></div>

        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-12"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              fill="#f9fafb"
              d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,0 L0,0 Z"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">
                Ready to become future-proof?
              </h2>
              <Link href="/book-a-call">
                <button className="bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300">
                  Begin Here
                </button>
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative w-[34rem] h-[32rem] -mt-16">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 transform rotate-3 opacity-20"
                  style={{ borderRadius: "10rem 5rem 5rem 5rem" }}
                ></div>
                <div
                  className="absolute inset-2 bg-gradient-to-br from-pink-400 to-red-500 transform -rotate-2 opacity-30"
                  style={{ borderRadius: "10rem 5rem 5rem 5rem" }}
                ></div>
                <div
                  className="relative w-full h-full overflow-hidden backdrop-blur-sm bg-white/10 transform rotate-1"
                  style={{ borderRadius: "9.5rem 4.5rem 4.5rem 4.5rem" }}
                >
                  <Image
                    src="/aboutus-images/CTA-About-new.png"
                    alt="Future-proof business"
                    width={1088}
                    height={1024}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
