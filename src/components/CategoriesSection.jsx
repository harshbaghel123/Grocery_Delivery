import React from "react";

const CategoriesSection = () => {

  const categories = [
    {
      id: 1,
      name: "Dairy Products",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://cdn-icons-png.flaticon.com/512/1046/1046849.png"
    },
    {
      id: 2,
      name: "Vegetables & Fruits",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://cdn-icons-png.flaticon.com/512/2909/2909765.png"
    },
    {
      id: 3,
      name: "Spices & Seasonings",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://cdn-icons-png.flaticon.com/512/3174/3174880.png"
    },
    {
      id: 4,
      name: "Honey",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://cdn-icons-png.flaticon.com/512/2755/2755406.png"
    },
    {
      id: 5,
      name: "Flour",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
    }
  ];

  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl p-6 cursor-pointer group  hover:shadow-xl transition"
            >
              <div className="w-24 h-24 rounded-2xl mb-4 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
