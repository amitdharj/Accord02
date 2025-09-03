import React, { useState } from 'react';
import { Play, Users, Award } from 'lucide-react';

const YogaSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="bg-orange-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-20"></div>
      <div className="absolute top-22 right-20 w-16 h-16 bg-teal-300 rounded-full opacity-25"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-300 rounded-full opacity-30"></div>
      
      {/* Floating Yoga Icons */}
      <div className="absolute  top-20 left-1/3 text-teal-400 opacity-20">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      </div>
      
      {/* Hero Section */}
      <div className="relative px-5 py-5 pl-5 pr-5 overflow-hidden">
        <div className="container mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 relative z-10">
              {/* Decorative line */}
              <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-orange-400 rounded-full mb-6"></div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-orange-500"> Yoga Programs</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
               Yoga is an ancient practice that blends movement, breathing, and meditation to improve flexibility, reduce stress, and bring balance to mind and body.
              </p>
              
              <div className="flex items-center space-x-4">
                <button className="group bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Connect With Us →
                  <div className="inline-block ml-2 transition-transform group-hover:translate-x-1">✨</div>
                </button>
              </div>
              
              {/* Stats */}
              <div className="flex items-center space-x-8 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">1000+</div>
                  <div className="text-sm text-gray-500">Happy Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">500+</div>
                  <div className="text-sm text-gray-500">Video Classes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-500">10+</div>
                  <div className="text-sm text-gray-500">Yoga Styles</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div 
                className="relative z-10 cursor-pointer transform hover:scale-105 transition-all duration-500"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Main Yoga Image */}
                <div className="relative rounded-3xl shadow-2xl overflow-hidden h-96">
                  <img 
                    src="/yoga.jpg" 
                    alt="Group of people practicing yoga at sunset" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* International Yoga Day Text */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                    
                  </div>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 rounded-3xl transition-all duration-300 ${
                  isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-2xl mb-2">🧘‍♀️</div>
                      <div className="text-lg font-semibold mb-2">Start Your Journey</div>
                      <div className="text-sm opacity-90">Discover inner peace and strength</div>
                     
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Discount Badge */}
              <div className="absolute -top-4 -right-4 z-20 bg-gradient-to-br from-teal-400 to-teal-600 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg animate-pulse">
                <span className="text-2xl font-bold">25%</span>
                <span className="text-xs">OFF</span>
                <span className="text-xs">TODAY</span>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -z-10 top-10 left-10 w-6 h-6 bg-pink-300 rounded-full opacity-40 animate-bounce"></div>
              <div className="absolute -z-10 bottom-10 right-10 w-8 h-8 bg-yellow-300 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-16 py-16 relative">
        {/* Decorative wave */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-30"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center space-y-4 group hover:transform hover:scale-105 transition-all duration-300">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-lg">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Boosts Immunity
            </h3>
            <p className="text-gray-600">
              Improves overall health and body function.
            </p>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </div>

          {/* Feature 2 */}
          <div className="text-center space-y-4 group hover:transform hover:scale-105 transition-all duration-300">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300 shadow-lg">
              <Play className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Improves Focus
            </h3>
            <p className="text-gray-600">
             Enhances mental clarity and concentration.
            </p>
            <div className="w-12 h-0.5 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </div>

          {/* Feature 3 */}
          <div className="text-center space-y-4 group hover:transform hover:scale-105 transition-all duration-300">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center relative group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300 shadow-lg">
              <Award className="w-8 h-8 text-green-600" />
              {/* Test Badge */}
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
                EXCELLENT
                <div className="text-xs">4.8★</div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Builds Strength
            </h3>
            <p className="text-gray-600">
             Many poses help develop core and body strength.
            </p>
            <div className="w-12 h-0.5 bg-gradient-to-r from-green-400 to-teal-400 mx-auto opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YogaSection;