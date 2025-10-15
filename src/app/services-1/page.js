import Link from "next/link";

const ServicesPage1 = () => {
  const services = [
    {
      title: "Multi-Channel AI Engagement",
      description: "We engage leads on every channel — so you’re first to respond.",
    },
    {
      title: "AI Lead Qualification",
      description: "We qualify your leads 24/7, so you don’t waste time on the wrong ones.",
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
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold text-purple-400">Our Services</h1>
        <p className="text-xl mt-4 max-w-3xl mx-auto text-gray-300">
          We blend into your sales ops, up to half of the cost! A step-by-step
          roadmap to success. Smarter Sales Starts with Smarter Qualification.
        </p>
        <p className="text-lg mt-6 max-w-3xl mx-auto text-gray-400">
          We combine AI automation, data, and psychology to replace the old way
          of doing lead qualification — so you can scale pipeline without
          scaling payroll.
        </p>
      </section>

      {/* Services List Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Appointment As A Service
          </h2>
          <p className="text-center text-xl max-w-2xl mx-auto text-gray-400 mb-16">
            A fully managed, AI-powered sales development rep — without the
            salary.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-purple-400">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white">
            Ready to Automate Your Pipeline?
          </h2>
          <p className="text-xl mt-4 max-w-2xl mx-auto text-gray-300">
            Let us show you how our AI-powered services can revolutionize your
            sales process and drive unprecedented growth.
          </p>
          <Link
            href="/book-a-call-1"
            className="mt-8 inline-block bg-purple-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-purple-700 transition-colors"
          >
            Book a Free Growth Audit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage1;
