'use client';

import React from 'react';
import Link from 'next/link';

const AboutPage3 = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Professional Blue Gradient */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        
        {/* Subtle accent */}
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">About <span className="text-blue-200">Set the Sale</span></h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">Transforming sales through intelligent automation and strategic thinking</p>
        </div>
      </section>

      {/* Beyond Sales Section */}
      <section className="relative py-24 px-4 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/40 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="order-2 md:order-1 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-blue-600/10 rounded-2xl group-hover:bg-blue-600/20 transition duration-500"></div>
              <img 
                src="/images/royalty-free/pexels-padrinan-1111368.jpg" 
                alt="Professional business analytics dashboard" 
                className="relative rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition duration-500"
              />
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Beyond Sales</h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that technology should amplify human potential, not replace it. 
              Our approach combines the precision of AI with the creativity and intuition 
              that only humans can provide.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every client is unique, and we tailor our solutions to fit your specific 
              business needs and goals. We don't believe in one-size-fits-all approaches.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              The result is an extraordinary, value-creating, future-building 
              for both your company, team and clients.
            </p>
          </div>
        </div>
      </section>

      {/* Digital Empowerment Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_70%)]"></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Digital Empowerment</h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Redefining how businesses capture, nurture and convert 
              prospects into high-value customers using intelligent automation 
              and strategic thinking.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We combine cutting-edge technology with proven sales methodologies 
              to create systems that work while you sleep, bringing qualified 
              leads directly to your calendar.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From automated lead qualification to personalized follow-up sequences, 
              we transform your sales process into a predictable, scalable machine 
              that drives consistent growth month after month.
            </p>
          </div>
          <div className="group">
            <div className="relative">
              <div className="absolute -inset-1 bg-blue-600/10 rounded-2xl group-hover:bg-blue-600/20 transition duration-500"></div>
              <img 
                src="/images/royalty-free/christina-wocintechchat-com-vzfgh3RAPzM-unsplash.jpg" 
                alt="Team collaboration and brainstorming" 
                className="relative rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="bg-white border border-blue-100 p-8 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Results-Driven Excellence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We measure success by delivering exceptional results that exceed expectations 
                and drive sustainable business growth.
              </p>
            </div>
            <div className="bg-white border border-blue-100 p-8 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Revenue-Centered Growth</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our strategies focus on generating measurable revenue increases 
                through optimized sales processes and customer acquisition.
              </p>
            </div>
            <div className="bg-white border border-blue-100 p-8 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Seamless Execution</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We pride ourselves on flawless implementation and smooth project 
                delivery that minimizes disruption to your business.
              </p>
            </div>
            <div className="bg-white border border-blue-100 p-8 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trust Through Transparency</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Building lasting partnerships through clear communication, 
                honest reporting, and complete transparency in all our processes.
              </p>
            </div>
          </div>

          {/* Empowered Performance */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-12 text-center">
            <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230F172A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Empowered Performance
              </h2>
              <h3 className="text-2xl font-semibold text-blue-600 mb-8">
                Delivered Simply
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
                We simplify complex AI-driven sales systems into easy-to-understand, 
                manageable solutions that deliver immediate impact and long-term value 
                for your business growth.
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our team transforms cutting-edge technology into practical tools 
                that work seamlessly with your existing processes, ensuring smooth 
                adoption and maximum ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230F172A' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")"}}></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Faces Behind Set the Sale</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300">
                  <img 
                    src="/images/royalty-free/pexels-pixabay-162583.jpg" 
                    alt="Francisco Davila" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Francisco Davila</h3>
                <p className="text-blue-600 font-semibold">Founder</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300">
                  <img 
                    src="/images/royalty-free/pexels-karolina-grabowska-7195310.jpg" 
                    alt="Sebastian Castro" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sebastian Castro</h3>
                <p className="text-blue-600 font-semibold">Head of Growth</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300">
                  <img 
                    src="/images/royalty-free/pexels-padrinan-1111369.jpg" 
                    alt="Jessica Angel" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Jessica Angel</h3>
                <p className="text-blue-600 font-semibold">Head of Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working for You Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Working for You</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-16">
            We partner with Fortune 500 companies serving SME clients who know what 
            they want and value working with the experts who deliver exceptional results.
          </p>
          
          <div className="flex justify-center items-center space-x-16">
            <div className="text-7xl font-bold text-gray-300">E</div>
            <div className="w-20 h-20 border-2 border-gray-200 rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-gray-300 text-3xl font-bold">C</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        
        {/* Subtle accent */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Become 
              <br />
              Future-Proof?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Let's transform your sales process with intelligent automation
            </p>
            <Link href="/book-a-call">
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform">
                Book a Free Demo →
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage3;