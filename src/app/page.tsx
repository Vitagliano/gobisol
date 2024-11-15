"use client";

export default function Home() {
  return (
    <div className="relative overflow-hidden m-0 sm:min-h-dvh flex flex-col justify-between h-dvh md:h-full">
      <div className="relative md:h-[65dvh] h-[40vh] w-full flex justify-center items-start">
        <img
          id="logo"
          src="/images/logo.png"
          alt="Gobi"
          draggable={false}
          className="w-1/2 mt-16 md:mt-8 relative z-10"
        />
        <img
          src="/images/clouds.png"
          alt="Clouds"
          draggable={false}
          className="absolute z-0 min-w-screen w-full h-auto top-[35%] md:top-[15%]"
        />
      </div>
      <div className="relative md:h-full w-ful" id="content">
        <img
          src="/images/forest-front.png"
          alt="Gobi on the forest"
          draggable={false}
          className="relative w-full h-auto z-1 "
        />
        <img
          src="/images/forest-back.png"
          alt="Gobi on the forest"
          draggable={false}
          className="absolute w-full h-auto z-0 bottom-0"
        />
        <img
          src="/images/gobi.png"
          alt="Gobi"
          draggable={false}
          className="absolute z-3 h-auto w-[30.5%] bottom-0 right-[26.6%]"
        />
        <a href="https://x.com/" target="_blank" className="group">
          <img
            src="/images/x.png"
            alt="X (Twitter)"
            draggable={false}
            className="absolute z-2 h-auto w-[19%] bottom-[10.5%] left-[6.2%] opacity-100 group-hover:opacity-0 "
          />
          <img
            src="/images/x-hover.png"
            alt="X (Twitter)"
            draggable={false}
            className="absolute z-3 h-auto w-[19%] bottom-[10.5%] left-[6.2%] opacity-0 group-hover:opacity-100 "
          />
        </a>
        <a href="https://dexscreener.com/" target="_blank" className="group">
          <img
            src="/images/dex.png"
            alt="Dexscreener"
            draggable={false}
            className="absolute z-2 h-auto w-[15.3%] bottom-[20.75%] left-[27.5%] opacity-100 group-hover:opacity-0 "
          />
          <img
            src="/images/dex-hover.png"
            alt="Dexscreener"
            draggable={false}
            className="absolute z-3 h-auto w-[15.3%] bottom-[20.75%] left-[27.5%] opacity-0 group-hover:opacity-100 "
          />
        </a>
        <a href="https://t.me/" target="_blank" className="group">
          <img
            src="/images/tg.png"
            alt="Telegram"
            draggable={false}
            className="absolute z-2 h-auto w-[20.85%] bottom-[24.8%] right-[8.08%] opacity-100 group-hover:opacity-0 "
          />
          <img
            src="/images/tg-hover.png"
            alt="Telegram"
            draggable={false}
            className="absolute z-3 h-auto w-[20.85%] bottom-[24.8%] right-[8.08%] opacity-0 group-hover:opacity-100 "
          />
        </a>
      </div>
    </div>
  );
}
