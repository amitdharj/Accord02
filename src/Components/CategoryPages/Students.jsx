import React, { useState } from 'react';
import { Calendar, User, Tag, Search, ChevronRight, BookOpen, FileText, Award, Clock, Eye, ChevronLeft } from 'lucide-react';

const StudentCategory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  
  const examPosts = [
    {
      id: 1,
      title: "All Inclusive Ultimate Circle Island Day with Lunch",
      excerpt: "Achieve goals with precision & speed. Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Exam",
      readTime: "5 min read",
      views: "234",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Assessment", "Learning", "Kids"]
    },
    {
      id: 2,
      title: "That jerk Form Finance really threw me",
      excerpt: "Achieve goals with precision & speed. Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      author: "Michael Davis",
      date: "March 12, 2024",
      category: "Exam",
      readTime: "7 min read",
      views: "187",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Testing", "Education", "Tips"]
    },
    {
      id: 3,
      title: "From without content style without",
      excerpt: "Achieve goals with precision & speed. Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      author: "Emma Wilson",
      date: "March 10, 2024",
      category: "Exam",
      readTime: "4 min read",
      views: "312",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Preparation", "Study", "Success"]
    },
    {
      id: 4,
      title: "Effective Study Techniques for Young Learners",
      excerpt: "Discover proven methods to help kindergarten students develop strong study habits and excel in their assessments through fun and engaging activities.",
      author: "Lisa Chen",
      date: "March 8, 2024",
      category: "Exam",
      readTime: "6 min read",
      views: "428",
      image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Study Tips", "Learning", "Methods"]
    },
    {
      id: 5,
      title: "Creating a Stress-Free Exam Environment",
      excerpt: "Learn how to create a calm and supportive atmosphere for young children during assessment periods to ensure their best performance.",
      author: "David Brown",
      date: "March 5, 2024",
      category: "Exam",
      readTime: "5 min read",
      views: "156",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Environment", "Stress-Free", "Support"]
    },
    {
      id: 6,
      title: "Interactive Learning Games for Better Results",
      excerpt: "Explore innovative ways to make learning fun and engaging through interactive games that boost student performance and retention.",
      author: "Jennifer Lee",
      date: "March 3, 2024",
      category: "Exam",
      readTime: "8 min read",
      views: "203",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Games", "Interactive", "Fun"]
    },
    {
      id: 7,
      title: "Parent-Teacher Collaboration in Student Success",
      excerpt: "Understand the importance of strong partnerships between parents and teachers in creating optimal learning environments for students.",
      author: "Robert Kim",
      date: "March 1, 2024",
      category: "Exam",
      readTime: "6 min read",
      views: "189",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Collaboration", "Parents", "Teachers"]
    }
  ];

  const filteredPosts = examPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 max-w-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="#" className="hover:text-orange-600 transition-colors">Home</a>
            <ChevronRight size={16} />
            <a href="#" className="hover:text-orange-600 transition-colors">Categories</a>
            <ChevronRight size={16} />
            <span className="text-orange-700 font-medium">Students</span>
          </nav>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-orange-400 text-stone-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
            <BookOpen size={40} />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Students</h1>
          <p className="text-xl text-stone-700 mb-8 max-w-2xl mx-auto">
            Explore exciting events, fun workshops, and learning opportunities created to inspire and connect students, teachers, and parents.
          </p>
          <div className="flex items-center justify-center text-lg text-stone-700">
            <FileText size={20} className="mr-2" />
            <span>{examPosts.length} Articles Available</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search exam-related articles..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1); // Reset to first page when searching
                  }}
                />
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {startIndex + 1}-{Math.min(startIndex + postsPerPage, filteredPosts.length)} of {filteredPosts.length} articles
              </p>
            </div>

            {/* Article Cards */}
            <div className="space-y-8">
              {currentPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="md:flex">
                    {/* Image */}
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <User size={16} />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye size={16} />
                          <span>{post.views}</span>
                        </div>
                      </div>
                      
                      <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 cursor-pointer transition-colors">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 transition-colors">
                          Read More <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                <p className="text-gray-500">Try adjusting your search terms</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft size={16} />
                    Previous
                  </button>
                  
                  {/* Page Numbers */}
                  {Array.from({ length: totalPages }, (_, index) => {
                    const page = index + 1;
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 rounded-md transition-colors ${
                          currentPage === page
                            ? 'bg-blue-600 text-white'
                            : 'border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}
                  
                  <button 
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="space-y-8">
              {/* Categories Widget */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {['Exam', 'Class', 'Students', 'Teachers'].map((category, index) => (
                    <li key={index}>
                      <a href="#" className="flex items-center justify-between py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors">
                        <span>{category}</span>
                        <span className="text-sm text-gray-400">{Math.floor(Math.random() * 20) + 5}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Posts */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {examPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex gap-3 group">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                      />
                      <div>
                        <h4 className="font-medium text-gray-800 text-sm line-clamp-2 hover:text-blue-600 cursor-pointer transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags Cloud */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['Assessment', 'Learning', 'Kids', 'Testing', 'Education', 'Tips', 'Preparation', 'Study', 'Success', 'Methods', 'Environment', 'Tools', 'Progress'].map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCategory;

