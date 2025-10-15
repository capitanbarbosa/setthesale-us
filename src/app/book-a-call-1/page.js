import Link from "next/link";

const BookCallPage = () => {
  return (
    <div className="bg-gray-900 text-white">
      <section className="text-center py-20 px-4 bg-gray-900">
        <h1 className="text-5xl font-bold text-purple-400">
          Book a Free Growth Audit
        </h1>
        <p className="text-xl mt-4 max-w-2xl mx-auto text-gray-300">
          Ready to see how AI can fill your sales pipeline? Schedule a free,
          no-obligation growth audit with our team.
        </p>
      </section>

      <section className="py-10 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">
            Schedule Your Call
          </h2>
          <p className="text-gray-400 mb-8">
            Choose a time that works for you from the calendar below. We'll
            discuss your current sales process, identify areas for improvement,
            and show you exactly how Set The Sale can help you achieve your
            revenue goals.
          </p>

          {/* Calendly embed */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <iframe
              src="https://calendly.com/pachocripto/initial-consultation-companies?background_color=1f2937&text_color=ffffff&primary_color=9333ea"
              width="100%"
              height="700"
              frameBorder="0"
              title="Schedule a consultation"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookCallPage;
