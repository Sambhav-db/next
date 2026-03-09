// components/HeroSection.jsx
import React from "react";
import heroMain from "@/app/assets/images/heroMain.webp";
import heroOne from "@/app/assets/images/heroOne.webp";
import heroTwo from "@/app/assets/images/heroTwo.webp";
import Image from "next/image";

const HeroSection = () => {
  // Example data
  const mainCard = {
    title: "Mastering Next.js 13",
    description:
      "Learn the latest features of Next.js 13 and build scalable apps.",
    author: "John Doe",
    image: heroMain,
    category: "Tech",
  };

  const sideCards = [
    {
      title: "Tailwind CSS Tips",
      description: "Quick tips to improve your Tailwind workflow.",
      author: "Jane Smith",
      image: heroOne,
      category: "Lifestyle",
    },
    {
      title: "React 18 Updates",
      description: "What’s new in React 18 and how to upgrade smoothly.",
      author: "Alex Johnson",
      image: heroTwo,
      category: "sports",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Card */}
        <div className="relative flex-1 lg:flex-[2] rounded-xl overflow-hidden shadow-lg h-96 lg:h-[400px]">
          {/* Badge */}
          <div className="absolute top-4 left-4 bg-[#f1f1ff] text-[#635bff] px-4 py-1 rounded-full text-xs font-semibold z-10">
            {mainCard.category}
          </div>
          <Image
            src={mainCard.image}
            alt={mainCard.title}
            fill
            className="object-cover rounded-xl"
          />
          <div className="absolute inset-0  bg-opacity-40 p-6 flex flex-col justify-end">
            <h2 className="text-3xl font-bold text-white mb-2">
              {mainCard.title}
            </h2>
            <p className="text-white mb-2">{mainCard.description}</p>
            <span className="text-sm text-gray-200">
              Written by {mainCard.author}
            </span>
          </div>
        </div>

        {/* Side Cards */}
        <div className="flex flex-col gap-6 flex-1 lg:flex-[1]">
          {sideCards.map((card, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-md h-48"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 bg-[#f1f1ff] text-[#635bff] px-4 py-1 rounded-full text-xs font-semibold z-10">
                {card.category}
              </div>
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {card.title}
                </h3>
                <p className="text-sm text-white mb-1">{card.description}</p>
                <span className="text-xs text-gray-200">
                  Written by {card.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
