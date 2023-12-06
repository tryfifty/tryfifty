"use client";

import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import supabase from "../lib/superbase";
import Lottie from "lottie-react";
import MainAnmi from "../../../public/main-anim.json";

const LBService = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("waitlist")
      .insert([{ email: email }]);

    console.log(data, error);

    if (!error) {
      setSucceeded(true);
    }
  };

  return (
    <main className="flex min-h-screen  w-full h-auto flex-col items-center justify-center p-6 lg:px-24 lg:pt-24 bg-gray-100">
      <Header />
      <div className="flex flex-col w-full sm:w-full lg:w-[1000px] items-center">
        <Lottie
          animationData={MainAnmi}
          style={{
            width: "400px",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
        <div className="flex flex-col items-center md:mx-0">
          <h1 className="md:text-4xl text-2xl font-bold text-center">
            개발 아웃소싱, 어디서부터 시작해야 할지 막막하신가요?
          </h1>
          <h1 className="md:text-2xl text-lg font-light text-center mt-4 text-gray-700">
            아웃소싱 개발의 A부터 Z까지 여러분의 프로젝트를 위한 맞춤형 길잡이가
            되어드릴게요.
          </h1>
          <h3 className="mt-16 font-bold text-2xl">What We Offer</h3>
          <p className="text-center text-gray-600 mt-4">
            우리의 서비스는 아웃소싱 개발의 A부터 Z까지 모든 과정을 지원합니다.
            <br />
          </p>
          <ul className="list-di pl-5 mt-8">
            <li className="mb-4">
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
                <span className="font-semibold text-lg ml-2">
                  AI 기반의 요구사항 정의
                </span>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>

                <span className="font-semibold text-lg ml-2">무료 컨설팅</span>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>

                <span className="font-semibold text-lg ml-2">개발사 매칭</span>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>

                <span className="font-semibold text-lg ml-2">
                  진행사항 공유
                </span>
              </div>
            </li>
          </ul>

          <h3 className="mt-16 font-bold text-2xl">Who We Are</h3>
          <div className="flex flex-col items-center mt-8">
            <p className="text-lg text-gray-700 font-semibold text-center">
              AI 기반의 IT 아웃소싱 관리 플랫폼 런치바운드를 준비중인 팀
              트라이피프티 입니다.
            </p>
            <p className="text-lg text-gray-700 text-center">
              IT 아웃소싱 시장에 AI를 더해 효율적인 아웃소싱 프로세스를 만들어
              나갑니다
            </p>
          </div>
          <h3 className="mt-16 font-bold text-2xl">How to Apply</h3>
          <p className="text-center mt-8">
            ！ 현재 정식 서비스 오픈 전 테스트를 진행중입니다. 제공하는 모든
            서비스는 무료로 제공됩니다.
          </p>
          <p className="text-center">
            ！ 현재는 웹(브라우저) 및 앱(모바일) 개발에 대한 서비스만 제공하고
            있습니다.
          </p>
          <p className="text-center">
            ！ 아래 연락처를 남겨주세요. 저희가 메일 혹은 유선으로
            연락드리겠습니다.
          </p>
          <div className="flex flex-col w-full lg:w-96 ">
            <input
              type="text"
              name="email"
              id="email"
              className="flex text-primary transition-colors placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-black focus:placeholder:text-gray-8 text-md px-4 py-3 h-[--input-size-lg] rounded-full border mt-8"
              placeholder="contact@tryfifty.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              name="phone"
              id="phone"
              className="flex text-primary transition-colors placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-black focus:placeholder:text-gray-8 text-md px-4 py-3 h-[--input-size-lg] rounded-full border mt-4"
              placeholder="010-XXXX-XXXX"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="mt-8">
              <a
                data-variant="primary"
                className="border border-transparent inline-flex justify-center items-center rounded-full outline-none data-[state=active]:pointer-events-none gap-[.3em] disabled:pointer-events-none transition-colors bg-primary text-canvas hover:bg-primary/75 data-[state=open]:bg-primary/75 disabled:opacity-30 text-base py-3 px-6  w-full bg-black text-white hover:bg-gray-500"
                onClick={() => handleSubmit()}
              >
                <span className="contents">제출하기</span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-0 w-full mt-12">
        <Footer />
      </div>
    </main>
  );
};

export default LBService;
