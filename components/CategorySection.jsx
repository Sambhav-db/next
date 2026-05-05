import React from "react";
import Image from "next/image";
import catOne from "@/app/assets/images/catOne.png";
import catTwo from "@/app/assets/images/catTwo.png";
import catThree from "@/app/assets/images/catThree.png";
import catFour from "@/app/assets/images/catFour.png";
import { ChevronRight } from "lucide-react";

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

const CategorySection = () => {
  return (
    <section className="relative py-24 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Glow Effects */}
      <div className="absolute w-96 h-96 bg-purple-500/20 blur-[120px] top-0 left-10" />
      <div className="absolute w-96 h-96 bg-blue-500/20 blur-[120px] bottom-0 right-10" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-xs px-4 py-1 rounded-full mb-5 text-gray-300">
            Browse Topics
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            Explore{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Categories
            </span>
          </h2>

          <p className="text-gray-300 text-lg">
            Find tutorials, stories, and practical guides across topics that help
            developers learn faster and build better.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <article
              key={category.title}
              className="group relative h-[320px] rounded-3xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
            >
              {/* Image */}
              <Image
                src={category.image}
                alt={category.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover opacity-45 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

              {/* Subtle Border Glow */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-purple-400/40 transition-all duration-300" />

              {/* Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                <div className="mb-5 h-1 w-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full group-hover:w-16 transition-all duration-300" />

                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {category.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed mb-5">
                  {category.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-white/90 hover:text-white transition-all duration-300"
                >
                  Explore Category
                  <ChevronRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>

              {/* Hover Shine */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;