import React from "react";

function Contact() {
  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-white to-indigo-50 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            Get in <span className="text-indigo-600">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">We’d love to hear from you—whether you're looking for partnership opportunities, support, feedback, or just want to connect. Our team will get back to you shortly.</p>
        </div>

        {/* FORM CARD */}
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10 border border-gray-100">
          <form className="space-y-6">
            <div>
              <label className="block text-left text-gray-700 font-medium mb-1">Your Name</label>
              <input type="text" placeholder="Enter your full name" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>

            <div>
              <label className="block text-left text-gray-700 font-medium mb-1">Email Address</label>
              <input type="email" placeholder="example@mail.com" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>

            <div>
              <label className="block text-left text-gray-700 font-medium mb-1">Message</label>
              <textarea rows="5" placeholder="Write your message..." className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none resize-none"></textarea>
            </div>

            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition transform hover:scale-[1.02] active:scale-95 shadow-lg">
              Send Message
            </button>
          </form>
        </div>

        {/* CONTACT INFO SECTION */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Prefer direct email?</h2>
          <p className="text-gray-600 text-lg">
            Reach us anytime at
            <span className="text-indigo-600 font-semibold ml-1">support@boldly.com</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
