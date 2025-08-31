import { Check, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';



 export default function HomeAbout() {
  const features = [
    { text: "Sports Training", icon: "🏃‍♂️" },
    { text: "Expert Teachers", icon: "👩‍🏫" },
    { text: "Easy To Learn", icon: "📚" },
    { text: "Clear & Cleaning", icon: "✨" }
  ];

  return (
    <div className="relative bg-white py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Car outline decoration */}
        <div className="absolute top-16 left-10 animate-pulse">
          <svg width="120" height="80" viewBox="0 0 120 80" className="text-orange-700 opacity-70">
            <path d="M10 50 Q10 40 20 40 L30 40 Q40 30 50 30 L70 30 Q80 30 90 40 L100 40 Q110 40 110 50 L110 60 Q110 70 100 70 L90 70 Q85 75 80 75 Q75 75 70 70 L50 70 Q45 75 40 75 Q35 75 30 70 L20 70 Q10 70 10 60 Z" 
                  fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4"/>
            <circle cx="35" cy="65" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="85" cy="65" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-32 right-20 text-blue-400 opacity-70">
          <svg width="80" height="80" viewBox="0 0 60 40">
            <path d="M10 20 Q20 10 30 20 Q40 30 50 20" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="6,6"/>
          </svg>
        </div>

        {/* Happy child illustration */}
        <div className="absolute bottom-10 right-10">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center mb-2">
                  <span className="text-2xl">😊</span>
                </div>
                <div className="w-12 h-8 bg-blue-400 rounded-t-full mx-auto"></div>
                <div className="flex justify-center space-x-1 mt-1">
                  <div className="w-2 h-6 bg-blue-500 rounded"></div>
                  <div className="w-2 h-6 bg-blue-500 rounded"></div>
                </div>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 text-orange-400 animate-bounce">
              <span className="text-lg font-bold">Yeah!</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Images */}
          <div className="relative">
            {/* Main image container with organic shape */}
            <div className="relative">
              {/* Organic background shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200 opacity-80 transform -rotate-3 rounded-[60px]"></div>
              
              {/* Main teaching scene */}
              <div className="relative z-10 bg-white rounded-[50px] p-6 shadow-xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-pink-50 rounded-[40px] flex items-center justify-center overflow-hidden">
                  {/* Teacher and student placeholder */}
                  <div className="text-center space-y-4">
                    <div className="flex justify-center space-x-4">
                      {/* Teacher */}
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full flex items-center justify-center mb-2">
                          <span className="text-xl">👩‍🏫</span>
                        </div>
                        <div className="w-12 h-6 bg-white rounded-t-full"></div>
                      </div>
                      {/* Student */}
                      <div className="text-center">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-300 to-green-300 rounded-full flex items-center justify-center mb-2">
                          <span className="text-lg">👧</span>
                        </div>
                        <div className="w-10 h-5 bg-blue-400 rounded-t-full"></div>
                      </div>
                    </div>
                    {/* Book/table representation */}
                    <div className="w-24 h-4 bg-yellow-300 rounded mx-auto"></div>
                  </div>
                </div>
              </div>

              {/* Small floating image - children playing */}
              <div className="absolute -bottom-6 -right-6 w-32 h-24 bg-white rounded-2xl shadow-lg p-3">
                <div className="w-full h-full bg-gradient-to-br from-green-100 to-yellow-100 rounded-xl flex items-center justify-center">
                  <div className="flex space-x-2">
                    <div className="text-center">
                      <div className="w-6 h-6 bg-red-300 rounded-full mb-1"></div>
                      <div className="w-4 h-3 bg-red-400 rounded-t"></div>
                    </div>
                    <div className="text-center">
                      <div className="w-6 h-6 bg-blue-300 rounded-full mb-1"></div>
                      <div className="w-4 h-3 bg-blue-400 rounded-t"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Section label */}
            <div className="text-orange-500 font-medium text-lg">About Us</div>

            {/* Main heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Top Choice For Children
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
              Suspendisse gravida vitae nisl in tincidunt.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-orange-500" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
              <Link to="/AboutSection" className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                <span>Explore More</span>
                <span className="ml-2">→</span>
              </Link>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-orange-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Call Us Now</div>
                  <div className="text-lg font-bold text-gray-800">+208-555-0112</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}