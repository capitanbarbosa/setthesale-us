'use client';

import React from 'react';
import Link from 'next/link';

const AboutPage3 = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Blue Gradient */}
      <section className="relative bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20"></div>
        {/* Abstract shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/15 rounded-full blur-lg"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-8">About us</h1>
        </div>
      </section>

      {/* Beyond Sales Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="/public/aboutus-images/About-Page-intro-pic.png" 
              alt="Sales analytics dashboard" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Beyond sales</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We believe that technology should amplify human potential, not replace it. 
              Our approach combines the precision of AI with the creativity and intuition 
              that only humans can provide.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every client is unique, and we tailor our solutions to fit your specific 
              business needs and goals. We don't believe in one-size-fits-all approaches.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The result is an extraordinary, value-creating, future-building 
              for both your company, team and clients.
            </p>
          </div>
        </div>
      </section>

      {/* Digital Empowerment Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Digital empowerment</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Redefining how businesses capture, nurture and convert 
              prospects into high-value customers using intelligent automation 
              and strategic thinking.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We combine cutting-edge technology with proven sales methodologies 
              to create systems that work while you sleep, bringing qualified 
              leads directly to your calendar.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From automated lead qualification to personalized follow-up sequences, 
              we transform your sales process into a predictable, scalable machine 
              that drives consistent growth month after month.
            </p>
          </div>
          <div>
            <img 
              src="/public/aboutus-images/Imagen2.jpg" 
              alt="Team collaboration" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Results-Driven Excellence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We measure success by delivering exceptional results that exceed expectations 
                and drive sustainable business growth.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-green-900 mb-4">Revenue-Centered Growth</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our strategies focus on generating measurable revenue increases 
                through optimized sales processes and customer acquisition.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Seamless Execution</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We pride ourselves on flawless implementation and smooth project 
                delivery that minimizes disruption to your business.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-green-900 mb-4">Trust Through Transparency</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Building lasting partnerships through clear communication, 
                honest reporting, and complete transparency in all our processes.
              </p>
            </div>
          </div>

          {/* Empowered Performance */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Empowered performance.
            </h2>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Delivered Simply
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              We simplify complex AI-driven sales systems into easy-to-understand, 
              manageable solutions that deliver immediate impact and long-term value 
              for your business growth.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our team transforms cutting-edge technology into practical tools 
              that work seamlessly with your existing processes, ensuring smooth 
              adoption and maximum ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-16">The faces behind set the sale</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/public/images/santiago.jpg" 
                  alt="Francisco Davila" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Francisco Davila</h3>
              <p className="text-blue-600 font-semibold">Founder</p>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/public/images/ryan.jpg" 
                  alt="Sebastian Castro" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Sebastian Castro</h3>
              <p className="text-blue-600 font-semibold">Head of Growth</p>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/public/images/lamar.jpg" 
                  alt="Jessica Angel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Jessica Angel</h3>
              <p className="text-blue-600 font-semibold">Head of Marketing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Working for You Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-8">Working for you</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            We partner with Fortune 500 companies serving SME clients who know what 
            they want and value working with the experts who deliver exceptional results.
          </p>
          
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-6xl font-bold text-gray-400">E</div>
            <div className="w-16 h-16 border-2 border-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-2xl font-bold">C</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-20">
          <img 
            src="/public/aboutus-images/CTA-About-new.png" 
            alt="Office workspace" 
            className="w-full h-full object-cover rounded-tl-3xl"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold mb-6">
              Ready to become 
              <br />
              future-proof?
            </h2>
            <Link href="/book-a-call-3">
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                Begin Here →
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage3;