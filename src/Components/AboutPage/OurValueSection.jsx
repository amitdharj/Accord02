import React from 'react';

export default function OurValueSection() {
  return (
    <div className="bg-gradient-to-t from-white to-orange-100 py-16 px-8 relative overflow-hidden">
      {/* Decorative Background Elements */}
      {/* Rainbow with clouds - left side */}
      <div className="absolute top-8 left-16 animate-pulse">
        <div className="relative">
          {/* Rainbow arcs */}
          <div className="w-24 h-12 border-t-4 border-red-400 rounded-t-full"></div>
          <div className="w-20 h-10 border-t-4 border-orange-400 rounded-t-full mt-1 ml-2"></div>
          <div className="w-16 h-8 border-t-4 border-yellow-400 rounded-t-full mt-1 ml-4"></div>
          <div className="w-12 h-6 border-t-4 border-green-400 rounded-t-full mt-1 ml-6"></div>
          <div className="w-8 h-4 border-t-4 border-blue-400 rounded-t-full mt-1 ml-8"></div>
          
          {/* Clouds */}
          <div className="absolute -top-2 -left-4">
            <div className="w-8 h-6 bg-white rounded-full relative">
              <div className="absolute -top-1 left-2 w-6 h-4 bg-white rounded-full"></div>
              <div className="absolute -top-2 left-4 w-5 h-5 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="absolute -top-2 right-2">
            <div className="w-6 h-4 bg-white rounded-full relative">
              <div className="absolute -top-1 left-1 w-4 h-3 bg-white rounded-full"></div>
            </div>
          </div>
          
          {/* Star */}
          <div className="absolute -top-6 left-8 text-orange-400 animate-spin" style={{animationDuration: '4s'}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Planet with rocket - right side */}
      <div className="absolute top-8 right-16 animate-bounce" style={{animationDuration: '3s'}}>
        <div className="relative">
          {/* Planet */}
          <div className="w-16 h-16 bg-purple-300 rounded-full relative overflow-hidden">
            <div className="absolute top-2 left-2 w-4 h-4 bg-purple-400 rounded-full"></div>
            <div className="absolute bottom-3 right-3 w-3 h-3 bg-purple-400 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-purple-200 rounded-full rotate-12"></div>
          </div>
          {/* Rocket */}
          <div className="absolute -top-4 -right-2 animate-pulse">
            <div className="w-3 h-8 bg-white rounded-t-full border-2 border-purple-300"></div>
            <div className="w-4 h-2 bg-red-400 rounded-b mx-auto -mt-1"></div>
            {/* Rocket flame */}
            <div className="w-2 h-3 bg-orange-400 rounded-b mx-auto animate-pulse"></div>
          </div>
          {/* Stars around planet */}
          <div className="absolute -top-2 -left-2 text-yellow-400 animate-pulse">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/3 left-1/4 animate-float">
        <div className="w-4 h-4 bg-blue-300 rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-1/3 right-1/4 animate-float" style={{animationDelay: '1s'}}>
        <div className="w-6 h-6 bg-pink-300 rotate-45 opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <p className="text-orange-400 font-semibold text-lg mb-4">Our Values</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            The Best Playschool<br />For Your Kid
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left column - Features */}
          <div className="space-y-6">
            {/* Teacher Training */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="flex-1 ">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Teacher Training And Progress</h3>
                    <p className="text-gray-600 mb-2">Adipiscing elit Praesent luctus laoreet iaculis</p>
                    <p className="text-gray-600 text-sm">Curabitur rutrum lectus augue, ut pulvinar.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nanny Selection */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2V7zm0 0V5a2 2 0 012-2h6l2 2h6a2 2 0 012 2v2H3z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Nanny Selection 24/7</h3>
                    <p className="text-gray-600 mb-2">Adipiscing elit Praesent luctus laoreet iaculis</p>
                    <p className="text-gray-600 text-sm">Curabitur rutrum lectus augue, ut pulvinar.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center column - Main image */}
          <div className="flex justify-center lg:order-none -order-1">
            <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              {/* Background decorative circle */}
              <div className="absolute -inset-8 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-20 animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-96 bg-gradient-to-b from-blue-50 to-blue-100 rounded-3xl overflow-hidden shadow-2xl">
                {/* Graduation cap */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-24 h-6 bg-blue-800 rounded-lg relative">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-blue-900 rounded-full"></div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-yellow-500"></div>
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>

                {/* Character */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  {/* Head */}
                  <div className="w-24 h-28 bg-pink-200 rounded-full mx-auto mb-2 relative">
                    {/* Hair */}
                    <div className="absolute -top-4 left-2 right-2 h-12 bg-yellow-600 rounded-t-full"></div>
                    {/* Eyes */}
                    <div className="absolute top-8 left-6 w-2 h-2 bg-gray-800 rounded-full"></div>
                    <div className="absolute top-8 right-6 w-2 h-2 bg-gray-800 rounded-full"></div>
                    {/* Smile */}
                    <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-8 h-4 border-b-2 border-gray-800 rounded-full"></div>
                  </div>
                  {/* Body - Graduation gown */}
                  <div className="w-32 h-40 bg-blue-700 rounded-t-3xl mx-auto relative">
                    {/* Arms */}
                    <div className="absolute top-8 -left-6 w-8 h-20 bg-pink-200 rounded-full"></div>
                    <div className="absolute top-8 -right-6 w-8 h-20 bg-pink-200 rounded-full"></div>
                    {/* Thumbs up */}
                    <div className="absolute top-6 -right-8 w-4 h-6 bg-pink-200 rounded-full rotate-12"></div>
                    {/* Certificate/diploma */}
                    <div className="absolute top-4 -left-10 w-8 h-12 bg-white rounded border-2 border-yellow-400 transform -rotate-12"></div>
                  </div>
                </div>

                {/* Floating elements around the character */}
                <div className="absolute top-20 left-8 animate-bounce" style={{animationDelay: '0.5s'}}>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                </div>
                <div className="absolute top-32 right-12 animate-bounce" style={{animationDelay: '1s'}}>
                  <div className="w-4 h-4 bg-pink-400 rotate-45"></div>
                </div>
                <div className="absolute bottom-20 left-12 animate-pulse">
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Features */}
          <div className="space-y-6">
            {/* Advanced Placement */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Advanced Placement Courses</h3>
                    <p className="text-gray-600 mb-2">Adipiscing elit Praesent luctus laoreet iaculis</p>
                    <p className="text-gray-600 text-sm">Curabitur rutrum lectus augue, ut pulvinar.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Self-Contained Programs */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Self-Contained Gifted Programs</h3>
                    <p className="text-gray-600 mb-2">Adipiscing elit Praesent luctus laoreet iaculis</p>
                    <p className="text-gray-600 text-sm">Curabitur rutrum lectus augue, ut pulvinar.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}