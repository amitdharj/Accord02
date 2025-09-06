import { useState } from 'react';
import { MapPin, Mail, Facebook, Twitter, Linkedin, Instagram, ShoppingCart, Search, ChevronDown, Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);

  return (
    <div className="max-w-screen text-wrap m-auto">
      {/* Top Bar */}
      <div className="bg-slate-600 text-white text-sm m-auto">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail size={16} className="text-orange-400" />
              <span>info@example.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">Follow Us On:</span>
            <div className="flex space-x-2 ">
              <Facebook size={16} className="hover:text-orange-400 cursor-pointer transition-colors" />
              <Twitter size={16} className="hover:text-orange-400 cursor-pointer transition-colors" />
              <Linkedin size={16} className="hover:text-orange-400 cursor-pointer transition-colors" />
              <Instagram size={16} className="hover:text-orange-400 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-orange-50 relative z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14  flex items-center justify-center">
                <img src="/acorn-logo.png" alt="logo"/>
              </div>
              <a href="/" className="text-2xl font-bold text-gray-800">Little Acorn</a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div 
                className="relative"
                onMouseEnter={() => setIsCategoryOpen(true)}
                onMouseLeave={() => setIsCategoryOpen(false)}
              >
                <button 
                  className="flex items-center space-x-1 bg-orange-100 px-4 py-2 rounded-lg text-orange-600 font-medium hover:bg-orange-200 transition-colors"
                >
                  <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-0.5">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <span>Category</span>
                  <ChevronDown size={16} className={`transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
                </button>
                {isCategoryOpen && (
                  <div className="absolute top-full left-0 mt-0 pt-2">
                    <div className="w-48 bg-white rounded-lg shadow-lg border">
                      <div className="py-2">
                        <NavLink 
                          to="/Category"
                          className="block px-4 py-2 text-gray-700 hover:bg-orange-50 transition-colors"
                          onClick={() => setIsCategoryOpen(false)}
                        >
                          Events
                        </NavLink>
                        <NavLink 
                          to="/ClassCategory" 
                          className="block px-4 py-2 text-gray-700 hover:bg-orange-50 transition-colors"
                          onClick={() => setIsCategoryOpen(false)}
                        >
                          Class
                        </NavLink>
                        <NavLink
                          to="/TeachersCategory"
                          className="block px-4 py-2 text-gray-700 hover:bg-orange-50 transition-colors"
                          onClick={() => setIsCategoryOpen(false)}
                        >
                          Teachers
                        </NavLink>
                        <NavLink 
                          to="/StudentCategory"
                          className="block px-4 py-2 text-gray-700 hover:bg-orange-50 transition-colors" 
                          onClick={() => setIsCategoryOpen(false)}
                        >
                          Students
                        </NavLink>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <NavLink to="/"  className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Home</NavLink>
              <NavLink to="/AboutSection" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">About Us</NavLink>
              <NavLink to="/ProgramSection" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Programs</NavLink>
              <NavLink to="/YogaSection" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Yoga & Dance</NavLink>
              <NavLink to="/ContactSection" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Contact</NavLink>
            </nav>

            {/* Right Side Icons & CTA */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                <Search size={20} className="text-gray-600 hover:text-orange-500 cursor-pointer transition-colors" />
              </div>
              
              <NavLink to="/ContactSection" className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                Contact Us →
              </NavLink>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-gray-600 hover:text-orange-500"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

           {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-orange-200">
              <nav className="flex flex-col space-y-3 mt-4">
                <button
                  type="button"
                  className="flex items-center justify-between text-gray-700 hover:text-orange-500 transition-colors font-medium"
                  onClick={() => setIsMobileCategoryOpen((prev) => !prev)}
                >
                  <span>Category</span>
                  <ChevronDown size={16} className={isMobileCategoryOpen ? "rotate-180 transition-transform" : "transition-transform"} />
                </button>
                {isMobileCategoryOpen && (
                  <div className="pl-4">
                    <NavLink 
                      to="/Category" 
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Events
                    </NavLink>
                    <NavLink 
                      to="/ClassCategory" 
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Class
                    </NavLink>
                    <NavLink 
                      href="/TeachersCategory" 
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Teachers
                    </NavLink>
                    <NavLink 
                      to="/StudentCategory" 
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Students
                    </NavLink>
                  </div>
                )}
                <NavLink to="/" className="text-gray-700 hover:text-orange-500 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                <NavLink to="/AboutSection" className="text-gray-700 hover:text-orange-500 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
                <NavLink to="/ProgramSection" className="text-gray-700 hover:text-orange-500 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Programs</NavLink>
                <NavLink to="/YogaSection" className="text-gray-700 hover:text-orange-500 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Yoga & Dance</NavLink>
                <NavLink to="/ContactSection" className="text-gray-700 hover:text-orange-500 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
                <div className="flex items-center space-x-4 pt-3 border-t border-orange-200">
                  
                  <Search size={20} className="text-gray-600" />
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}