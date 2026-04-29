import Image from "next/image";
import aboutImg from "@/app/assets/images/about.webp"; // add your image

const values = [
  {
    title: "Practical Knowledge",
    text: "We focus on production-ready patterns, not just theory.",
  },
  {
    title: "Community First",
    text: "Developers can learn, collaborate, and grow together.",
  },
  {
    title: "Continuous Learning",
    text: "We keep pace with modern frameworks and engineering practices.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative pt-32 pb-20 text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Glow Effects */}
      <div className="absolute w-96 h-96 bg-purple-500/20 blur-[120px] top-10 left-10" />
      <div className="absolute w-96 h-96 bg-blue-500/20 blur-[120px] bottom-10 right-10" />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* TEXT */}
        <div>
          <p className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-xs px-4 py-1 rounded-full mb-5 text-gray-300">
            About DevBlog Pro
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Building a stronger developer community through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              useful content
            </span>
          </h1>

          <p className="text-gray-300 text-lg">
            DevBlog Pro is a platform for tutorials, engineering stories, and
            practical guides that help developers ship better software.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative group">
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src={aboutImg}
              alt="Developer workspace"
              width={600}
              height={420}
              className="object-cover w-full h-[350px] md:h-[420px] transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 text-sm shadow-lg">
            🚀 Trusted by developers worldwide
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="max-w-7xl mx-auto px-4 mt-24">
        <h2 className="text-3xl font-bold mb-10 text-center">
          What We Value
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((item, i) => (
            <article
              key={item.title}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">
                {item.title}
              </h3>

              <p className="text-gray-300 mb-4">
                {item.text}
              </p>

              {/* subtle accent line */}
              <div className="h-1 w-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full group-hover:w-16 transition-all duration-300" />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}