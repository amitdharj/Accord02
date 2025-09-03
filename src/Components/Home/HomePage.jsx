import { Play, Plus, Music, } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function HomePage () {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Large orange circle */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-orange-300 to-yellow-300 rounded-full opacity-80 translate-x-32"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-32 left-20 w-12 h-12 bg-blue-200 rounded-lg rotate-12 opacity-70"></div>
        <div className="absolute top-96 left-32 w-8 h-8 bg-green-200 rounded-full opacity-60"></div>
        <div className="absolute bottom-32 left-16 w-6 h-6 bg-purple-200 rounded-full opacity-70"></div>
        <div className="absolute top-48 right-32 w-10 h-10 bg-pink-200 rounded-lg rotate-45 opacity-60"></div>
        
        {/* Floating icons */}
        <div className="absolute top-40 right-96 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center opacity-90">
          <Music size={20} className="text-green-500" />
        </div>
        <div className="absolute bottom-40 right-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center opacity-90">
          <span className="text-purple-500 text-lg">😊</span>
        </div>
        <div className="absolute top-60 left-96 w-10 h-10 bg-orange-200 rounded-full opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-500 font-bold text-sm">A</span>
              </div>
              <span className="text-gray-700 font-medium">Kindergarten & Baby Care</span>
              <Plus size={16} className="text-orange-500" />
            </div>


            {/* Main Heading */}
            <div className="space-y-2">              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Kids' Promising
              </h1>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  Tomorrow
                </span>{' '}
                <span className="text-gray-800">Ahead</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg max-w-md leading-relaxed">
              Every little step is a big adventure! Let’s explore, play, and learn in a world full of fun and care.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/ContactSection" className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                <span>Apply Today</span>
                <span className="ml-2">→</span>
              </Link>
              
              <button className="flex items-center space-x-3 text-gray-700 hover:text-orange-500 transition-colors group">
                <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <Play size={20} className="text-orange-500 ml-1" fill="currentColor" />
                </div>
                <span className="font-medium text-lg">Play Video</span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Main image container with decorative background */}
            <div className="relative">
              {/* Decorative background shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full transform rotate-6 scale-110 opacity-80"></div>
              
              {/* Image placeholder - In a real app, this would be an img tag */}
              <div className="relative z-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl flex items-center justify-center">
                  {/* Placeholder for the child image */}
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 bg-gradient-to-br from-orange-300 to-pink-300 rounded-full mx-auto flex items-center justify-center shadow-lg">
                      <span className="text-4xl">👧</span>
                    </div>
                    <div className="space-y-2">
                      <div className="w-24 h-3 bg-red-300 rounded-full mx-auto"></div>
                      <div className="w-16 h-3 bg-yellow-300 rounded-full mx-auto"></div>
                      <div className="w-20 h-3 bg-green-300 rounded-full mx-auto"></div>
                      <div className="w-18 h-3 bg-blue-300 rounded-full mx-auto"></div>
                    </div>
                    <div className="flex justify-center space-x-2">
                      <div className="w-8 h-12 bg-yellow-400 rounded"></div>
                      <div className="w-8 h-12 bg-blue-400 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements around the image */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce">
                <span className="text-2xl">🎨</span>
              </div>
              <div className="absolute top-8 -right-8 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse">
                <span className="text-xl">📚</span>
              </div>
              <div className="absolute -bottom-6 left-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                <span className="text-lg">✏️</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
}



// About us in home page section



