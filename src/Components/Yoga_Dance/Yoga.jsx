import React from 'react';
import { Play, Users, Award } from 'lucide-react';

const YogaSection = () => {
  return (
    <div className="bg-orange-50">
      {/* Hero Section */}
      <div className="relative pl-20 pr-20  bg-orange-50 overflow-hidden">
        <div className="container mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Dein Online-Yogastudio
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                YogaEasy ist dein persönliches Online-Yogastudio für zu hause 
                oder unterwegs. Mit YogaEasy kannst du ganz bequem Yoga 
                üben - wann und wo immer du willst.
              </p>
              <button className="bg-orange-300 hover:bg-orange-400 text-gray-800 font-medium px-8 py-3 rounded-full transition-colors duration-200">
                25% Rabatt für dich →
              </button>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/yoga.jpg" 
                  alt="Woman practicing yoga" 
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
              
              {/* Discount Badge */}
              <div className="absolute -top-4 -right-4 z-20 bg-teal-500 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg">
                <span className="text-2xl font-bold">25%</span>
                <span className="text-xs">Rabatt</span>
                <span className="text-xs">sichern</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-20 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Die beliebtesten Yogastile
            </h3>
            <p className="text-gray-600">
              Wähle aus mehr als zehn Yogastilen das 
              Passende für dich.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Play className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Wöchentlich neue Videos
            </h3>
            <p className="text-gray-600">
              Jede Woche neue Videos und nie aus der 
              Übung kommen.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center relative">
              <Award className="w-8 h-8 text-blue-600" />
              {/* Test Badge */}
              <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                SEHR GUT
                <div className="text-xs">1.3</div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Unverbindlich testen
            </h3>
            <p className="text-gray-600">
              Keine Kündigung notwendig. 
              Dein Testzeitraum endet 
              automatisch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YogaSection;