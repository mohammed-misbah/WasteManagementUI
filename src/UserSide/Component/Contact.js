import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-teal-950 to-gray-900 text-white overflow-hidden relative">
      <Navbar />

      {/* Animated Background Layers */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-10 left-10 w-80 h-80 bg-teal-500/30 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-100 h-100 bg-purple-500/30 rounded-lg filter blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-20 right-20 w-60 h-60 bg-cyan-500/20 rounded-tl-full filter blur-2xl animate-float-slow"></div>
      </div>

      {/* Contact Section */}
      <section className="relative py-20 px-4 z-10">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto bg-gray-900/70 border-t-4 border-teal-500/50 p-8 rounded-none shadow-2xl transform transition-all duration-500 hover:shadow-teal-500/30">
            <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 animate-fade-in">
              Contact Information
            </h2>
            <div className="space-y-4">
              <p className="text-xl font-semibold text-gray-200">URBAN TRASH</p>
              <p className="text-lg text-gray-400">
                CHAYICKARA HOUSE, PERINGALA PO, KUNNATHUNAD, ERNAKULAM,
              </p>
              <p className="text-lg text-gray-400">Ernakulam, Kerala, India, 683565</p>
              <p className="text-lg text-gray-400">Call Us - 623 0606 623, 890 7780 555</p>
              <p className="text-lg text-gray-400">Email - info@urbantrash.in</p>
              <p className="text-lg font-medium text-gray-300 mt-4">Working Hours:</p>
              <p className="text-lg text-gray-400">Monday - Saturday: 8AM–6PM</p>
              <p className="text-red-400 font-medium animate-pulse-slow">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1.5s ease-in-out; }
      `}</style>
    </div>
  );
};

export default Contact;