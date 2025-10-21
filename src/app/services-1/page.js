import Link from "next/link";

const ServicesPage1 = () => {
  const services = [
    {
      title: "Multi-Channel AI Engagement",
      description: "We engage leads on every channel — so you're first to respond.",
    },
    {
      title: "AI Lead Qualification",
      description: "We qualify your leads 24/7, so you don't waste time on the wrong ones.",
    },
    {
      title: "Automated Appointment Setting",
      description: "We book meetings with qualified leads directly on your calendar.",
    },
    {
      title: "Data Enrichment & Cleansing",
      description: "We enrich your lead data to give your sales team the insights they need.",
    },
    {
      title: "CRM & Sales Tools Integration",
      description: "We integrate with your existing sales stack for a seamless workflow.",
    },
    {
      title: "Performance Analytics & Reporting",
      description: "We provide detailed analytics on campaign performance and ROI.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-xl mt-6 max-w-3xl mx-auto text-gray-600 leading-relaxed">
            We blend into your sales ops, up to half of the cost! A step-by-step
            roadmap to success. Smarter Sales Starts with Smarter Qualification.
          </p>
          <p className="text-lg mt-4 max-w-3xl mx-auto text-gray-500">
            We combine AI automation, data, and psychology to replace the old way
            of doing lead qualification — so you can scale pipeline without
            scaling payroll.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Appointment As A Service
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl max-w-2xl mx-auto text-gray-600 leading-relaxed">
              A fully managed, AI-powered sales development rep — without the
              salary.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 transform hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-blue-600 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative text-center py-28 px-4 overflow-hidden">
        {/* Professional Blue Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        
        {/* Subtle accent */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Pipeline?
          </h2>
          <p className="text-xl mt-6 max-w-2xl mx-auto text-blue-100 leading-relaxed">
            Let us show you how our AI-powered services can revolutionize your
            sales process and drive unprecedented growth.
          </p>
          <Link
            href="/book-a-call-1"
            className="mt-12 inline-block bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
          >
            Book a Free Growth Audit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage1;