import React from "react";

const Header = () => {
  return (
    <div className="absolute top-0 flex w-full  h-16 lg:h-32 pt-0 lg:pt-4 px-8">
      <a href="/">
        <h1 className="mt-4 text-lg font-['SF Pro Display'] lg:mt-0 lg:text-2xl font-semibold">
          Tryfifty.ai
        </h1>
      </a>
    </div>
  );
};

export default Header;
