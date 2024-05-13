import React from "react";
import Head from "next/head";

const Header = () => {
  return (
    <Head>
      <title>Inj Baby Shark</title>
      <meta name="Inj Baby Shark" content="Inj.BabyShark" />      
      <meta name="title" content="Inj Baby Shark" />
      <meta name="description" content="Baby Shark is a community-driven collectibles NFT project. The road map for Baby Shark is collaborative." />
      <meta name="keywords" content="injective,babyshark,dapps,nft,blockchain,crypto,whitelist,og,early" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="angganurf" />
      {/* favicon */}
      <link rel="icon" href="/shark-fav-black.ico" />
      <meta name="monetag" content="803f964903c6821592abb49a8f246714" />
    </Head>
  );
};

export default Header;
