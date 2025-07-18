import React from "react";
import Hero from "@/components/Home/Home";
import Features from "@/components/Home/Features";
import FeaturesSection from "@/components/Home/Recipe";
import Expert from "@/components/Home/Expert";
import Gallery from "@/components/Home/Gallery";
import Newsletter from "@/components/Home/Newsletter";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Kitchen",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <FeaturesSection />
      <Expert />
      <Gallery />
      <Newsletter />
    </main>
  );
}
