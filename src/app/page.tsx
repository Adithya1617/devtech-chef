// import Cook from "@/components/Home/Cook";
import Expert from "@/components/Home/Expert";
import Features from "@/components/Home/Features";
import Gallery from "@/components/Home/Gallery";
import Hero from "@/components/Home/Home";
import Newsletter from "@/components/Home/Newsletter";
import { Metadata } from "next";
import Link from "next/dist/client/link";
export const metadata: Metadata = {
  title: "Kitchen",
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Features />
      <Cook />
      <Expert />
      <Gallery />
      <Newsletter /> */}
     

    </main>
  );
}
