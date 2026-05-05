import Image from "next/image";
import aboutImg from "@/app/assets/images/aboutt.jpeg"; // add your image

const posts = [
  {
    title: "Scaling Next.js Apps: Folder Structure That Works",
    excerpt:
      "A practical way to organize growing Next.js applications without over-engineering.",
    author: "Ava Reed",
    image: aboutImg,
  },
  {
    title: "API Security Basics for Full-Stack Teams",
    excerpt:
      "Critical checks every app should implement for auth, validation, and rate limiting.",
    author: "Noah Patel",
    image: aboutImg,
  },
  {
    title: "Writing Cleaner React Components in 2026",
    excerpt:
      "Simple conventions that improve readability and maintainability across teams.",
    author: "Mia Turner",
    image: aboutImg,
  },
];

export default function BlogPage() {
  return (
    <main className="relative pt-32 pb-20 text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Glow Effects */}
      <div className="absolute w-96 h-96 bg-purple-500/20 blur-[120px] top-10 left-10" />
      <div className="absolute w-96 h-96 bg-blue-500/20 blur-[120px] bottom-10 right-10" />

      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 mb-14 text-center">
        <p className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-xs px-4 py-1 rounded-full mb-5 text-gray-300">
          Latest Articles
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Insights &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Tutorials
          </span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Read curated posts on modern web development, architecture, and team workflows.
        </p>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <article
            key={post.title}
            className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative w-full h-52 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-3 leading-snug text-white">
                {post.title}
              </h2>

              <p className="text-gray-300 mb-4">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">
                  By {post.author}
                </span>

                <span className="text-sm text-purple-400 opacity-0 group-hover:opacity-100 transition">
                  Read →
                </span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}