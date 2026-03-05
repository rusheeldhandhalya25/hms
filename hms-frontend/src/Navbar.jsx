import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path 
      ? "bg-gray-800 text-white shadow-sm ring-1 ring-gray-700"
      : "text-gray-400 hover:bg-gray-800 hover:text-white transition-colors";
  };

  return (
    <nav className="bg-gray-900/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center gap-2">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span className="text-xl font-bold text-white tracking-tight">HMS Portal</span>
            </div>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-4">
              <Link
                to="/reception"
                className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive('/reception')}`}
              >
                Reception
              </Link>
              <Link
                to="/doctor"
                className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive('/doctor')}`}
              >
                Doctor
              </Link>
              <Link
                to="/patient"
                className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive('/patient')}`}
              >
                Patient
              </Link>
            </div>
          </div>
          <div className="flex items-center">
             <div className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold shadow-md ring-2 ring-gray-700">
                U
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;