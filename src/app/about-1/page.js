import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative text-center py-32 px-4 overflow-hidden">
        {/* Professional Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white"></div>
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230F172A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
        
        {/* Subtle Floating Elements - Single Color */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-[0.07] animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-[0.05] animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Set the Sale</span>
          </h1>
          <p className="text-xl mt-6 max-w-3xl mx-auto text-gray-600 leading-relaxed">
            We are the architects of the future of sales. We blend AI-driven precision with human ingenuity to create a sales engine that never sleeps.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-24 px-4 overflow-hidden bg-white">
        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/40 to-transparent"></div>
        
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Beyond Sales: Our Story
              </h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              In a world full of overhyped tools and empty sales promises, Set the Sale was founded to engineer qualified conversations that actually convert. We don't just cut costs; we build revenue.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our end-to-end system uses AI and proven strategy to align with your business goals — from identifying high-intent leads to booking appointments with buyers who are ready to talk. This isn't just automation. It's a smarter, faster pipeline.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-blue-600/10 rounded-2xl group-hover:bg-blue-600/20 transition duration-500"></div>
            <Image
              src="/aboutus-images/Post-1.png"
              alt="Our Story"
              width={500}
              height={400}
              className="relative rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="relative py-28 px-4 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        {/* Subtle Radial Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_70%)]"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto"></div>
          </div>
          <p className="text-xl md:text-2xl mt-8 max-w-4xl mx-auto text-gray-600 leading-relaxed">
            To empower businesses with intelligent automation that transforms their sales process, freeing up human talent to do what they do best: build relationships and close deals.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-24 px-4 overflow-hidden bg-white">
        {/* Subtle Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230F172A' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")"}}></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transform hover:-translate-y-1 transition-all duration-300">
                <div className="relative inline-block mb-6">
                  <Image
                    src="/aboutus-images/PP.jpg"
                    alt="Francisco Ovalle"
                    width={150}
                    height={150}
                    className="rounded-full mx-auto ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Francisco Ovalle</h3>
                <p className="text-blue-600 font-semibold">Founder</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transform hover:-translate-y-1 transition-all duration-300">
                <div className="relative inline-block mb-6">
                  <Image
                    src="/aboutus-images/1724261669050.jpg"
                    alt="Sebastian Castro"
                    width={150}
                    height={150}
                    className="rounded-full mx-auto ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sebastian Castro</h3>
                <p className="text-blue-600 font-semibold">Head of Growth</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transform hover:-translate-y-1 transition-all duration-300">
                <div className="relative inline-block mb-6">
                  <Image
                    src="/aboutus-images/1744670789746.jpg"
                    alt="Juanita Angel"
                    width={150}
                    height={150}
                    className="rounded-full mx-auto ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Juanita Angel</h3>
                <p className="text-blue-600 font-semibold">Head of Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative text-center py-28 px-4 overflow-hidden">
        {/* Professional Blue Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        
        {/* Subtle Light Accent */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Revolutionize Your Sales?
          </h2>
          <p className="text-xl mt-6 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Let's build the future of your sales pipeline, together.
          </p>
          <Link href="/book-a-call">
            <button className="mt-12 bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform">
              Book a Free Demo
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;