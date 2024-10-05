import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSaller from "../components/BestSaller";
import OurPolicy from "../components/OurPolicy";

export default function Home() {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSaller />
      <OurPolicy />
    </div>
  );
}
