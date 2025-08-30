import React from 'react';

export default function KidsLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300 relative overflow-hidden">
      {/* Curved top border */}
      <div className="absolute top-0 left-0 right-0 h-16">
        <svg
          viewBox="0 0 1200 100"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 Q300,80 600,40 T1200,0 L1200,100 L0,100 Z"
            fill="currentColor"
            className="text-orange-400"
          />
        </svg>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex items-center justify-between min-h-screen px-8 lg:px-16">
        {/* Left side content */}
        <div className="flex-1 max-w-2xl">
          <div className="mb-8">
            <p className="text-stone-700 text-lg font-medium mb-4">Get Your Quality</p>
            <h1 className="text-stone-700 text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Skills Certificate From<br />
              The Kidsa
            </h1>
            <button className="bg-stone-400 text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2 shadow-lg">
              Apply Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Right side - Girl with book */}
        <div className="flex-1 flex justify-center items-center relative">
          {/* Background cloud shape */}
          <div className="absolute w-96 h-96 bg-cyan-300 rounded-full transform rotate-12 opacity-80"></div>
          
          {/* Girl image placeholder */}
          <div className="relative z-10 w-80 h-96 bg-gray-200 rounded-2xl flex items-end justify-center overflow-hidden">
            {/* Simulated girl figure */}
            <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400 relative">
              {/* Hair */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-24 bg-yellow-600 rounded-full"></div>
              {/* Face */}
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-20 h-24 bg-pink-200 rounded-2xl"></div>
              {/* Book on head */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-amber-800 rounded-sm"></div>
              {/* Body */}
              <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-28 h-40 bg-gray-400 rounded-t-2xl"></div>
              {/* Arms up gesture */}
              <div className="absolute top-36 left-8 w-8 h-20 bg-pink-200 rounded-full transform -rotate-45"></div>
              <div className="absolute top-36 right-8 w-8 h-20 bg-pink-200 rounded-full transform rotate-45"></div>
              {/* Legs */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-x-4 w-6 h-24 bg-blue-800 rounded-b-lg"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-x-4 w-6 h-24 bg-blue-800 rounded-b-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20">
        {/* Hot air balloon */}
        <div className="relative">
          <div className="w-16 h-20 bg-white bg-opacity-20 rounded-full border-2 border-white border-opacity-40"></div>
          <div className="w-4 h-8 bg-white bg-opacity-20 mx-auto"></div>
          <div className="w-8 h-4 bg-white bg-opacity-20 mx-auto rounded"></div>
        </div>
      </div>

      <div className="absolute top-32 right-20">
        {/* Hot air balloon 2 */}
        <div className="relative">
          <div className="w-12 h-15 bg-cyan-300 rounded-full"></div>
          <div className="w-3 h-6 bg-white bg-opacity-40 mx-auto"></div>
          <div className="w-6 h-3 bg-white bg-opacity-40 mx-auto rounded"></div>
        </div>
      </div>

      <div className="absolute bottom-40 left-16">
        {/* Pencil icon */}
        <div className="w-8 h-20 bg-white bg-opacity-20 rounded-full transform rotate-12"></div>
      </div>

      <div className="absolute bottom-32 left-32">
        {/* Planet with ring */}
        <div className="relative">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-white bg-opacity-20 rounded-full rotate-12"></div>
        </div>
      </div>

      <div className="absolute bottom-20 right-32">
        {/* Paper plane */}
        <div className="w-8 h-8 bg-white bg-opacity-20 transform rotate-45" style={{clipPath: 'polygon(0 0, 100% 50%, 0 100%, 20% 50%)'}}></div>
      </div>

      <div className="absolute top-1/2 left-8">
        {/* Rocket */}
        <div className="relative">
          <div className="w-4 h-16 bg-white bg-opacity-20 rounded-t-full"></div>
          <div className="w-6 h-4 bg-white bg-opacity-20 rounded-b mx-auto"></div>
        </div>
      </div>

      <div className="absolute bottom-1/3 right-16">
        {/* Curved arrow */}
        <div className="w-16 h-16">
          <svg viewBox="0 0 64 64" className="w-full h-full text-white opacity-20">
            <path d="M10 10 Q50 10 50 50" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="4,4"/>
            <path d="M45 45 L50 50 L45 55" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
      </div>

      {/* Curved bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <svg
          viewBox="0 0 1200 100"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 Q300,20 600,60 T1200,100 L1200,0 L0,0 Z"
            fill="currentColor"
            className="text-orange-400"
          />
        </svg>
      </div>
    </div>
  );
}