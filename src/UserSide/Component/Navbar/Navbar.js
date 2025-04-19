import React, { useRef, useState } from 'react';
import images from '../../images/urban-trash.jpg';
import { FaBars, FaTimes, FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const navigate = useNavigate();
  const navRef = useRef();
  const { user } = useSelector((state) => state.user);
  const [notifications, setNotifications] = useState([]);
  const [notificationCount, setNotificationCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 w-full z-50 bg-gradient-to-r from-green-900 to-gray-900 shadow-lg">
      <header>
        <nav className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <a href="/">
            <img 
              src={images} 
              alt="logo" 
              className="h-12 sm:h-14 transition-transform duration-300 hover:scale-105" 
              style={{ width: '110px' }} 
            />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 text-white font-semibold">
            <li 
              onClick={() => navigate('/')} 
              className="cursor-pointer px-4 py-2 rounded-full transition-all duration-300 hover:bg-green-700 hover:text-yellow-300"
            >
              Home
            </li>
            <li 
              onClick={() => navigate('/pricelist')} 
              className="cursor-pointer px-4 py-2 rounded-full transition-all duration-300 hover:bg-green-700 hover:text-yellow-300"
            >
              Services
            </li>
            <li 
              onClick={() => navigate('/contact')} 
              className="cursor-pointer px-4 py-2 rounded-full transition-all duration-300 hover:bg-green-700 hover:text-yellow-300"
            >
              Contact
            </li>
            {user ? (
              <li 
                onClick={() => navigate('/user')} 
                className="cursor-pointer px-4 py-2 rounded-full transition-all duration-300 hover:bg-green-700 hover:text-yellow-300"
              >
                {user.name}
              </li>
            ) : (
              <li 
                onClick={() => navigate('/login')} 
                className="cursor-pointer px-4 py-2 rounded-full transition-all duration-300 hover:bg-green-700 hover:text-yellow-300"
              >
                Login
              </li>
            )}
            <li>
              <button className="relative p-2 text-white hover:text-yellow-300 transition-all duration-300">
                <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-1 bg-red-500 rounded-full animate-ping"></span>
                <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-1 bg-red-500 rounded-full"></span>
                <FaBell className="h-6 w-6" />
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={toggleNavbar}
            aria-label="Toggle navigation"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col items-center space-y-4 pb-4 bg-gradient-to-b from-green-900 to-gray-900 text-white font-semibold">
            <li 
              onClick={() => { navigate('/'); setIsOpen(false); }} 
              className="cursor-pointer px-4 py-2 rounded-full hover:bg-green-700 hover:text-yellow-300"
            >
              Home
            </li>
            <li 
              onClick={() => { navigate('/pricelist'); setIsOpen(false); }} 
              className="cursor-pointer px-4 py-2 rounded-full hover:bg-green-700 hover:text-yellow-300"
            >
              Services
            </li>
            <li 
              onClick={() => { navigate('/contact'); setIsOpen(false); }} 
              className="cursor-pointer px-4 py-2 rounded-full hover:bg-green-700 hover:text-yellow-300"
            >
              Contact
            </li>
            {user ? (
              <li 
                onClick={() => { navigate('/user'); setIsOpen(false); }} 
                className="cursor-pointer px-4 py-2 rounded-full hover:bg-green-700 hover:text-yellow-300"
              >
                {user.name}
              </li>
            ) : (
              <li 
                onClick={() => { navigate('/login'); setIsOpen(false); }} 
                className="cursor-pointer px-4 py-2 rounded-full hover:bg-green-700 hover:text-yellow-300"
              >
                Login
              </li>
            )}
            <li>
              <button className="relative p-2 text-white hover:text-yellow-300">
                <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-1 bg-red-500 rounded-full animate-ping"></span>
                <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-1 bg-red-500 rounded-full"></span>
                <FaBell className="h-6 w-6" />
              </button>
            </li>
          </ul>
        )}
      </header>
    </div>
  );
};

export default Navbar;