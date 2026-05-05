import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import aboutImg from "@/app/assets/images/aboutt.jpeg";

const features = [
  "In-depth Tutorials",
  "Latest Tech Trends",
  "Real-world Projects",
  "Active Developer Community",
];

const AboutSection = () => {
  return (
    <section className="relative py-24 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Glow Effects */}
      <div className="absolute w-96 h-96 bg-purple-500/20 blur-[120px] top-10 left-10" />
      <div className="absolute w-96 h-96 bg-blue-500/20 blur-[120px] bottom-10 right-10" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="relative h-[420px] md:h-[500px] rounded-3xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg">
              <Image
                src={aboutImg}
                alt="About DevBlog Pro"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

              <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-purple-400/40 transition-all duration-300" />

              {/* Image Bottom Caption */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="h-1 w-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mb-4 group-hover:w-20 transition-all duration-300" />

                <h3 className="text-2xl font-semibold text-white mb-2">
                  Practical learning for modern developers
                </h3>

                <p className="text-sm text-gray-300 max-w-md">
                  Tutorials, engineering stories, and real-world guides built to
                  help developers ship better software.
                </p>
              </div>
            </div>

            {/* Floating Stat Card */}
            <div className="absolute -bottom-6 left-6 z-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 shadow-lg">
              <p className="text-2xl font-bold text-white">10K+ Readers</p>
              <p className="text-xs text-gray-300 mt-1">
                Trusted worldwide community
              </p>
            </div>

            {/* Small Floating Badge */}
            <div className="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 text-xs text-gray-200 shadow-lg">
              🚀 Developer-first platform
            </div>
          </div>

          {/* Text Side */}
          <div>
            <p className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-xs px-4 py-1 rounded-full mb-5 text-gray-300">
              About DevBlog Pro
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              We build content that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                empowers developers
              </span>
            </h2>

            <p className="text-gray-300 mb-5 text-lg leading-relaxed">
              DevBlog Pro is a modern platform focused on delivering high-quality
              articles on development, design, and technology trends.
            </p>

            <p className="text-gray-400 mb-8 leading-relaxed">
              From beginner guides to advanced engineering concepts, we help
              developers stay ahead with practical, real-world knowledge.
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((item) => (
                <div
                  key={item}
                  className="group bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-400/30 rounded-2xl px-4 py-4 text-sm text-gray-300 hover:text-white"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 border border-white/10 text-purple-300 group-hover:text-blue-300 transition-colors duration-300">
                      <CheckCircle2 size={16} />
                    </span>

                    <span>{item}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-slate-950 font-medium hover:scale-105 transition-all duration-300 shadow-lg">
              Learn More
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;