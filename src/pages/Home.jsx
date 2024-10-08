import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSaller from "../components/BestSaller";
import OurPolicy from "../components/OurPolicy";
import NewsLetterBox from "../components/NewsLetterBox";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSaller />
      <OurPolicy />
      <NewsLetterBox />
      <Footer />
    </div>
  );
}
