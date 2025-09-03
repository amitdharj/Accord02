import React from 'react';
import { ArrowRight } from 'lucide-react';

const MagazineSection = () => {
  const articles = [
    {
      image: "Asana1.avif",
      title: "Increases Self-Confidence – Builds a positive connection between mind and body.",
      alt: "Man in teal shirt practicing yoga breathing"
    },
    {
      image: "/yoga3.jpg",
      title: "Enhances Posture – Corrects body alignment and prevents back or neck pain.",
      alt: "Person practicing yoga in nature with rainbow"
    },
    {
      image: "/yoga-02.webp",
      title: "Inner Peace – Promotes self-awareness and emotional balance.",
      alt: "Person lying in yoga pose in a field"
    }
  ];

  return (
    <div className="bg-orange-50 px-10 py-10 pt-10 pb-26">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-orange-500 mb-4">
            Explore the World of Yoga in Our Yoga Magazine
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover everything about the holistic benefits of yoga—mindful practices, meditation, yoga philosophy, and so much more!
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.alt}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Content Container */}
              <div className="bg-orange-500 text-stone-700 p-6">
                <h3 className="text-lg font-semibold mb-6 leading-snug min-h-[3.5rem] flex items-center">
                  {article.title}
                </h3>
                
                {/* CTA Button
                <button className="group/btn flex items-center gap-2 text-stone-700 hover:text-teal-200 transition-colors duration-200 font-medium">
                  <span>Zum Artikel</span>
                  <ArrowRight 
                    size={16} 
                    className="group-hover/btn:translate-x-1 transition-transform duration-200" 
                  />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MagazineSection;