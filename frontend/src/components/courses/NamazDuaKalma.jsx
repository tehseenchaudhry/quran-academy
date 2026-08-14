import React from "react";
import NamazDuaKalmaHero from "./namazDuaKalma/NamazDuaKalmaHero";
import NamazSection from "./namazDuaKalma/NamazSection";
import SixKalmas from "./namazDuaKalma/SixKalmas";
import DuaSection from "./namazDuaKalma/DuaSection";


const NamazDuaKalma = () => {
  return (
    <div className="min-h-screen bg-[#f8f6f0]">
      <NamazDuaKalmaHero />
      <NamazSection />
      <SixKalmas />
      <DuaSection />
    </div>
  );
};

export default NamazDuaKalma;