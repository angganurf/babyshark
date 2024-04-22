/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Noun from "./Noun";

const Intro = () => {
  const IntroCopy =
    "Injective Baby Shark is not just another NFT project; it's a vibrant community-driven initiative poised to redefine the landscape of collectibles in the digital realm. We've taken the beloved Baby Shark and injected it with a whole new level of excitement, making it more than just a catchy tune – it's now a symbol of creativity, collaboration, and ownership.";

  return (
    <div className="xs:px-6 sm:px-0">
      {/* MOBILE */}
      <div className="sm:hidden mt-20">
        <img className="m-0 w-full" src="/shark-hero-mobile.svg" alt="shark" />
      </div>

      {/* DESKTOP */}
      <div className="xs:hidden sm:flex m-auto w-5/6 flex-col">
        <a id="intro" />
        <div className=" xs:hidden sm:flex  pt-20 sm:px-40  lg:px-40  justify-center relative mb-16">
          <a id="home" />
          <img
            className="w-full "
            src="/shark-hero-bubble.svg"
            alt="welcome-shark"
          />
        </div>
        <div className="flex">
          <img
            className="relative right-16"
            src="/shark-little.svg"
            alt="baby-shark"
          />

          <p className="font-shark-display s-display s-display  sm:text-4xl xs:tracking-tight mx-10">
            {IntroCopy}
          </p>

          <img
            className="self-start flip-horizontal relative left-6"
            src="/shark-little.svg"
            alt="baby-shark"
          />
        </div>
      </div>

      <a id="m-intro" />
      <div className="xs:w-full sm:w-4/6 m-auto py-14 pt-7">
        <p className="font-shark-display s-display xs:text-3xl sm:text-4xl xs:tracking-tight sm:hidden">
          {IntroCopy}
        </p>

        <div className="pt-8 sm:pb-12 m-auto flex xs:flex-wrap justify-center">
          <Noun number={2} />
          <Noun number={5} />
          <Noun number={15} />
          <Noun number={33} />
          <Noun number={47} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
