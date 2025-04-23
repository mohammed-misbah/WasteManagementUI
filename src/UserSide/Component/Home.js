import React, { useState, useEffect } from 'react';
import waste1 from '../images/waste 1.jpeg';
import waste2 from '../images/waste 2.jpg';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    // Preload images to avoid flickering
    const img1 = new Image();
    const img2 = new Image();
    img1.src = waste1;
    img2.src = waste2;

    // Automatically cycle through images every 5 seconds
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === 0 ? 1 : 0));
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const images = [
    {
      src: waste1,
      alt: 'Waste Management',
      text: 'Waste Solutions',
    },
    {
      src: waste2,
      alt: 'Scrap Collection',
      text: 'Scrap Collection',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-teal-950 to-gray-900 text-white overflow-hidden">
      <Navbar />

      {/* Spacious Hero Section with Split Layout */}
      <section className="relative overflow-hidden py-32 px-4">
        {/* Animated Background Layers */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-10 left-10 w-80 h-80 bg-teal-500/30 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-100 h-100 bg-purple-500/30 rounded-lg filter blur-3xl animate-float delay-1000"></div>
          <div className="absolute top-20 right-20 w-60 h-60 bg-orange-500/20 rounded-tl-full filter blur-2xl animate-float-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Text Section */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 animate-fade-in">
              Welcome to Urban Trash
            </h1>
            <p className="text-xl text-gray-300 max-w-md">
              Revolutionizing waste management with sustainable solutions for a cleaner future.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="/wastepickup"
                className="px-6 py-3 bg-teal-600 rounded-lg text-lg font-semibold hover:bg-teal-500 transition-colors duration-300 animate-pulse-slow"
              >
                Waste Pickup
              </a>
              <a
                href="/scrappickup"
                className="px-6 py-3 bg-orange-600 rounded-lg text-lg font-semibold hover:bg-orange-500 transition-colors duration-300 animate-pulse-slow"
              >
                Scrap Pickup
              </a>
            </div>
          </div>

          {/* Right Image Slideshow Section */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative h-64 overflow-hidden rounded-xl shadow-xl">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentImage === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="relative group overflow-hidden rounded-xl transform transition-all duration-500 hover:scale-105">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover filter grayscale group-hover:grayscale-0 transition-filter duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-white text-lg font-bold">{image.text}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

        {/* About Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-950 via-teal-950 to-gray-900">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-orange-400 animate-fade-in">
            About Urban Trash
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Text Section */}
            <div className="text-center md:text-left space-y-6 md:w-1/2">
              <p className="text-lg text-gray-300">
                At Urban Trash, we are committed to providing top-notch waste management services tailored for both B2B customers and households. Our mission is to collect waste efficiently, ensuring a cleaner and healthier environment for everyone. From businesses with large-scale waste needs to individual homes, we fetch, sort, and manage waste with precision and care.
              </p>
              <p className="text-lg text-gray-300">
                Beyond collection, we focus on sustainability by integrating advanced recycling techniques, reducing landfill dependency, and promoting eco-friendly practices. Our team is passionate about innovation, using cutting-edge technology to streamline waste disposal and contribute to a circular economy.
              </p>
              <p className="text-lg text-gray-300">
                We believe in building a greener future, one pickup at a time. Partner with us to make a difference in your community and beyond!
              </p>
            </div>

            {/* Right Image Section */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative h-80 overflow-hidden rounded-xl shadow-xl transform transition-all duration-500 hover:scale-105">
                <img
                  src={waste2}
                  alt="About Urban Trash"
                  className="w-full h-full object-cover filter brightness-75 hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">A Cleaner Tomorrow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-950 via-teal-950 to-gray-900">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-orange-400 animate-fade-in">
            Our Services
          </h2>
          <div className="relative overflow-x-auto scrollbar-hide">
            <div className="flex space-x-6 py-4">
              {/* Service Tile 1 */}
              <div className="min-w-[300px] h-[400px] relative group overflow-hidden rounded-xl bg-gray-800/60 backdrop-blur-md hover:bg-teal-900/70 transition-all duration-500">
                <img
                  src={waste1}
                  alt="Efficient Waste Solutions"
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-center p-4">
                    <h3 className="text-2xl font-bold text-white">Efficient Waste Solutions</h3>
                    <p className="text-gray-200 mt-2">
                      Implementing innovative strategies for effective waste management and environmental sustainability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Tile 2 */}
              <div className="min-w-[300px] h-[400px] relative group overflow-hidden rounded-xl bg-gray-800/60 backdrop-blur-md hover:bg-orange-900/70 transition-all duration-500">
                <img
                  src={waste2}
                  alt="Recycling Initiatives"
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-center p-4">
                    <h3 className="text-2xl font-bold text-white">Recycling Initiatives</h3>
                    <p className="text-gray-200 mt-2">
                      Promoting recycling programs to reduce waste and conserve natural resources.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Tile 3 */}
              <div className="min-w-[300px] h-[400px] relative group overflow-hidden rounded-xl bg-gray-800/60 backdrop-blur-md hover:bg-purple-900/70 transition-all duration-500">
                <img
                  src={waste1}
                  alt="Community Engagement"
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-center p-4">
                    <h3 className="text-2xl font-bold text-white">Community Engagement</h3>
                    <p className="text-gray-200 mt-2">
                      Collaborating with communities to raise awareness and encourage responsible waste disposal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Custom CSS for Animations
const styles = `
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
    50% { transform: scale(1.05); }
  }
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes slide-up {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-float { animation: float 6s ease-in-out infinite; }
  .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
  .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
  .animate-fade-in { animation: fade-in 1.5s ease-in-out; }
  .animate-slide-up { animation: slide-up 1s ease-out; }
  .group:hover .transform { transform-style: preserve-3d; }
`;

// Add the styles to your component or a global CSS file
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default Home;