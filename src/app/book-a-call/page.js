import Link from "next/link";

const BookCallPage = () => {
  return (
    <div className="bg-gray-950 text-white">
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold">Book a Free Growth Audit</h1>
        <p className="text-xl mt-4 max-w-2xl mx-auto text-gray-300">
          Ready to see how AI can fill your sales pipeline? Schedule a free,
          no-obligation growth audit with our team.
        </p>
      </section>

      <section className="py-10 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Schedule Your Call</h2>
          <p className="text-gray-400 mb-8">
            Choose a time that works for you from the calendar below. We'll
            discuss your current sales process, identify areas for improvement,
            and show you exactly how Set The Sale can help you achieve your
            revenue goals.
          </p>

          {/* Placeholder for Calendly or other scheduling tool embed */}
          <div className="bg-gray-900 p-8 rounded-lg min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-lg text-gray-500 mb-4">
                Scheduling calendar will be embedded here.
              </p>
              <a
                href="https://calendly.com" // Replace with actual scheduling link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg"
              >
                Book on Calendly
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookCallPage;
