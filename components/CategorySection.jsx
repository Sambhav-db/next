import React from "react";
import Image from "next/image";
import catOne from "@/app/assets/images/catOne.png";
import catTwo from "@/app/assets/images/catTwo.png";
import catThree from "@/app/assets/images/catThree.png";
import catFour from "@/app/assets/images/catFour.png";
import { ChevronRight } from "lucide-react";

const CategorySection = () => {
  // Example category data
  const categories = [
    {
      title: "Tech",
      description: "The latest in technology and development trends.",
      image: catOne, 
    },
    {
      title: "Lifestyle",
      description: "Tips and stories for a better lifestyle.",
      image: catTwo,
    },
    {
      title: "Sports",
      description: "Latest updates from the world of sports.",
      image: catThree,
    },
    {
      title: "Health",
      description: "Stay fit and healthy with these articles.",
      image: catFour,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">
        Explore Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer bg-white transition-all duration-300 ease-in-out"
          >
            {/* Card Image (Initially hidden and the background is white) */}
            <div
              className="relative w-full h-64 bg-gray-800 group-hover:bg-cover group-hover:bg-center transition-all duration-300"
              style={{ backgroundImage: `url(${category.image})` }}
            >
              {/* Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-300"></div>

              {/* Image (hidden by default, but displayed on hover) */}
              <Image
                src={category.image}
                alt={category.title}
                layout="fill"
                className="object-cover opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ zIndex: 1 }}
              />
            </div>

            {/* Card Content (Button hidden by default) */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white opacity-100 group-hover:opacity-0 group-hover:text-white transition-all duration-300"
              style={{ zIndex: 9 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{category.title}</h3>
              <p className="text-sm text-center mb-4">{category.description}</p>
              {/* Button shown only on hover */}
              <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-all duration-300 opacity-0 group-hover:opacity-100">
                {category.buttonText}
              </button>
            </div>

            {/* On Hover State */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#00000080] p-6 bg-opacity-40 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-0 transition-all duration-300" style={{ zIndex: 9 }}>
              <h3 className="text-2xl font-semibold text-white mb-2">
                {category.title}
              </h3>
              <p className="text-sm text-center text-white mb-4">{category.description}</p>
              <a href="#" className="text-white font-semibold hover:underline flex align-center">
                Explore Category <ChevronRight size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
