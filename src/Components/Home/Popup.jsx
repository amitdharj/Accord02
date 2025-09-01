import React, { useState, useEffect } from 'react';
import { X, Calendar, MapPin, Clock, Users, Star } from 'lucide-react';

const EventPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
    setIsAnimating(true);
  };

  const closePopup = () => {
    setIsAnimating(false);
    setTimeout(() => setIsOpen(false), 400);
  };

  // Auto-open popup after 2 seconds (for demo)
  useEffect(() => {
    const timer = setTimeout(() => {
      openPopup();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const eventData = {
    title: "Summer Yoga Retreat 2024",
    date: "August 15-17, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "Peaceful Valley Resort, California",
    attendees: 45,
    maxAttendees: 60,
    price: "$299",
    originalPrice: "$399",
    instructor: "Sarah Johnson",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  };

  if (!isOpen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
        <button
          onClick={openPopup}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
        >
          Show Event Popup
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isAnimating ? 'opacity-50' : 'opacity-0'
        }`}
        onClick={closePopup}
      />

      {/* Popup Modal */}
      <div 
        className={`relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 z-50 overflow-hidden transform transition-all duration-300 ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors duration-200"
        >
          <X size={20} className="text-gray-600" />
        </button>

        {/* Event Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={eventData.image}
            alt={eventData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          
          {/* Special Offer Badge */}
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            25% OFF
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title and Rating */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {eventData.title}
            </h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Star size={16} className="text-yellow-400 fill-current" />
                <span className="font-medium">{eventData.rating}</span>
              </div>
              <span>•</span>
              <span>with {eventData.instructor}</span>
            </div>
          </div>

          {/* Event Details */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-600">
              <Calendar size={18} className="text-purple-600" />
              <span>{eventData.date}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Clock size={18} className="text-purple-600" />
              <span>{eventData.time}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <MapPin size={18} className="text-purple-600" />
              <span>{eventData.location}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Users size={18} className="text-purple-600" />
              <span>{eventData.attendees}/{eventData.maxAttendees} spots filled</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(eventData.attendees / eventData.maxAttendees) * 100}%` }}
            />
          </div>

          {/* Pricing */}
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-gray-800">{eventData.price}</span>
            <span className="text-lg text-gray-500 line-through">{eventData.originalPrice}</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">
              Save $100
            </span>
          </div>

          {/* Call to Action */}
          <div className="space-y-3 pt-2">
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Reserve Your Spot
            </button>
            <p className="text-xs text-gray-500 text-center">
              Limited time offer • Only {eventData.maxAttendees - eventData.attendees} spots left
            </p>
          </div>
        </div>

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur-sm animate-pulse" />
        </div>
      </div>

      {/* Demo Reset Button */}
      <button
        onClick={openPopup}
        className="fixed bottom-6 right-6 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors duration-200 z-30"
      >
        Show Again
      </button>
    </div>
  );
};

export default EventPopup;