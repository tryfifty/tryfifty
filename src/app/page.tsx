"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Footer from "./components/footer";

const images = [
  `${process.env.NEXT_PUBLIC_BASE_PATH}/0.png`,
  `${process.env.NEXT_PUBLIC_BASE_PATH}/1.png`,
  `${process.env.NEXT_PUBLIC_BASE_PATH}/2.png`,
  `${process.env.NEXT_PUBLIC_BASE_PATH}/3.png`,
  `${process.env.NEXT_PUBLIC_BASE_PATH}/4.png`,
  `${process.env.NEXT_PUBLIC_BASE_PATH}/5.png`,
  `${process.env.NEXT_PUBLIC_BASE_PATH}/6.png`,
  // ...other images
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setNextIndex((nextIndex + 1) % images.length);
        setIsFading(false);
      }, 2000); // Half of the total transition duration
    }, 5000);

    return () => clearInterval(intervalId);
  }, [nextIndex]);

  return (
    <main className="flex flex-col bg-gray-100 min-h-screen">
      <div className="flex flex-col flex-1">
        <div className="lg:flex flex-1 pt-16 pb-4">
          <div className="relative flex lg:flex-row flex-col justify-end gap-16 mx-auto w-full max-w-screen-3xl">
            <div className="inset-0 flex items-center">
              <div className="mx-auto px-4 w-full max-w-[1656px]">
                <div className="mx-auto lg:ml-0 max-w-md xl:max-w-md text-center lg:text-left">
                  <h1 className="mt-9 lg:mt-0 font-['SF font-semibold text-4xl lg:text-5xl Display'] Pro">
                    Tryfifty.ai
                  </h1>
                  {/* <Image src='/logo.png' width={150} height={50} alt={""} /> */}
                  <p className="mt-4 mb-9 text-lg">
                    We are building something exciting in the software
                    development industry using AI.
                    <br />
                    Cool stuff coming soon!
                  </p>
                  <p>
                    <a
                      data-variant="primary"
                      className="inline-flex relative justify-center items-center gap-[.3em] bg-black data-[state=open]:bg-secondary/75 hover:bg-secondary/75 hover:bg-gray-500 disabled:opacity-30 px-6 py-2 border border-transparent rounded-full w-full min-w-[12em] h-[--button-size-lg] font-medium text-base text-canvas text-white transition-colors disabled:pointer-events-none group outline-none"
                      href="/waitlist"
                    >
                      <span className="contents">Contact Us</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:flex-1 mx-auto lg:mx-0 px-4 lg:px-0 w-full lg:w-3/5 max-w-[600px] lg:max-w-[60%]">
              <div className="relative w-full h-full overflow-hidden">
                <div className="lg:hidden pb-[100%]"></div>
                {/* <img
                  alt=""
                  sizes="(max-width: 1023px) 600px, 60vw"
                  src={images[currentIndex]}
                  className={`absolute h-full w-full inset-0 text-transparent object-cover object-center`}
                /> */}
                {/* // style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"> */}
                <div className="absolute inset-0 opacity-100">
                  <div className="absolute inset-0 rounded-2xl lg:rounded-r-none 3xl:rounded-2xl overflow-hidden">
                    <img
                      alt=""
                      data-nimg="fill"
                      sizes="(max-width: 1023px) 600px, 60vw"
                      src={images[nextIndex]}
                      className={`absolute h-full w-full inset-0 text-transparent object-cover object-center fade ${
                        isFading ? "fade-out" : "fade-in"
                      }`}
                    />
                  </div>
                </div>
                <button
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:r5q:"
                  data-state="closed"
                  className="right-4 bottom-4 absolute bg-blackA-9 data-[state=open]:bg-blackA-12 hover:bg-blackA-12 rounded-full text-whiteA-11 data-[state=open]:text-whiteA-12 hover:text-whiteA-12 transition-colors"
                >
                  <span className="block p-0.5 text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-[1em] h-[1em] shrink-0"
                    >
                      <g>
                        <path d="M12 20.357a8.357 8.357 0 1 0 0-16.714 8.357 8.357 0 0 0 0 16.714ZM12 12v4.5"></path>
                        <path d="M12 9.429a.643.643 0 1 0 0-1.286.643.643 0 0 0 0 1.286Z"></path>
                      </g>
                    </svg>
                  </span>
                  <span className="sr-only">
                    This photo generated by DALL-E
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-12">
        <Footer />
      </div>
    </main>
  );
}
