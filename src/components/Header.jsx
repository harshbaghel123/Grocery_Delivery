import React from "react"
import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <span className="text-coral">Finest</span>
              <span className="text-gray-700">Mart</span>
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-coral font-medium border-b-2 border-coral pb-1">
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
            <button className="px-4 py-2 text-coral hover:text-coral-dark transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 bg-coral hover:bg-coral-dark text-white rounded-md transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;