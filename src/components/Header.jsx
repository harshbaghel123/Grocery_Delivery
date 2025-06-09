import React from "react"
import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white  border-border fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <span className="text-orange-400">Finest</span>
              <span className="text-yellow-500">Mart</span>
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-red-400 font-medium border-b-2 border-coral pb-1">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-coral transition-colors">
              Categories
            </a>
            <a href="#" className="text-gray-600 hover:text-coral transition-colors">
              Sales
            </a>
            <a href="#" className="text-gray-600 hover:text-coral transition-colors">
              FAQ
            </a>
            <a href="#" className="text-gray-600 hover:text-coral transition-colors">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-coral transition-colors">
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-coral text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </div>
            <button className="px-4 py-2 text-red-400  transition-colors underline rounded-2xl">
              Sign In
            </button>
            <button className="px-4 py-2 text-white  text-coral rounded-2xl transition-colors  bg-red-400">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;