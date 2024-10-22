"use client";

import React, { use, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const WaitlistPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);
  // const [succeeded, setSucceeded] = useState(false);

  // const handleSubmit = async () => {
  //   setLoading(true);
  //   const { data, error } = await supabase
  //     .from("waitlist")
  //     .insert([{ email: email }]);

  //   console.log(data, error);

  //   if (!error) {
  //     setSucceeded(true);
  //   }
  // };

  return (
    <main className="flex flex-col justify-center items-center bg-gray-100 p-12 lg:p-24 w-full h-screen min-h-screen">
      <Header />
      <div className="flex flex-col items-center w-full">
        <h1 className="font-bold text-4xl text-center">Hey there! 👋</h1>
        <p className="mt-8 text-center">
          Thanks for your interest in Tryfifty!
          <br />
          We are just getting started and would love to keep you in the loop.
          <br />
          <br />
          Please reach out to us at the email below.
        </p>

        <div className="flex flex-col items-center w-full lg:w-96">
          {/* <input
              type="text"
              name="email"
              id="email"
              className="flex mt-8 px-4 py-3 border rounded-full focus:ring-1 focus:ring-black h-[--input-size-lg] text-black text-md focus:placeholder:text-gray-8 placeholder:text-muted transition-colors focus:outline-none"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /> */}
          <p className="font-bold text-lg"> contact@tryfifty.com</p>
          <p className="mt-4">
            <a
              href={`mailto:contact@tryfifty.com?subject=Waitlist Submission&body=Email: ${email}`}
              target="_blank"
              className="inline-flex justify-center items-center gap-[.3em] bg-black hover:bg-gray-500 disabled:opacity-30 px-6 py-3 border border-transparent rounded-full w-full text-base text-white transition-colors"
            >
              <span className="contents">Email Us!</span>
            </a>
          </p>
        </div>
      </div>
      <div className="bottom-0 fixed px-12 w-full">
        <Footer />
      </div>
    </main>
  );
};

export default WaitlistPage;
