import React from 'react';

const Card = ({ image, title, description }) => {
  return (
    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-blue-500/30 flex flex-col items-center text-center w-full max-w-sm mx-auto">
      <div className="absolute inset-0 bg-blue-500/10 rounded-2xl filter blur-xl animate-pulse"></div>
      <img
        className="relative w-full h-48 object-cover rounded-md mb-4 transition-transform duration-500 hover:scale-105"
        src={image}
        alt={title}
      />
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-4 text-orange-300">{title}</h3>
        <p className="text-base text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default Card;
