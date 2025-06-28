import UserInfor from "@/components/UserInfor";
import Link from "next/link";

export default function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>About -</h1> 
      <UserInfor/>
      
      <Link href="/" className="text-blue-500 hover:underline">
        Home
      </Link>
    </div>
  );
}