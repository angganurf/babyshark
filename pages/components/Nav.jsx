/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";

const Nav = () => {
  return (
    <div>
      <nav className="flex items-center flex-wrap bg-shark-blue xs:p-4 sm:p-5 pr-5 xs:mb-6">
        <Link href="https://tremblesyringeillusive.com/csvn2tjq5?key=70d86d2979a39a36de32e2d4cc2092ef" passHref className="inline-flex items-center m-2 mr-4 ">
          <img
            className="fill-current cursor-pointer text-white h-8 w-18 mr-2"
            src="shark-logo-white.svg"
            alt="shark-logo"
          />
        </Link>

        <button className="inline-flex p-3 hover:bg-shark-blue rounded lg:hidden text-white ml-auto hover:text-white outline-none">
          <svg
            className="w-6 h-6"
            fill="white"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="w-full lg:inline-flex lg:flex-grow lg:w-auto">
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start nav flex flex-col lg:h-auto text-shark-white font-shark-text xs:mt-3 sm:mt-0">
            <Link href="/" passHref>
              Home
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
