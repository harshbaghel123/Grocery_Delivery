import React from "react"
const CategoriesSection = () => {
  const categories = [
    {
      id: 1,
      name: "Dairy Products",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "🥛",

      iconBg: "bg-green-100"
    },
    {
      id: 2,
      name: "Vegetables & Fruits",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "🥕",

      iconBg: "bg-orange-100"
    },
    {
      id: 3,
      name: "Spices & Seasonings",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "🧂",

      iconBg: "bg-yellow-100"
    },
    {
      id: 4,
      name: "Honey",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "🍯",

      iconBg: "bg-amber-100"
    },
    {
      id: 5,
      name: "Flour",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "🌾",
      iconBg: "bg-red-100"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`${category.bgColor} rounded-2xl p-6 cursor-pointer group`}
            >
              <div className={`${category.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}>
                <span className="text-2xl">{category.icon}</span>
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