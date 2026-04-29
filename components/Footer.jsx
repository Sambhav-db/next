import React from "react";
import Link from "next/link";
import { GitBranch, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Glow Effects */}
      <div className="absolute w-96 h-96 bg-purple-500/20 blur-[140px] top-0 left-10" />
      <div className="absolute w-96 h-96 bg-blue-500/20 blur-[140px] bottom-0 right-10" />

      <div className="max-w-7xl mx-auto px-4 py-20 text-white">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              DevBlog <span className="text-purple-400">Pro</span>
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed">
              A modern platform for developers to share knowledge, explore ideas,
              and grow together through high-quality content.
            </p>

            {/* mini highlight card */}
            <div className="mt-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 text-xs text-gray-300">
              🚀 Built for modern developers
            </div>
          </div>

          {/* LINKS */}
          {[
            {
              title: "Product",
              links: ["Features", "Pricing", "Blog", "Docs"],
            },
            {
              title: "Company",
              links: ["About", "Careers", "Contact"],
            },
            {
              title: "Legal",
              links: ["Privacy Policy", "Terms of Service"],
            },
          ].map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4 text-white">
                {section.title}
              </h3>

              <ul className="space-y-3 text-sm text-gray-400">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="hover:text-white transition hover:translate-x-1 inline-block duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* COPYRIGHT */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} DevBlog Pro. All rights reserved.
          </p>

          {/* SOCIALS */}
          <div className="flex gap-4">

            <a
              href="#"
              className="group p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <GitBranch size={18} className="group-hover:scale-110 transition" />
            </a>

            <a
              href="#"
              className="group p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <X size={18} className="group-hover:scale-110 transition" />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;