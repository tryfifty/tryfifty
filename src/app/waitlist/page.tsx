"use client";

import React, { use, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import supabase from "../lib/superbase";

const WaitlistPage = () => {
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
    <main className="flex min-h-screen  w-full h-screen flex-col items-center justify-center p-12 lg:p-24 bg-gray-100">
      <Header />
      <div className="flex flex-col w-full items-center">
        <h1 className="text-4xl font-bold text-center">
          {!succeeded ? "Join waitlist" : "You're in!"}
        </h1>
        <p className="text-center mt-8">
          {!succeeded
            ? "We are just getting started."
            : "We’ll notify you as soon as our product is ready."}
        </p>
        {!succeeded && (
          <div className="flex flex-col w-full lg:w-96 ">
            <input
              type="text"
              name="email"
              id="email"
              className="flex text-black transition-colors placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-black focus:placeholder:text-gray-8 text-md px-4 py-3 h-[--input-size-lg] rounded-full border mt-8"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="mt-4">
              <a
                data-variant="primary"
                className="border border-transparent inline-flex justify-center items-center rounded-full outline-none data-[state=active]:pointer-events-none gap-[.3em] disabled:pointer-events-none transition-colors text-canvas hover:bg-secondary/75 data-[state=open]:bg-secondary/75 disabled:opacity-30 text-base py-3 px-6  w-full bg-black text-white hover:bg-gray-500"
                onClick={() => handleSubmit()}
              >
                <span className="contents">Submit</span>
              </a>
            </p>
          </div>
        )}
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </main>
  );
};

export default WaitlistPage;
