"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Footer from "./components/footer";

const images = [
  "/0.png",
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png",
  "/5.png",
  "/6.png",
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
    <main className="flex min-h-screen flex-col bg-gray-100">
      <div className="flex flex-col flex-1">
        <div className="pb-4 pt-16 lg:flex lg:h-[95vh] lg:pb-16">
          <div className="relative mx-auto flex w-full max-w-screen-3xl flex-col justify-end gap-16 lg:flex-row">
            <div className="inset-0 flex items-center lg:absolute">
              <div className="mx-auto w-full max-w-[1656px] px-4">
                <div className="mx-auto max-w-md text-center lg:ml-0 lg:max-w-[36%] lg:text-left xl:max-w-md">
                  <h1 className="mt-9 text-4xl font-['SF Pro Display'] lg:mt-0 lg:text-5xl font-semibold">
                    Tryfifty.ai
                  </h1>
                  {/* <Image src='/logo.png' width={150} height={50} alt={""} /> */}
                  <p className="mb-9 mt-4 text-lg">
                    We are building something exciting in the software
                    development industry. Join the waitlist to get early access.
                  </p>
                  <p>
                    <a
                      data-variant="primary"
                      className="group relative border border-transparent inline-flex justify-center items-center rounded-full font-medium outline-none data-[state=active]:pointer-events-none gap-[.3em] disabled:pointer-events-none transition-colors text-canvas hover:bg-secondary/75 data-[state=open]:bg-secondary/75 disabled:opacity-30 text-base h-[--button-size-lg] px-6 min-w-[12em] w-full sm:w-auto bg-black text-white py-2 hover:bg-gray-500"
                      href="/waitlist"
                    >
                      <span className="contents">Join Waitlist →</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[600px] px-4 lg:mx-0 lg:w-1/2 lg:max-w-[60%] lg:flex-1 lg:px-0 xl:w-3/5">
              <div className="relative h-full w-full overflow-hidden">
                <div className="pb-[100%] lg:hidden"></div>
                {/* <img
                  alt=""
                  sizes="(max-width: 1023px) 600px, 60vw"
                  src={images[currentIndex]}
                  className={`absolute h-full w-full inset-0 text-transparent object-cover object-center`}
                /> */}
                {/* // style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"> */}
                <div className="absolute inset-0 opacity-100">
                  <div className="overflow-hidden absolute inset-0 rounded-2xl lg:rounded-r-none 3xl:rounded-2xl">
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
                  className="rounded-full bg-blackA-9 text-whiteA-11 transition-colors hover:bg-blackA-12 hover:text-whiteA-12 data-[state=open]:bg-blackA-12 data-[state=open]:text-whiteA-12 absolute bottom-4 right-4"
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
                      className="shrink-0 h-[1em] w-[1em]"
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
