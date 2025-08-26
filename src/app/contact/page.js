"use client";

import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to a server
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <section className="text-center py-20 px-4 bg-gray-50">
        <h1 className="text-5xl font-bold text-blue-900">Contact Us</h1>
        <p className="text-xl mt-4 max-w-2xl mx-auto text-gray-600">
          Have a question or want to work with us? Drop us a line!
        </p>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-8 text-blue-900">
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full bg-white border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full bg-white border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full bg-white border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-red-400 to-pink-500 text-white font-bold py-3 px-8 rounded-lg text-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold text-blue-900">
              Or email us directly
            </h3>
            <p className="mt-2 text-lg text-blue-600">info@setthesale.us</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
