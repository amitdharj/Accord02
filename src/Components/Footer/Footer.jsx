import React from 'react';

const Footer = () => {
  return (
    <div className="relative">
      {/* Main Footer Content */}
      <div className="bg-gray-100 px-8 py-16 relative overflow-hidden">
        {/* Giraffe Illustration */}
        <div className="absolute right-8 top-4">
          <div className="relative">
            {/* Giraffe Body */}
            <div className="w-32 h-48 bg-orange-200 rounded-full relative">
              {/* Giraffe spots */}
              <div className="absolute top-4 left-4 w-4 h-4 bg-orange-300 rounded-full"></div>
              <div className="absolute top-8 right-6 w-3 h-3 bg-orange-300 rounded-full"></div>
              <div className="absolute top-16 left-6 w-5 h-5 bg-orange-300 rounded-full"></div>
              <div className="absolute top-24 right-4 w-4 h-4 bg-orange-300 rounded-full"></div>
              <div className="absolute top-32 left-8 w-3 h-3 bg-orange-300 rounded-full"></div>
              <div className="absolute top-40 right-8 w-4 h-4 bg-orange-300 rounded-full"></div>
              
              {/* Giraffe Head */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-20 bg-orange-200 rounded-full relative">
                  {/* Eyes */}
                  <div className="absolute top-6 left-3 w-2 h-1 bg-gray-800 rounded-full"></div>
                  <div className="absolute top-6 right-3 w-2 h-1 bg-gray-800 rounded-full"></div>
                  {/* Nostrils */}
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-gray-600 rounded-full"></div>
                  {/* Horns */}
                  <div className="absolute -top-4 left-4 w-2 h-6 bg-orange-300 rounded-full"></div>
                  <div className="absolute -top-4 right-4 w-2 h-6 bg-orange-300 rounded-full"></div>
                  <div className="absolute -top-6 left-4 w-3 h-3 bg-orange-400 rounded-full"></div>
                  <div className="absolute -top-6 right-4 w-3 h-3 bg-orange-400 rounded-full"></div>
                  {/* Head spots */}
                  <div className="absolute top-2 left-2 w-2 h-2 bg-orange-300 rounded-full"></div>
                  <div className="absolute top-4 right-2 w-2 h-2 bg-orange-300 rounded-full"></div>
                </div>
                {/* Neck */}
                <div className="w-8 h-16 bg-orange-200 mx-auto relative">
                  <div className="absolute top-2 left-1 w-2 h-2 bg-orange-300 rounded-full"></div>
                  <div className="absolute top-8 right-1 w-2 h-2 bg-orange-300 rounded-full"></div>
                </div>
              </div>
              
              {/* Legs */}
              <div className="absolute -bottom-8 left-6 w-3 h-12 bg-orange-200"></div>
              <div className="absolute -bottom-8 right-6 w-3 h-12 bg-orange-200"></div>
              <div className="absolute -bottom-8 left-6 w-4 h-2 bg-gray-800 rounded-full"></div>
              <div className="absolute -bottom-8 right-6 w-4 h-2 bg-gray-800 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll to top button */}
        <div className="absolute right-8 bottom-8">
          <button className="w-12 h-12 bg-orange-400 hover:bg-orange-500 rounded-full flex items-center justify-center shadow-lg transition-colors">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              {/* Rainbow Logo */}
              <div className="relative mr-4">
                <div className="w-16 h-16 relative">
                  {/* Rainbow arcs */}
                  <div className="absolute inset-0 border-4 border-orange-300 rounded-full"></div>
                  <div className="absolute inset-1 border-4 border-orange-400 rounded-full"></div>
                  <div className="absolute inset-2 border-4 border-orange-500 rounded-full"></div>
                  {/* Cloud */}
                  <div className="absolute bottom-2 left-2 w-8 h-4 bg-white rounded-full"></div>
                  <div className="absolute bottom-1 left-3 w-6 h-3 bg-white rounded-full"></div>
                  {/* Star */}
                  <div className="absolute -top-1 -right-1 text-orange-400 text-lg">★</div>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-700">Kidsa</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Phasellus ultrices aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur lacinia mollis
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-white rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Quick Links</h3>
            <div className="w-12 h-1 bg-orange-400 mb-6"></div>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-400 transition-colors flex items-center">
                  <span className="mr-2 text-orange-400">›</span>
                  Our Teachers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-400 transition-colors flex items-center">
                  <span className="mr-2 text-orange-400">›</span>
                  Our Students
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-400 transition-colors flex items-center">
                  <span className="mr-2 text-orange-400">›</span>
                  Our School
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-400 transition-colors flex items-center">
                  <span className="mr-2 text-orange-400">›</span>
                  Education
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Categories</h3>
            <div className="w-12 h-1 bg-orange-400 mb-6"></div>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-400 transition-colors flex items-center">
                  <span className="mr-2 text-orange-400">›</span>
                  Our Teachers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-400 transition-colors flex items-center">
                  <span className="mr-2 text-orange-400">›</span>
                  Our Students
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-400 transition-colors flex items-center">
                  <span className="mr-2 text-orange-400">›</span>
                  Our School
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-400 transition-colors flex items-center">
                  <span className="mr-2 text-orange-400">›</span>
                  Education
                </a>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Posts</h3>
            <div className="w-12 h-1 bg-orange-400 mb-6"></div>
            <div className="space-y-4">
              <div className="flex space-x-3">
                <div className="w-16 h-12 bg-orange-200 rounded flex-shrink-0 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-orange-200 to-orange-300"></div>
                </div>
                <div>
                  <div className="flex items-center text-orange-400 text-sm mb-1">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    May 16, 2024
                  </div>
                  <h4 className="text-gray-700 text-sm font-medium leading-tight">
                    All Inclusive Ultimate Circle Island Day with Lunch
                  </h4>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <div className="w-16 h-12 bg-blue-200 rounded flex-shrink-0 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300"></div>
                </div>
                <div>
                  <div className="flex items-center text-orange-400 text-sm mb-1">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    May 16, 2024
                  </div>
                  <h4 className="text-gray-700 text-sm font-medium leading-tight">
                    That jerk Form Finance really threw me
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave and Footer */}
      <div className="relative">
        {/* Wavy background */}
        <div className="h-16 bg-orange-100 relative overflow-hidden">
          <svg 
            className="absolute inset-0 w-full h-full" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            fill="none"
          >
            <path 
              d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 V120 H0 V60Z" 
              fill="rgb(186 224 132)"
            />
          </svg>
        </div>
        
        {/* Copyright section */}
        <div className="bg-orange-100 px-8 py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-gray-600">
            <div>Copyright © 2025 kidsa All Rights Reserved. Test</div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-800 transition-colors">Terms & Condition</a>
              <a href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;