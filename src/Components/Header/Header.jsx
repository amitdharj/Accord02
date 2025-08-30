import { useState } from 'react';
import { MapPin, Mail, Facebook, Twitter, Linkedin, Instagram, ShoppingCart, Search, ChevronDown, Menu, X } from 'lucide-react';
import {Link,NavLink} from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-slate-600 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin size={16} className="text-orange-400" />
              <span>6391 Elgin St, Celina, USA</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} className="text-orange-400" />
              <span>info@example.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">Follow Us On:</span>
            <div className="flex space-x-2">
              <Facebook size={16} className="hover:text-orange-400 cursor-pointer transition-colors" />
              <Twitter size={16} className="hover:text-orange-400 cursor-pointer transition-colors" />
              <Linkedin size={16} className="hover:text-orange-400 cursor-pointer transition-colors" />
              <Instagram size={16} className="hover:text-orange-400 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">⭐</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">Kidsa</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="relative">
                <button 
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
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
                  <ChevronDown size={16} />
                </button>
                {isCategoryOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50">Toys</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50">Games</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50">Learning</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-orange-50">Arts & Crafts</a>
                    </div>
                  </div>
                )}
              </div>
              <NavLink to="/" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Home</NavLink>
              <NavLink to="/AboutSection" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">About Us</NavLink>
              <NavLink to="/Programs" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Programs</NavLink>
              <NavLink to="/Blog" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Blog</NavLink>
              <NavLink to="/Contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Contact</NavLink>
            </nav>

            {/* Right Side Icons & CTA */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                <div className="relative">
                  <ShoppingCart size={20} className="text-gray-600 hover:text-orange-500 cursor-pointer transition-colors" />
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
                </div>
                <Search size={20} className="text-gray-600 hover:text-orange-500 cursor-pointer transition-colors" />
              </div>
              
              <button className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                Get A Quote →
              </button>

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
                <button className="flex items-center justify-between text-gray-700 hover:text-orange-500 transition-colors font-medium">
                  <span>Category</span>
                  <ChevronDown size={16} />
                </button>
                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Home</a>
                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">About Us</a>
                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Programs</a>
                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Pages</a>
                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Blog</a>
                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Contact</a>
                <div className="flex items-center space-x-4 pt-3 border-t border-orange-200">
                  <div className="relative">
                    <ShoppingCart size={20} className="text-gray-600" />
                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
                  </div>
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