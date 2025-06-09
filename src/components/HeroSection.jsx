import { Search, Check } from "lucide-react";
import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-coral-light/20 to-background py-16 lg:py-24 mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Let your{" "}
              <span className="text-orange-500">groceries</span>
              <br />
              come to you
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Get fresh groceries online without stepping out to make delicious food with the freshest ingredients
            </p>


            <div className="relative mb-8 ">
              <input
                type="text"
                placeholder="Search here"
                className="w-full pl-4 pr-12 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-coral outline-none "
              />
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <Search className="h-full w-20% text-gray-500" />
              </div>
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
                src="https://static.vecteezy.com/system/resources/thumbnails/053/346/221/small_2x/smiling-delivery-man-with-red-uniform-holding-a-shopping-bag-full-of-vegetable-side-view-isolate-on-transparency-background-png.png"
                alt="Delivery person with groceries"
                className="w-full max-w-md rounded-3xl "
              />
              <div className="flex flex-col gap-4">
                <div className="bg-white rounded-2xl p-5 shadow-lg animate-fade-in">
                  <img
                    src="https://media.istockphoto.com/id/1006196472/photo/bunch-of-spinach-leaves-on-isolated-white-background.jpg?s=612x612&w=0&k=20&c=OAIswtUC1aMNDwtMEFIaZv6fSIftsoAV-cgJZSGLJ7A="
                    alt="Fresh Spinach"
                    className="w-16 h-16 rounded-lg mb-2"
                  />

                  <h4 className="font-semibold text-gray-800 whitespace-nowrap">Fresh Spinach</h4>
                  <p className="text-coral font-bold">$12.00</p>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-lg animate-fade-in">
                  <img
                    src="https://t4.ftcdn.net/jpg/02/28/90/67/360_F_228906712_r4bb71gSmKvyDHq54JvjXAhKWpQiqWvX.jpg"
                    alt="Fresh Carrot"
                    className="w-16 h-16 rounded-lg mb-2"
                  />
                  <h4 className="font-semibold text-gray-800 whitespace-nowrap">Fresh Carrot</h4>
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