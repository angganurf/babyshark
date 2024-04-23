
import React from "react";
import Noun from "./Noun";

const Community = () => {
  return (
    <div>
      <a id="community" />
      <p className="border-b-4 font-shark-display s-display text-4xl mb-10">
        Team
      </p>
      <div className="pt-8 sm:pb-12 m-auto flex xs:flex-wrap justify-center">
          <a
            className="xs:w-1/2 sm:w-1/5 hover:cursor-pointer hover:scale-110 transition duration-200"
            href="https://twitter.com/xBrian_Crypto"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="transition duration-200"
              src={`/noun-47.png`}
              alt={`noun-47`}
            />
            <p className="right ml-[55px]">@xBrian_Crypto</p>
          </a>

          <a
            className="xs:w-1/2 sm:w-1/5 hover:cursor-pointer hover:scale-110 transition duration-200"
            href="https://twitter.com/willamtolas"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="transition duration-200"
              src={`/noun-5.png`}
              alt={`noun-5`}
            />
            <p className="right ml-[55px]">@willamtolas</p>
          </a>

          <a
            className="xs:w-1/2 sm:w-1/5 hover:cursor-pointer hover:scale-110 transition duration-200"
            href="https://twitter.com/LamersLab"
            target="_blank"
            rel="noreferrer"
          >  
            <img
              className="transition duration-200"
              src={`/noun-15.png`}
              alt={`noun-15`}
            />
            <p className="right ml-[55px]">@LamersLab</p>
          </a>

          <a
            className="xs:w-1/2 sm:w-1/5 hover:cursor-pointer hover:scale-110 transition duration-200"
            href="https://twitter.com/SachaDePokecop"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="transition duration-200"
              src={`/noun-33.png`}
              alt={`noun-33`}
            />
            <p className="right ml-[55px]">@SachaDePokecop</p>
          </a>
          
          {/* <Noun number={15} />
          <Noun number={33} />
          <Noun number={47} /> */}
        </div>
      </div>
     
  );
};

export default Community;

