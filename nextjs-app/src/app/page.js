import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header/>
      <h1>Home</h1>
      <Link href="/about" className="text-blue-500 hover:underline">
        About
      </Link>
      <Footer/>
    </div>
  );
}
