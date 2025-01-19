import HeroSection from "@/components/core/HeroSection/HeroSection";
import Navbar from "@/components/core/Navbar/Navbar";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Navbar />
        <HeroSection />
      </main>
    </div>
  );
}
