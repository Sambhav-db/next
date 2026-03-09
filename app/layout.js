import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import "./my.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "DevBlog Pro",
  description: "A Fullstack Blogging Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased container`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
