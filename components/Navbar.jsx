import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] px-4 max-w-7xl z-50">
      <div className="flex items-center justify-between px-6 py-3 rounded-2xl
        bg-white/10 backdrop-blur-lg border border-white/20
        shadow-lg shadow-black/20">

        <h2 className="text-white font-semibold text-lg">
          DevBlog Pro
        </h2>

        <div className="flex gap-6 text-white font-medium">
          <Link href="/" className="hover:opacity-70 transition">
            Home
          </Link>
          <Link href="/about" className="hover:opacity-70 transition">
            About
          </Link>
          <Link href="/blog" className="hover:opacity-70 transition">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}