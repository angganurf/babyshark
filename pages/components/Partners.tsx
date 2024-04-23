/* eslint-disable @next/next/no-img-element */
import React from "react";
import injective from "../../public/partners/injective.png";
import talis from "../../public/partners/talis.png";
import keplr from "../../public/partners/keplr.png";
import nextjs from "../../public/partners/nextjs.png";
import vercel from "../../public/partners/vercel.svg";
const links = [
  {
    platform: "Injective",
    link: "https://injective.com",
    image: injective,
  },
  {
    platform: "Talis",
    link: "https://injective.talis.art",
    image: talis,
  },

  {
    platform: "Keplr",
    link: "https://keplr.app",
    image: keplr,
  },
  {
    platform: "Nextjs",
    link: "https://nextjs.org",
    image: nextjs,
  },
  {
    platform: "Vercel",
    link: "https://vercel.com",
    image: vercel,
  },
];

const Partners = () => {
  return (
    <div>
      <a id="podcast" />
      <p className="border-b-4 font-shark-display s-display flex text-4xl mb-10">
        Our Partners
      </p>

      <div className="pt-8 mb-4 m-auto cursor-pointer flex justify-around font-shark-display xs:text-xl sm:text-2xl flex-wrap ">
        {links.map((link) => (
          <a
            key={link.platform}
            href={link.link}
            className="hover:text-shark-blue flex-1 mx-2 text-center mb-10 "
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="max-h-10 h-full m-auto mb-3 "
              src={link.image.src}
              alt={link.platform}
            />
            {link.platform + " "}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Partners;
