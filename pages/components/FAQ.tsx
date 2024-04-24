/* eslint-disable react/no-unescaped-entities */
import React from "react";

const FAQ = () => {
  return (
    <div>
      <a id="faq" />
      <p className="border-b-4 font-shark-display s-display text-4xl mb-10">
        Frequently Asked Questions
      </p>

      <div className="font-shark-display s-display xs:text-3xl sm:text-4xl xs:tracking-tight">
        <div className="mb-10">
          <h3 className="pb-3">What are Baby Shark?</h3>
          <p className="xs:text-xl sm:text-2xl font-shark-text answer">
            <a
              href="https://tremblesyringeillusive.com/csvn2tjq5?key=70d86d2979a39a36de32e2d4cc2092ef"
              className="text-shark-blue hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              🦈 Baby Shark
            </a>{" "}
            is a community-driven collectibles NFT project. The road map for
            Baby Shark is collaborative and will be decided by Baby Shark
            holders, Launch in Injective Chain.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="pb-3">How many minting phases are there?</h3>
          <p className="xs:text-xl sm:text-2xl font-shark-text answer">
            We have 3 Phases : OG, WL, Public
          </p>
        </div>

        <div className="mb-10">
          <h3 className="pb-3">How many supply and spots for each phase?</h3>
          <p className="xs:text-xl sm:text-2xl font-shark-text answer">
            🦈 Supply : <b className="">1.111 NFTs</b> <br />
            <b />
            🎟️ OG Spots : 100 <br />
            🎫 WL Spots : 300
          </p>
        </div>

        <div className="mb-10">
          <h3 className="pb-3">
            What is the price and max minting per wallet of NFT for each phase?
          </h3>
          <p className="xs:text-xl sm:text-2xl font-shark-text answer">
            🎟️ OG : 0.15 inj (max. 1x per wallet) <br />
            🎫 WL : 0.35 inj (max. 2x per wallet) <br />
            🌍 Public : 0.65 inj (Unlimited) <br />
          </p>
        </div>

        <div className="mb-10">
          <h3 className="pb-3">When and where it will be launched ?</h3>
          <p className="xs:text-xl sm:text-2xl font-shark-text answer">
            ⌚ Starting Date : Friday, May 26th 2024 <br />
            🎟️ OG :{" "}
            <span className="text-[18px]">
              02:30 pm UTC &mdash; 03:00 pm UTC
            </span>
            <br />
            🎫 WL :
            <span className="text-[18px]">
              03:00 pm UTC &mdash; 08:00 pm UTC
            </span>
            <br />
            🌍 Public :
            <span className="text-[18px]">08:00 pm UTC &mdash; Sold Out</span>
            <br />
            <br />
            Launch at{" "}
            <a
              href="https://injective.talis.art/"
              target="_blank"
              rel="noreferrer"
              className="text-shark-blue hover:underline"
            >
              Talis.Art
            </a>{" "}
            on the Injective Chain.
            <br /> <br />
            <a
              href="https://injective.talis.art/"
              target="_blank"
              rel="noreferrer"
              className="text-shark-blue hover:underline"
            >
              Claim OG🎟️/WL🎫
            </a>{" "}
          </p>
        </div>

        {/* <div className="mb-10">
          <h3 className="pb-3">What is SHARK token?</h3>
          <p className="xs:text-xl sm:text-2xl font-shark-text answer answer">
            SHARK is the governance token of this DAO, enabling you to vote and
            steer the mission and how we deploy resources.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="pb-3">I’m intrigued, what are the major risks? </h3>
          <div className="xs:text-xl sm:text-2xl font-shark-text answer">
            The NFT and crypto spaces are volatile. Please don't put in money or
            ETH that you can't afford to lose. While SharkDAO volunteers are
            working hard and putting their reputation on the line, we can't
            promise that everything will go smoothly. Here are some very bad
            things that could happen:
            <ul className="list-disc list-outside ">
              <li className="ml-12">
                3 of our multi-sig signers could theoretically run off with the
                wallet, or lose their keys at the same time. We would lose
                everything. Rekt.
              </li>
              <li className="ml-12">
                There could be a bug in the smart contract code that a hacker
                exploits. We would lose everything.
              </li>
              <li className="ml-12">
                NFTs could crash, never to recover. It’s hard to spend illiquid
                jpegs.
              </li>
              <li className="ml-12">
                The Noun project could crash, never to recover. It’s hard to
                spend an illiquid, highly pixelated pineapple or chainsaw.
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="pb-3">
            What wallet are you using? How is it secured?{" "}
          </h3>
          <p className="xs:text-xl sm:text-2xl font-shark-text answer">
            We are using a Gnosis Safe wallet that contains a Juicebox NFT.
            Funds will move between Juicebox and the wallet. Transactions must
            be signed by 3 of 6 members, elected by the DAO:{" "}
            <a
              href="https://twitter.com/Goldypix"
              target="_blank"
              rel="noreferrer"
              className="text-shark-blue hover:underline"
            >
              @Goldy.mov
            </a>
            ,{" "}
            <a
              href="https://twitter.com/eldefijesus"
              target="_blank"
              rel="noreferrer"
              className="text-shark-blue hover:underline"
            >
              @defi jesus
            </a>
            ,{" "}
            <a
              href="https://twitter.com/xaix2k"
              target="_blank"
              rel="noreferrer"
              className="text-shark-blue hover:underline"
            >
              @xaix.eth
            </a>
            ,{" "}
            <a
              href="https://twitter.com/LithiumXBT"
              target="_blank"
              rel="noreferrer"
              className="text-shark-blue hover:underline"
            >
              @Lithium
            </a>
            ,{" "}
            <a
              href="https://twitter.com/me_jango"
              target="_blank"
              rel="noreferrer"
              className="text-shark-blue hover:underline"
            >
              @jango
            </a>
            , and{" "}
            <a
              href="https://twitter.com/dropnerdETH"
              target="_blank"
              rel="noreferrer"
              className="text-shark-blue hover:underline"
            >
              @dropnerd
            </a>
            . These members have a long history in the community, but of course
            there is always a risk when others are holding funds, and you should
            consider this before you contribute.
          </p>
        </div> */}

        <div className="mb-10">
          <h3 className="pb-3">How do I join?</h3>
          <p className="xs:text-xl sm:text-2xl font-shark-text answer">
            Joining instructions are in the{" "}
            <a
              href="https://discord.gg/eTFHta5xyN"
              target="_blank"
              rel="noreferrer"
              className="text-shark-blue hover:underline"
            >
              Discord server.
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
