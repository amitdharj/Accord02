import React from "react";

export default function ContactSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Contact Info */}
        <div className="bg-orange-200 rounded-lg overflow-hidden text-stone-600">
          <div className="p-8 space-y-6">
            {/* Phone */}
            <div className="flex items-start space-x-4 border-b border-orange-300 pb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 010 1.414L8.414 9.414a1 1 0 000 1.414l4.95 4.95a1 1 0 001.414 0l2.293-2.293a1 1 0 011.414 0l2.414 2.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-1c-9.941 0-18-8.059-18-18V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm">Call Us 7/24</p>
                <p className="font-bold text-lg">+208-555-0112</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4 border-b border-orange-300 pb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12H8m0 0l-4-4m4 4l-4 4m16-4H8"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm">Make a Quote</p>
                <p className="font-bold text-lg">Infotech@example.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19.5 8c0 7-7.5 12-7.5 12S4.5 15 4.5 8A7.5 7.5 0 0112 0a7.5 7.5 0 017.5 8z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm">Location</p>
                <p className="font-bold text-lg">4517 Washington ave.</p>
              </div>
            </div>
          </div>

          {/* Image with play button */}
          <div className="relative">
            <img
              src="/2ndInstructor.png" // replace with your image path
              alt="Contact"
              className="w-full h-72 object-top-right object-cover"
            />
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white text-orange-400 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.5 5.5v9l8-4.5-8-4.5z" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Right Side - Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Ready To Get Started?
          </h2>
          <p className="text-gray-500 mb-6">
            Nullam varius, erat quis iaculis dictum, eros urna varius eros, ut
            blandit felis odio in turpis. Quisque rhoncus, eros in auctor
            ultrices.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-orange-400 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>
            <textarea
              rows="4"
              placeholder="Write Message"
              className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-orange-400 outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-400 text-white px-6 py-3 rounded-full hover:bg-orange-500 transition"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
