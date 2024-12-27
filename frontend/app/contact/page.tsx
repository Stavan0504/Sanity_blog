'use client'
export default function ContactUs() {
    return (
      <div className="bg-gray-900 text-gray-200 min-h-screen">
        <div className="container mx-auto px-6 py-12 flex justify-center">
          <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-lg">
            <h1 className="text-4xl font-bold text-amber-400 mb-6 text-center">
              Contact Us
            </h1>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-3 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring focus:ring-amber-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-3 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring focus:ring-amber-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Write your message"
                  className="w-full p-3 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring focus:ring-amber-400"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-amber-400 text-black font-semibold rounded-md hover:bg-amber-500 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  