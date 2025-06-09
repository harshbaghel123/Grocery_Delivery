import { Search, Check } from "lucide-react";
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-coral-light/20 to-background py-16 lg:py-12 mb-10 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Let your <span className="text-orange-500">groceries</span><br />
              come to you
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Get fresh groceries online without stepping out to make delicious food with the freshest ingredients
            </p>
            <div className="flex w-[80%] max-w-md mb-6 rounded-md overflow-hidden bg-gray-100 border border-none focus-within:ring-2 focus-within:ring-coral hover:border-gray-300">
              <input
                type="text"
                placeholder="Search here"
                className="w-[85%] pl-4 py-2 text-base outline-none bg-gray-100 border-none focus:ring-0"
              />
              <button className="w-[15%] flex items-center justify-center bg-red-400 text-white">
                <Search className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "Fresh Vegetables",
                "100% Guarantee",
                "Cash on Delivery",
                "Fast Delivery",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className="bg-yellow-400 rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="flex items-center gap-6">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/053/346/221/small_2x/smiling-delivery-man-with-red-uniform-holding-a-shopping-bag-full-of-vegetable-side-view-isolate-on-transparency-background-png.png"
                alt="Delivery person with groceries"
                className="w-full max-w-md rounded-3xl"
              />
              <div className="flex flex-col gap-4">
                {[{
                  name: "Fresh Spinach",
                  price: "$12.00",
                  img: "https://media.istockphoto.com/id/1006196472/photo/bunch-of-spinach-leaves-on-isolated-white-background.jpg?s=612x612&w=0&k=20&c=OAIswtUC1aMNDwtMEFIaZv6fSIftsoAV-cgJZSGLJ7A="
                }, {
                  name: "Fresh Carrot",
                  price: "$9.00",
                  img: "https://t4.ftcdn.net/jpg/02/28/90/67/360_F_228906712_r4bb71gSmKvyDHq54JvjXAhKWpQiqWvX.jpg"
                }].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-5 shadow-lg animate-fade-in border border-gray-400">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg mb-2"
                    />
                    <h4 className="font-semibold text-gray-800 whitespace-nowrap">{item.name}</h4>
                    <p className="text-red-400 font-bold">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
