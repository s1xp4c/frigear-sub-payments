import EmailSection from "@/components/EmailSection";
import HeroSection from "@/components/HeroSection";
import React from "react";

export default function home() {
  return (
    <div className="max-w-6xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-6">
      <div className="sm:flex sm:flex-col sm:align-center">
        <HeroSection></HeroSection>
        <EmailSection></EmailSection>
      </div>
    </div>
  );
}
