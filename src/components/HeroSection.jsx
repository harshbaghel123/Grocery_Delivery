import { Search, Check } from "lucide-react";
import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-coral-light/20 to-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Let your{" "}
              <span className="text-coral">groceries</span>
              <br />
              come to you
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Get fresh groceries online without stepping out to make delicious food with the freshest ingredients
            </p>


            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search here"
                className="w-full pl-4 pr-12 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-coral outline-none"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-coral hover:bg-coral-dark text-white px-6 rounded-lg transition-colors">
                <Search className="h-5 w-5" />
              </button>
            </div>


            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <div className="bg-yellow-400 rounded-full p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-600">Fresh Vegetables</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-yellow-400 rounded-full p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-600">100% Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-yellow-400 rounded-full p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-600">Cash on Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-yellow-400 rounded-full p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-600">Fast Delivery</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=600&fit=crop"
                alt="Delivery person with groceries"
                className="w-full max-w-md rounded-3xl shadow-2xl"
              />
              <div className="flex flex-col gap-4">
                <div className="bg-white rounded-2xl p-5 shadow-lg animate-fade-in">
                  <img
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=80&h=80&fit=crop"
                    alt="Fresh Spinach"
                    className="w-16 h-16 rounded-lg mb-2"
                  />
                  <h4 className="font-semibold text-gray-800">Fresh Spinach</h4>
                  <p className="text-coral font-bold">$12.00</p>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-lg animate-fade-in">
                  <img
                    src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=80&h=80&fit=crop"
                    alt="Fresh Carrot"
                    className="w-16 h-16 rounded-lg mb-2"
                  />
                  <h4 className="font-semibold text-gray-800">Fresh Carrot</h4>
                  <p className="text-coral font-bold">$9.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 