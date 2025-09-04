import React, { useState } from 'react';
import { Calendar, User, Tag, Search, ChevronRight, BookOpen, FileText, Award, Clock, Eye } from 'lucide-react';

const TeachersCategory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
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
      image: "/danceEvents.jpg",
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
      image: "DrawingEvent.webp",
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
      image: "MusicEvent.jpeg",
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
      image: "/GameEvent.jpg",
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
      image: "/YogaEvent.jpg",
      tags: ["Environment", "Stress-Free", "Support"]
    },
   
   
  ];

  const filteredPosts = examPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50  max-w-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="#" className="hover:text-orange-600 transition-colors">Home</a>
            <ChevronRight size={16} />
            <a href="#" className="hover:text-orange-600 transition-colors">Categories</a>
            <ChevronRight size={16} />
            <span className="text-orange-700 font-medium">Teachers</span>
          </nav>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-orange-400 text-stone-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
            <BookOpen size={40} />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Teachers</h1>
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
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredPosts.length} of {examPosts.length} articles
              </p>
            </div>


            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="space-y-8">
              {/* Categories Widget */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {['Exam', 'Class', 'Students', 'Teachers',].map((category, index) => (
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
                    <div key={post.id} className="flex gap-3">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-lg"
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

export default TeachersCategory;