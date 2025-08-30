import React from 'react';

export default function AboutUsSection() {
  return (
    <div className=" bg-gradient-to-b from-white to-orange-100 py-16 px-8 relative overflow-hidden">
      {/* Animated Sun */}
      <div className="absolute top-8 left-16 animate-pulse">
        <div className="relative">
          <div className="w-12 h-12 bg-yellow-400 rounded-full relative">
            {/* Sun rays */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-yellow-400 rounded-full"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-yellow-400 rounded-full"></div>
            <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-4 h-1 bg-yellow-400 rounded-full"></div>
            <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-4 h-1 bg-yellow-400 rounded-full"></div>
            <div className="absolute top-1 right-1 w-1 h-3 bg-yellow-400 rounded-full transform rotate-45"></div>
            <div className="absolute bottom-1 left-1 w-1 h-3 bg-yellow-400 rounded-full transform rotate-45"></div>
            <div className="absolute top-1 left-1 w-1 h-3 bg-yellow-400 rounded-full transform -rotate-45"></div>
            <div className="absolute bottom-1 right-1 w-1 h-3 bg-yellow-400 rounded-full transform -rotate-45"></div>
          </div>
        </div>
      </div>

      {/* Animated Giraffe */}
      <div className="absolute top-34 right-16 animate-bounce">
        <div className="relative">
          {/* Body */}
          <div className="w-20 h-32 bg-yellow-400 rounded-3xl relative overflow-hidden">
            {/* Spots */}
            <div className="absolute top-4 left-3 w-4 h-4 bg-orange-400 rounded-full"></div>
            <div className="absolute top-8 right-4 w-3 h-3 bg-orange-400 rounded-full"></div>
            <div className="absolute top-12 left-5 w-5 h-5 bg-orange-400 rounded-full"></div>
            <div className="absolute top-16 right-2 w-3 h-3 bg-orange-400 rounded-full"></div>
            <div className="absolute top-20 left-2 w-4 h-4 bg-orange-400 rounded-full"></div>
            <div className="absolute bottom-6 right-3 w-3 h-3 bg-orange-400 rounded-full"></div>
          </div>
          {/* Neck */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-8 h-20 bg-yellow-400 rounded-t-full">
            <div className="absolute top-2 left-1 w-2 h-2 bg-orange-400 rounded-full"></div>
            <div className="absolute top-6 right-1 w-2 h-2 bg-orange-400 rounded-full"></div>
            <div className="absolute top-10 left-2 w-2 h-2 bg-orange-400 rounded-full"></div>
          </div>
          {/* Head */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-10 h-8 bg-yellow-400 rounded-full">
            {/* Eyes */}
            <div className="absolute top-2 left-2 w-1 h-1 bg-black rounded-full"></div>
            <div className="absolute top-2 right-2 w-1 h-1 bg-black rounded-full"></div>
            {/* Horns */}
            <div className="absolute -top-2 left-2 w-1 h-3 bg-orange-400 rounded-full"></div>
            <div className="absolute -top-2 right-2 w-1 h-3 bg-orange-400 rounded-full"></div>
            {/* Horn tops */}
            <div className="absolute -top-3 left-2 w-2 h-2 bg-orange-500 rounded-full"></div>
            <div className="absolute -top-3 right-2 w-2 h-2 bg-orange-500 rounded-full"></div>
            {/* Nose */}
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-orange-400 rounded-full"></div>
          </div>
          {/* Legs */}
          <div className="absolute -bottom-8 left-2 w-3 h-10 bg-yellow-400 rounded-b-full"></div>
          <div className="absolute -bottom-8 left-7 w-3 h-10 bg-yellow-400 rounded-b-full"></div>
          <div className="absolute -bottom-8 right-7 w-3 h-10 bg-yellow-400 rounded-b-full"></div>
          <div className="absolute -bottom-8 right-2 w-3 h-10 bg-yellow-400 rounded-b-full"></div>
          {/* Hooves */}
          <div className="absolute -bottom-6 left-2 w-3 h-2 bg-gray-800 rounded-full"></div>
          <div className="absolute -bottom-6 left-7 w-3 h-2 bg-gray-800 rounded-full"></div>
          <div className="absolute -bottom-6 right-7 w-3 h-2 bg-gray-800 rounded-full"></div>
          <div className="absolute -bottom-6 right-2 w-3 h-2 bg-gray-800 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            {/* Decorative orange blob */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-orange-300 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-400 rounded-full opacity-30"></div>
            
            {/* Main image container with custom shape */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full transform rotate-12 opacity-60"></div>
              <div className="absolute inset-4 bg-white rounded-3xl overflow-hidden shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                {/* Placeholder for girl image */}
                <div className="w-full h-full bg-gradient-to-b from-gray-200 to-gray-300 relative flex items-center justify-center">
                  {/* Simulated girl figure */}
                  <div className="text-center">
                    {/* Head */}
                    <div className="w-24 h-28 bg-pink-200 rounded-full mx-auto mb-4 relative">
                      {/* Hair */}
                      <div className="absolute -top-4 left-2 right-2 h-12 bg-yellow-700 rounded-t-full"></div>
                      {/* Eyes */}
                      <div className="absolute top-8 left-6 w-2 h-2 bg-gray-800 rounded-full"></div>
                      <div className="absolute top-8 right-6 w-2 h-2 bg-gray-800 rounded-full"></div>
                      {/* Smile */}
                      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-6 h-3 border-b-2 border-gray-800 rounded-full"></div>
                    </div>
                    {/* Body */}
                    <div className="w-20 h-24 bg-white border-4 border-blue-400 rounded-t-2xl mx-auto"></div>
                    {/* Arms with pencil */}
                    <div className="absolute top-32 left-1/2 transform -translate-x-12 w-6 h-16 bg-pink-200 rounded-full rotate-45"></div>
                    <div className="absolute top-32 left-1/2 transform -translate-x-12 w-6 h-16 bg-pink-200 rounded-full -rotate-45"></div>
                    {/* Pencil */}
                    <div className="absolute top-28 left-1/2 transform -translate-x-16 w-2 h-12 bg-yellow-500 rounded-full rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute top-4 right-8 animate-float">
              <div className="w-8 h-8 bg-blue-200 rounded-full opacity-60"></div>
            </div>
            <div className="absolute bottom-8 left-4 animate-bounce" style={{animationDelay: '1s'}}>
              <div className="w-6 h-6 bg-yellow-300 rotate-45"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Section header */}
            <div className="animate-fade-in-up">
              <p className="text-orange-400 font-semibold text-lg mb-2">About Us</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Learn To Play, Converse With Confidence
              </h2>
            </div>

            {/* Description */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <p className="text-gray-600 text-lg leading-relaxed">
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                Suspendisse gravida vitae nisl in tincidunt.
              </p>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Sport Program</h3>
                    <p className="text-gray-600 text-sm">Aliquam erat volutpat nullam imperdiet</p>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Easy To Learn</h3>
                    <p className="text-gray-600 text-sm">Aliquam erat volutpat nullam imperdiet</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">RR</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Ronald Richards</h4>
                    <p className="text-gray-600 text-sm">Co, Founder</p>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in-up" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Call Us Now</h4>
                    <p className="text-gray-600 font-semibold">+208-555-0112</p>
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
          50% { transform: translateY(-10px); }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}