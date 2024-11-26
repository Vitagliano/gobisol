"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative">
      <div className="relative  m-0 sm:min-h-dvh flex flex-col justify-between h-dvh md:h-full">
        <div className="relative md:h-[65dvh] h-[40vh] w-full flex justify-center items-start">
          <img
            id="logo"
            src="/images/logo.webp"
            alt="Gobi"
            draggable={false}
            className="w-1/2 mt-16 md:mt-8 relative z-10"
          />
          <div className="absolute z-0 w-full top-[35%] md:top-[15%] overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: ["0%", "-100%"],
              }}
              style={{
                gap: "20%",
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              <img
                src="/images/clouds.webp"
                alt="Clouds"
                draggable={false}
                className="w-full h-auto shrink-0"
              />
              <img
                src="/images/clouds.webp"
                alt="Clouds"
                draggable={false}
                className="w-full h-auto shrink-0"
              />
            </motion.div>
          </div>
        </div>
        <div className="relative md:h-full w-full " id="content">
          <img
            src="/images/forest-top.webp"
            alt="Gobi on the forest"
            draggable={false}
            className="relative w-full h-auto z-0 "
          />
          <img
            src="/images/gobi.webp"
            alt="Gobi"
            draggable={false}
            className="absolute z-3 h-auto w-[30.5%] bottom-[17%] right-[26.6%]"
          />
          <a href="https://x.com/gobixyz?s=21" target="_blank" className="group">
            <img
              src="/images/x.webp"
              alt="X (Twitter)"
              draggable={false}
              className="absolute z-2 h-auto w-[19%] bottom-[39%] left-[6.2%] opacity-100 group-hover:opacity-0 "
            />
            <img
              src="/images/x-hover.webp"
              alt="X (Twitter)"
              draggable={false}
              className="absolute z-3 h-auto w-[19%] bottom-[39%] left-[6.2%] opacity-0 group-hover:opacity-100 "
            />
          </a>
          <a
            href="https://dexscreener.com/solana/CwdjgD54hgTQChspxHhirWLQWqy3EsxtndrcpLBqpump"
            target="_blank"
            className="group"
          >
            <img
              src="/images/dex.webp"
              alt="Dexscreener"
              draggable={false}
              className="absolute z-2 h-auto w-[15.3%] bottom-[44.25%] left-[27.5%] opacity-100 group-hover:opacity-0 "
            />
            <img
              src="/images/dex-hover.webp"
              alt="Dexscreener"
              draggable={false}
              className="absolute z-3 h-auto w-[15.3%] bottom-[44.25%] left-[27.5%] opacity-0 group-hover:opacity-100 "
            />
          </a>
          <a href="https://t.me/GOBIversecommunity" target="_blank" className="group">
            <img
              src="/images/tg.webp"
              alt="Telegram"
              draggable={false}
              className="absolute z-2 h-auto w-[20.85%] bottom-[48.5%] right-[8.08%] opacity-100 group-hover:opacity-0 "
            />
            <img
              src="/images/tg-hover.webp"
              alt="Telegram"
              draggable={false}
              className="absolute z-3 h-auto w-[20.85%] bottom-[48.5%] right-[8.08%] opacity-0 group-hover:opacity-100 "
            />
          </a>
        </div>
        <div className="relative h-full w-full z-2 flex flex-col justify-center ">
          <img
            src="/images/forest-bottom.webp"
            alt=""
            draggable={false}
            className="absolute w-full h-auto z-2"
          />

          <div className="w-full relative z-3 px-12 flex md:flex-row flex-col justify-center md:gap-12 items-center -mt-12 md:-mt-0">
            <img
              src="/images/gobi-portal.webp"
              className="w-[50%] md:w-1/2 h-auto hidden md:block "
              alt="Gobi"
              draggable={false}
            />
            <img
              src="/images/gobi-text.webp"
              className="w-[10
              
              0%] md:w-1/3 h-auto mt-12 md:mt-0"
              alt="Gobi"
              draggable={false}
            />
          </div>
          <a
            href="https://solscan.io/token/CwdjgD54hgTQChspxHhirWLQWqy3EsxtndrcpLBqpump"
            target="_blank"
            className="group"
          >
            <img
              src="/images/board.webp"
              alt="Board"
              draggable={false}
              className="w-full h-auto absolute z-3 px-12 md:px-24 mt-12 md:mt-24 opacity-100 group-hover:opacity-0"
            />
            <img
              src="/images/board-hover.webp"
              alt="Board"
              draggable={false}
              className="w-full h-auto absolute z-3 px-12 md:px-24 mt-12 md:mt-24 opacity-0 group-hover:opacity-100"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
