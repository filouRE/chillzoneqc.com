import React from "react";

const Header = () => {
  return (
    <>
      <header className="nav flex justify-between items-center w-full px-6 py-8 text-white px-20">
        <a href="/" className="font-bold text-3xl">
          CHILLZONE QC
        </a>
        <div className="sub-nav flex justify-between items-center w-[20%] text-lg px-6">
          <a href="">Accueil</a>
          <a href="https://discord.gg/CZQC" target="_blank">
            Discord
          </a>
          <a href="" className="bg-blue-600 p-2 text-white rounded ">
            Whitelist
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
