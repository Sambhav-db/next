// components/HeroSection.jsx
import React from "react";
import Image from "next/image";
import { ArrowRight, User } from "lucide-react";

import heroMain from "@/app/assets/images/heroMain.webp";
import heroOne from "@/app/assets/images/heroOne.webp";
import heroTwo from "@/app/assets/images/heroTwo.webp";

const HeroSection = () => {
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
      category: "Sports",
    },
  ];

  return (
    <section className="relative pt-32 pb-20 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Glow Effects */}
      <div className="absolute w-96 h-96 bg-purple-500/20 blur-[120px] top-10 left-10" />
      <div className="absolute w-96 h-96 bg-blue-500/20 blur-[120px] bottom-10 right-10" />

      <div className="max-w-7xl mx-auto px-4"> 

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Card */}
          <article className="group relative lg:col-span-2 h-[430px] md:h-[520px] rounded-3xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:bg-white/10">
            <Image
              src={mainCard.image}
              alt={mainCard.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

            <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-purple-400/40 transition-all duration-300" />

            {/* Badge */}
            <div className="absolute top-5 left-5 z-10 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1 rounded-full text-xs">
              {mainCard.category}
            </div>

            {/* Content */}
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8">
              <div className="mb-5 h-1 w-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full group-hover:w-20 transition-all duration-300" />

              <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white mb-4 max-w-2xl">
                {mainCard.title}
              </h2>

              <p className="text-gray-300 text-base md:text-lg mb-5 max-w-xl">
                {mainCard.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 text-sm text-gray-300">
                  <User size={16} />
                  Written by {mainCard.author}
                </span>

                <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                  Read Article
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />
          </article>

          {/* Side Cards */}
          <div className="grid gap-6">
            {sideCards.map((card) => (
              <article
                key={card.title}
                className="group relative h-[250px] rounded-3xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover opacity-60 group-hover:opacity-85 group-hover:scale-110 transition-all duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-blue-400/40 transition-all duration-300" />

                {/* Badge */}
                <div className="absolute top-5 left-5 z-10 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1 rounded-full text-xs">
                  {card.category}
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                  <div className="mb-4 h-1 w-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full group-hover:w-16 transition-all duration-300" />

                  <h3 className="text-2xl font-semibold leading-tight text-white mb-2">
                    {card.title}
                  </h3>

                  <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                    {card.description}
                  </p>

                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 text-xs text-gray-300">
                      <User size={14} />
                      {card.author}
                    </span>

                    <ArrowRight
                      size={18}
                      className="text-white transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;