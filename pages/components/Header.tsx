import React from "react";
import Head from "next/head";

const Header = () => {
  return (
    <Head>
      <title>Inj Baby Shark</title>
      <meta name="Inj Baby Shark" content="Inj.BabyShark" />
      {/* favicon */}
      <link rel="icon" href="/shark-fav-black.ico" />
    </Head>
  );
};

export default Header;
