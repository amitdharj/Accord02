import React from 'react';



 function ProgramSection() {
  return (
    <div className="relative bg-gradient-to-br from-orange-300 via-orange-400 to-orange-400 min-h-100 pb-40 overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-96 px-8">
        {/* About heading */}
        <h1 className="text-white text-6xl lg:text-7xl font-bold mb-6">
          Programs Grid
        </h1>
        
        {/* Breadcrumb navigation */}
        <nav className="flex items-center space-x-2 text-white text-lg">
          <a href="#" className="hover:text-orange-100 transition-colors">
            Home
          </a>
          <span className="text-orange-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="text-orange-100">Programs Grid</span>
        </nav>
      </div>

      {/* Decorative elements */}
      {/* Planet with rocket - top left */}
      <div className="absolute top-16 left-20 animate-bounce">
        <div className="relative">
          {/* Planet */}
          <div className="w-16 h-16 bg-cyan-500 bg-opacity-20 rounded-full relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-white bg-opacity-30 rounded-full rotate-12"></div>
          </div>
          {/* Rocket */}
          <div className="absolute -top-4 -right-2">
            <div className="w-3 h-8 bg-cyan-400 bg-opacity-30 rounded-t-full"></div>
            <div className="w-4 h-2 bg-stone-600 bg-opacity-30 rounded-b mx-auto -mt-1"></div>
          </div>
        </div>
      </div>

      {/* Molecules/atoms - top right */}
      <div className="absolute top-12 right-40 animate-spin">
        <div className="relative">
          {/* Central atom */}
          <div className="w-6 h-6 bg-white bg-opacity-30 rounded-full"></div>
          {/* Orbiting electrons */}
          <div className="absolute -top-3 -left-3 w-3 h-3 bg-white bg-opacity-40 rounded-full"></div>
          <div className="absolute -bottom-3 -right-3 w-3 h-3 bg-white bg-opacity-40 rounded-full"></div>
          <div className="absolute top-1 -right-4 w-2 h-2 bg-white bg-opacity-40 rounded-full"></div>
          {/* Orbital paths */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-8 border border-white border-opacity-20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-12 border border-white border-opacity-20 rounded-full rotate-45"></div>
        </div>
      </div>

      {/* Hot air balloon - top right */}
      <div className="absolute top-8 right-16">
        <div className="relative">
          {/* Balloon */}
          <div className="w-12 h-16 bg-pink-500 rounded-full relative overflow-hidden animate-pulse">
            {/* Balloon stripes */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-cyan-500"></div>
            <div className="absolute top-6 left-0 right-0 h-3 bg-cyan-500"></div>
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-cyan-500"></div>
          </div>
          {/* Strings */}
          <div className="absolute top-full left-1/4 w-px h-4 bg-white bg-opacity-40"></div>
          <div className="absolute top-full right-1/4 w-px h-4 bg-white bg-opacity-40"></div>
          {/* Basket */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 translate-y-4 w-4 h-2 bg-amber-600 rounded-sm"></div>
        </div>
      </div>

      {/* Character - left side */}
      <div className="absolute bottom-20 left-16">
        <div className="relative">
          {/* Head */}
          <div className="w-12 h-12 bg-orange-200 rounded-full relative">
            {/* Hair */}
            <div className="absolute -top-2 left-1 right-1 h-6 bg-orange-600 rounded-t-full"></div>
            {/* Face features */}
            <div className="absolute top-3 left-3 w-1 h-1 bg-gray-800 rounded-full"></div>
            <div className="absolute top-3 right-3 w-1 h-1 bg-gray-800 rounded-full"></div>
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-pink-400 rounded-full"></div>
          </div>
          {/* Body */}
          <div className="w-8 h-12 bg-blue-400 rounded-t-lg mx-auto -mt-2"></div>
          {/* Arms */}
          <div className="absolute top-8 -left-2 w-6 h-2 bg-orange-200 rounded-full transform -rotate-12"></div>
          <div className="absolute top-8 -right-2 w-6 h-2 bg-orange-200 rounded-full transform rotate-12"></div>
        </div>
      </div>

      {/* Book/tablet - right side */}
      <div className="absolute bottom-16 right-20 animate-ping duration-1000">
        <div className="w-8 h-10 bg-white bg-opacity-30 rounded-lg transform rotate-12 relative">
          {/* Screen/page lines */}
          <div className="absolute top-2 left-1 right-1 h-px bg-white bg-opacity-40"></div>
          <div className="absolute top-4 left-1 right-1 h-px bg-white bg-opacity-40"></div>
          <div className="absolute top-6 left-1 right-1 h-px bg-white bg-opacity-40"></div>
        </div>
      </div>

      {/* Curved bottom border */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 80"
          className="w-full h-20"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 Q50,20 100,40 T200,40 Q250,20 300,40 T400,40 Q450,20 500,40 T600,40 Q650,20 700,40 T800,40 Q850,20 900,40 T1000,40 Q1050,20 1100,40 T1200,40 L1200,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}

export default ProgramSection;
3