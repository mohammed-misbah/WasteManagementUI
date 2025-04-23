import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-teal-900 to-gray-800 text-white py-12 overflow-hidden relative">
      {/* Subtle Background Effects */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 rounded-lg filter blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* About Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              About
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Urban Trash Private Limited <br />is a waste management company dedicated to <br />providing sustainable solutions for <br />waste collection and disposal.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/urbantrash.in"
                className="text-teal-400 hover:text-teal-300 transition-colors duration-300 transform hover:scale-110 animate-pulse-slow"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com/urbantrash"
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 transform hover:scale-110 animate-pulse-slow"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/urbantrash.in"
                className="text-purple-400 hover:text-purple-300 transition-colors duration-300 transform hover:scale-110 animate-pulse-slow"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://wa.me/918900778055"
                target="_blank"
                className="text-green-400 hover:text-green-300 transition-colors duration-300 transform hover:scale-110 animate-pulse-slow" rel="noreferrer"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Vertical Divider for Larger Screens */}
          <div className="hidden md:block h-32 w-px bg-gradient-to-b from-teal-500/20 to-purple-500/20 mx-6"></div>

          {/* Contact Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              Contact
            </h2>
            <p className="text-gray-300 leading-relaxed mb-2">
              CHAYICKARA HOUSE, PERINGALA PO, <br />KUNNATHUNAD, ERNAKULAM, <br />Ernakulam, Kerala, India, 683565
            </p>
            <p className="text-gray-300 mt-2">Call Us - 623 0606 623, 890 7780 555</p>
            <p className="text-gray-300">Email - info@urbantrash.in</p>
          </div>

          {/* Vertical Divider for Larger Screens */}
          <div className="hidden md:block h-32 w-px bg-gradient-to-b from-teal-500/20 to-purple-500/20 mx-6"></div>

          {/* Working Hours & Message Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Working Hours
            </h2>
            <p className="text-gray-300 mb-2">Monday - Saturday: 8AM–6PM</p>
            <p className="text-red-400 font-medium animate-pulse-slow">Sunday: Closed</p>
            <textarea
              className="w-full h-20 p-3 mt-4 border border-gray-600 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 resize-none"
              name="message"
              placeholder="Your Message"
            ></textarea>
            <button
              className="w-full mt-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              type="submit"
            >
              Send
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Urban Trash Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-pulse { animation: pulse 2s ease-in-out infinite; }
      `}</style>
    </footer>
  );
};

export default Footer;