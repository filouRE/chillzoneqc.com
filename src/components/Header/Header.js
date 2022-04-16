import React from "react";
import { useEffect, useState } from "react";

import Burger from "../../data/burger.svg";
import Exit from "../../data/exit.svg";

const Header = ({ children, color = "text-white", filter }) => {
  const [loaded, setLoaded] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(window.innerWidth <= 600);
    setLoaded(true);
    console.log(color);
  }, []);

  const onToggleSidebar = (toggle) => {
    document.querySelector("html").classList.toggle("sidebar-active");
    setTimeout(() => {}, toggle ? 300 : 0);
  };

  if (loaded) {
    return (
      <>
        <header className="sticky top-0 z-99 py-6 px-5 flex items-center justify-between overflow-x-hidden">
          <a href="/">
            <a className={`text-3xl font-bold ${color}`}>CHILLZONE QC</a>
          </a>
          {mobile ? <img width={30} height={30} src={Burger} className={`cursor-pointer ${filter}`} onClick={() => onToggleSidebar(true)} /> : <nav className="flex gap-10  items-center text-white">{children}</nav>}
        </header>

        <header className="absolute w-screen h-screen top-0 overflow-hidden translate-x-full">
          <div className="py-6 px-6 flex items-center justify-between">
            <a href="/">
              <a className="text-3xl font-bold">CHILLZONE QC</a>
            </a>
            <img width={30} height={30} src={Exit} className="cursor-pointer" onClick={() => onToggleSidebar(false)} />
          </div>
        </header>
      </>
    );
  } else {
    return <></>;
  }
};
export default Header;
