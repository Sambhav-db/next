import React from "react";
import Image from "next/image";
import aboutImg from "@/app/assets/images/about.webp";

const AboutSection = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-24 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-96 h-96 bg-purple-500/20 blur-[140px] top-10 left-10" />
        <div className="absolute w-96 h-96 bg-blue-500/20 blur-[140px] bottom-10 right-10" />
      </div>

      <div className="grid lg:grid-cols-2 gap-14 items-center">

        {/* IMAGE SIDE */}
        <div className="relative group">

          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <Image
              src={aboutImg}
              alt="About us"
              className="w-full h-[440px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-6 left-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 shadow-lg">
            <p className="text-xl font-bold">10K+ Readers</p>
            <p className="text-xs text-gray-300 mt-1">Trusted worldwide community</p>
          </div>
        </div>

        {/* TEXT SIDE */}
        <div>

          <p className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-xs px-4 py-1 rounded-full mb-5 text-gray-300">
            About DevBlog Pro
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            We build content that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              empowers developers
            </span>{" "}
            🚀
          </h2>

          <p className="text-gray-300 mb-5 text-lg">
            DevBlog Pro is a modern platform focused on delivering high-quality
            articles on development, design, and technology trends.
          </p>

          <p className="text-gray-400 mb-8">
            From beginner guides to advanced engineering concepts, we help developers
            stay ahead with practical, real-world knowledge.
          </p>

          {/* FEATURE GRID */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">

            {[
              "In-depth Tutorials",
              "Latest Tech Trends",
              "Real-world Projects",
              "Active Developer Community",
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white/5 hover:bg-white/10 transition border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 hover:text-white"
              >
                <span className="text-purple-400 mr-2">✓</span>
                {item}
              </div>
            ))}

          </div>

          {/* CTA */}
          <button className="relative px-7 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition-all duration-300 shadow-lg">
            Learn More
          </button>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;