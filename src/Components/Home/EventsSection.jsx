import React, { useState, useEffect } from 'react';

const EventsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const events = [
    {
      id: 1,
      title: "Last Day of School end of Year Picnic",
      date: "May 18, 2024",
      location: "6391 Elgin St, Celina, USA",
      image: "/api/placeholder/400/250",
      reviews: 10,
      rating: 5,
      category: "school-events",
      description: "Join us for a fun-filled picnic to celebrate the end of the school year with activities, games, and delicious food.",
      time: "10:00 AM - 4:00 PM",
      attendees: 150
    },
    {
      id: 2,
      title: "The complete web developer guideline 2024",
      date: "May 18, 2024",
      location: "6391 Elgin St, Celina, USA",
      image: "/api/placeholder/400/250",
      reviews: 10,
      rating: 5,
      category: "workshops",
      description: "Comprehensive workshop for aspiring web developers covering modern technologies and best practices.",
      time: "9:00 AM - 5:00 PM",
      attendees: 50
    },
    {
      id: 3,
      title: "Gathering & welcome speech marketing strategy",
      date: "May 18, 2024",
      location: "6391 Elgin St, Celina, USA",
      image: "/api/placeholder/400/250",
      reviews: 10,
      rating: 5,
      category: "meetings",
      description: "Welcome gathering with strategic marketing insights and networking opportunities for parents and staff.",
      time: "2:00 PM - 6:00 PM",
      attendees: 80
    },
    {
      id: 4,
      title: "Science Fair 2024",
      date: "May 25, 2024",
      location: "6391 Elgin St, Celina, USA",
      image: "/api/placeholder/400/250",
      reviews: 8,
      rating: 4,
      category: "competitions",
      description: "Annual science fair where students showcase their innovative projects and experiments.",
      time: "1:00 PM - 7:00 PM",
      attendees: 200
    },
    {
      id: 5,
      title: "Art & Craft Workshop",
      date: "June 2, 2024",
      location: "6391 Elgin St, Celina, USA",
      image: "/api/placeholder/400/250",
      reviews: 12,
      rating: 5,
      category: "workshops",
      description: "Creative workshop for children to explore various art forms and craft techniques.",
      time: "11:00 AM - 3:00 PM",
      attendees: 60
    },
    {
      id: 6,
      title: "Parent-Teacher Conference",
      date: "June 8, 2024",
      location: "6391 Elgin St, Celina, USA",
      image: "/api/placeholder/400/250",
      reviews: 15,
      rating: 5,
      category: "meetings",
      description: "Important meeting to discuss student progress and academic planning for the upcoming term.",
      time: "8:00 AM - 12:00 PM",
      attendees: 120
    }
  ];

  const categories = [
    { id: 'all', label: 'All Events', count: events.length },
    { id: 'school-events', label: 'School Events', count: events.filter(e => e.category === 'school-events').length },
    { id: 'workshops', label: 'Workshops', count: events.filter(e => e.category === 'workshops').length },
    { id: 'competitions', label: 'Competitions', count: events.filter(e => e.category === 'competitions').length },
    { id: 'meetings', label: 'Meetings', count: events.filter(e => e.category === 'meetings').length }
  ];

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.category === activeFilter);

  const eventsPerPage = 3;
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const currentEvents = filteredEvents.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );

  const handleFilterChange = (filter) => {
    setLoading(true);
    setActiveFilter(filter);
    setCurrentPage(1);
    
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="relative bg-gradient-to-t from-stone-400 via-orange-200 to-gray-50 min-h-screen py-20 px-8 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Hearts */}
        <div className="absolute top-20 left-10 text-stone-500 text-2xl">♡</div>
        <div className="absolute top-40 right-20 text-white text-xl">♡</div>
        
        {/* Stars */}
        <div className="absolute top-10 left-1/4 text-white text-3xl">★</div>
        <div className="absolute bottom-20 left-16 text-white text-2xl">★</div>
        <div className="absolute top-32 right-1/4 text-white text-xl">★</div>
        <div className="absolute bottom-32 right-10 text-white text-2xl">★</div>
        
        {/* Clouds */}
        <div className="absolute top-16 left-20">
          <svg className="w-16 h-10 text-white opacity-20" fill="currentColor" viewBox="0 0 64 40">
            <path d="M16 20c0-5.5 4.5-10 10-10s10 4.5 10 10h2c3.3 0 6 2.7 6 6s-2.7 6-6 6H16c-3.3 0-6-2.7-6-6s2.7-6 6-6z"/>
          </svg>
        </div>
        <div className="absolute bottom-40 right-32">
          <svg className="w-12 h-8 text-white opacity-20" fill="currentColor" viewBox="0 0 64 40">
            <path d="M16 20c0-5.5 4.5-10 10-10s10 4.5 10 10h2c3.3 0 6 2.7 6 6s-2.7 6-6 6H16c-3.3 0-6-2.7-6-6s2.7-6 6-6z"/>
          </svg>
        </div>
        
        {/* Hot Air Balloons */}
        <div className="absolute top-10 right-16">
          <svg className="w-20 h-24 text-white opacity-15" fill="currentColor" viewBox="0 0 80 96">
            <ellipse cx="40" cy="30" rx="30" ry="35"/>
            <rect x="35" y="65" width="10" height="15" rx="2"/>
            <path d="M30 65 L40 60 L50 65 L45 70 L35 70 Z" opacity="0.7"/>
          </svg>
        </div>
        <div className="absolute bottom-10 left-32">
          <svg className="w-16 h-20 text-white opacity-15" fill="currentColor" viewBox="0 0 80 96">
            <ellipse cx="40" cy="30" rx="30" ry="35"/>
            <rect x="35" y="65" width="10" height="15" rx="2"/>
            <path d="M30 65 L40 60 L50 65 L45 70 L35 70 Z" opacity="0.7"/>
          </svg>
        </div>
        
        {/* Hands */}
        <div className="absolute top-1/3 left-8 transform rotate-12">
          <svg className="w-8 h-8 text-white opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
          </svg>
        </div>
        <div className="absolute top-2/3 right-12 transform -rotate-12">
          <svg className="w-6 h-6 text-white opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-stone-500 text-sm font-medium mb-4 tracking-wide uppercase opacity-90">
            Our Events
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-600 leading-tight mb-8">
            Upcoming School Activities &
            <br />
            Events Schedule
          </h2>
          
          {/* Filter Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleFilterChange(category.id)}
                className={`
                  px-6 py-3 rounded-full font-medium text-sm transition-all duration-300
                  flex items-center space-x-2 hover:scale-105 shadow-lg
                  ${activeFilter === category.id 
                    ? 'bg-white text-teal-600 shadow-xl' 
                    : 'bg-white/20 text-stone-700 hover:bg-white/30 backdrop-blur-sm'
                  }
                `}
              >
                <span>{category.label}</span>
                <span className={`
                  px-2 py-1 rounded-full text-xs
                  ${activeFilter === category.id 
                    ? 'bg-teal-100 text-teal-600' 
                    : 'bg-white/20 text-stone-700'
                  }
                `}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center mb-8">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
          </div>
        )}

        {/* Events Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${loading ? 'opacity-50' : 'opacity-100'}`}>
          {currentEvents.map((event, index) => (
            <div
              key={event.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              onMouseEnter={() => setHoveredCard(event.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400 flex items-center justify-center">
                  <div className="text-4xl opacity-50">🎯</div>
                </div>
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-orange-400 text-white px-3 py-1 rounded-lg text-sm font-medium flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span>{event.date}</span>
                </div>

                {/* Hover Overlay */}
                <div className={`
                  absolute inset-0 bg-black/60 flex items-center justify-center
                  transition-all duration-300 backdrop-blur-sm
                  ${hoveredCard === event.id ? 'opacity-100' : 'opacity-0'}
                `}>
                  <div className="text-center text-white">
                    <div className="text-sm mb-2">👥 {event.attendees} Attendees</div>
                    <div className="text-sm">⏰ {event.time}</div>
                  </div>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                {/* Location */}
                <div className="flex items-center text-orange-400 text-sm mb-3">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {event.location}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center space-x-2 group-hover:scale-105">
                    <span>Read More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>

                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      {renderStars(event.rating)}
                    </div>
                    <span className="text-sm text-gray-500">({event.reviews} Review)</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mt-12">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              Previous
            </button>
            
            <div className="flex space-x-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`
                    w-10 h-10 rounded-lg font-medium transition-all duration-300
                    ${currentPage === i + 1
                      ? 'bg-white text-teal-600 shadow-lg'
                      : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                    }
                  `}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              Next
            </button>
          </div>
        )}

        {/* View All Events Link */}
        <div className="text-center mt-12">
          <a 
            href="/events" 
            className="inline-flex items-center space-x-2 text-white font-medium hover:text-orange-200 transition-colors duration-300 group"
          >
            <span>View All Events</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default EventsSection;