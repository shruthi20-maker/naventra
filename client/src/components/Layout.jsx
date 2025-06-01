import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-primary text-white p-2 rounded-lg shadow-sm group-hover:bg-primary-hover transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                </svg>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-800 hidden sm:block">Naventra Contact Manager</h1>
                <p className="text-xs text-gray-500 hidden md:block">Organize your contacts</p>
              </div>
            </Link>

            {!isHomePage && (
              <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                <span>Back to Contacts</span>
              </Link>
            )}

            {isHomePage && (
              <Link to="/add-contact" className="btn btn-primary text-sm">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <span>New Contact</span>
              </Link>
            )}
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-white border-t mt-6 py-6">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <p>&copy; {new Date().getFullYear()} Contact Manager App</p>
            </div>
            <div className="mt-3 md:mt-0">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary">
                  <span className="sr-only">About</span>
                  <span>About</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary">
                  <span className="sr-only">Privacy</span>
                  <span>Privacy</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary">
                  <span className="sr-only">Terms</span>
                  <span>Terms</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
