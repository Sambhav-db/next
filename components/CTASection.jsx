import React from "react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-28 px-4">

      {/* Dark Base Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Glow Effects */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[140px] top-0 left-10" />
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[140px] bottom-0 right-10" />

      {/* Floating Glass Shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-16 left-16 w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-md animate-float" />
        <div className="absolute top-40 right-24 w-12 h-12 bg-white/10 rounded-xl backdrop-blur-md animate-float delay-200" />
        <div className="absolute bottom-24 left-24 w-14 h-14 bg-white/10 rounded-2xl backdrop-blur-md animate-float delay-500" />
        <div className="absolute bottom-12 right-16 w-20 h-20 bg-white/10 rounded-3xl backdrop-blur-md animate-float delay-700" />
      </div>

      {/* Glass Card Container */}
      <div className="max-w-4xl mx-auto text-center">

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl px-8 py-16 shadow-2xl">

          {/* Label */}
          <p className="inline-block bg-white/10 border border-white/20 text-xs px-4 py-1 rounded-full mb-5 text-gray-300">
            Get Started
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Build, share & grow your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              developer journey
            </span>{" "}
            🚀
          </h2>

          {/* Description */}
          <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto">
            Share your ideas, publish articles, and grow your audience with DevBlog Pro.
            A modern platform built for developers who create.
          </p>

          {/* CTA Button */}
          <button className="inline-flex items-center gap-2 bg-white text-black px-7 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
            Create Your Blog
            <ArrowRight size={18} />
          </button>

        </div>
      </div>
    </section>
  );
};

export default CTASection;