import React, { useState, useEffect } from 'react';

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      text: "Consequat per conubia nostra, per inceptos himenaeos. Suspendisse gravida vitae nisl Class aptent taciti sociosqu ad litora",
      author: "Jenny Wilson",
      color: "bg-slate-500"
    },
    {
      text: "Consequat per conubia nostra, per inceptos himenaeos. Suspendisse gravida vitae nisl Class aptent taciti sociosqu ad litora",
      author: "Esther Howard",
      color: "bg-teal-400"
    },
    {
      text: "Consequat per conubia nostra, per inceptos himenaeos. Suspendisse gravida vitae nisl Class aptent taciti sociosqu ad litora",
      author: "Wade Warren",
      color: "bg-orange-400"
    },
    {
      text: "Amazing experience with this educational platform. My children have learned so much and are always excited for their classes.",
      author: "Sarah Johnson",
      color: "bg-purple-400"
    },
    {
      text: "The teachers are incredibly dedicated and the curriculum is well-structured. Highly recommend for any parent.",
      author: "Michael Chen",
      color: "bg-fuchsia-700"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Get visible testimonials (3 at a time)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push({ ...testimonials[index], index });
    }
    return visible;
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="relative bg-gradient-to-t from-gray-50 to-white py-20 px-8 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-10 left-10">
        {/* Bird illustration */}
        <div className="w-24 h-16 opacity-30">
          <svg viewBox="0 0 100 60" className="w-full h-full">
            <path
              d="M10 30 Q20 15 35 25 Q45 20 55 30 Q65 25 75 35 Q85 30 90 40"
              stroke="#F97316"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M15 35 Q25 25 35 35 Q45 30 55 40 Q65 35 75 45"
              stroke="#F97316"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="20" cy="25" r="2" fill="#F97316" opacity="0.7" />
            <path
              d="M18 27 L22 30 L18 33"
              stroke="#F97316"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="absolute top-16 right-16">
        {/* Bee illustration */}
        <div className="w-12 h-8 opacity-60 animate-bounce">
          <div className="relative">
            {/* Bee body */}
            <div className="w-8 h-4 bg-yellow-400 rounded-full relative">
              <div className="absolute top-0 left-1 w-1 h-4 bg-black rounded-full"></div>
              <div className="absolute top-0 left-3 w-1 h-4 bg-black rounded-full"></div>
              <div className="absolute top-0 left-5 w-1 h-4 bg-black rounded-full"></div>
            </div>
            {/* Wings */}
            <div className="absolute -top-1 left-1 w-3 h-2 bg-white rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute -top-1 left-4 w-3 h-2 bg-white rounded-full opacity-70 animate-pulse"></div>
            {/* Head */}
            <div className="absolute top-0 -left-1 w-2 h-2 bg-yellow-500 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-orange-400 text-sm font-medium mb-4 tracking-wide uppercase">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-600 leading-tight">
            Parents' Words Are The Key
            <br />
            To Happy Kids
          </h2>
        </div>

        {/* Testimonials Container */}
        <div className="relative">
          <div className="flex justify-center items-center space-x-8 mb-12">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.index}-${index}`}
                className={`
                  relative transform transition-all duration-700 ease-in-out
                  ${index === 1 ? 'scale-105 z-10' : 'scale-95 z-5'}
                  ${index === 0 ? 'opacity-80' : index === 2 ? 'opacity-80' : 'opacity-100'}
                `}
                style={{
                  animation: `slideIn 0.7s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Speech bubble */}
                <div className={`
                  ${testimonial.color} text-white p-8 rounded-3xl rounded-bl-none
                  w-80 h-48 flex flex-col justify-between
                  shadow-xl transform transition-transform duration-300 hover:scale-105
                  relative
                `}>
                  {/* Quote mark */}
                  <div className="absolute -top-2 -right-2 text-6xl text-white opacity-30 font-serif">
                    "
                  </div>
                  
                  {/* Testimonial text */}
                  <p className="text-sm leading-relaxed mb-6 relative z-10">
                    {testimonial.text}
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center">
                    <div className="w-8 h-0.5 bg-white mr-3"></div>
                    <p className="font-medium text-sm">{testimonial.author}</p>
                  </div>
                  
                  {/* Speech bubble tail */}
                  <div className={`
                    absolute -bottom-4 left-8 w-6 h-6 ${testimonial.color}
                    transform rotate-45 rounded-br-md
                  `}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${currentSlide === index 
                    ? 'bg-orange-400 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                  }
                `}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="flex justify-center mt-6">
            <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-orange-400 rounded-full transition-all duration-300 ease-linear"
                style={{ 
                  width: `${((currentSlide + 1) / testimonials.length) * 100}%`,
                  animation: isAutoPlaying ? 'progress 4s linear infinite' : 'none'
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Play/Pause Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            {isAutoPlaying ? (
              <>
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">Pause</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">Play</span>
              </>
            )}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }

        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default TestimonialSection;