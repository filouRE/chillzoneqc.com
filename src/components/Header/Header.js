import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Burger from "../../data/burger.svg";
import Exit from "../../data/exit.svg";

const Header = ({ children, color = "text-white", filter }) => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    // Update mobile state every resize
    window.addEventListener("resize", () => {
      setMobile(window.innerWidth <= 600);
    });
    setMobile(window.innerWidth <= 600);
  }, []);

  const onToggleSidebar = (toggle) => {
    setTimeout(() => {
      document.querySelector("html").classList.toggle("sidebar-active");
      if (!toggle) {
        setTimeout(() => {
          document.querySelector(".open-header").classList.remove("absolute");
          document.querySelector(".open-header").classList.toggle("hidden");
        }, 200);
      } else {
        document.querySelector(".open-header").classList.remove("hidden");
        document.querySelector(".open-header").classList.toggle("absolute");
      }
    }, 20);
  };

  return (
    <>
      <header className=" top-0 z-99 py-6 px-5 md:w-[97vw]  flex items-center justify-between ">
        <Link to="/" className={`text-3xl font-bold ${color}`}>
          CHILLZONE QC
        </Link>
        {mobile ? <img width={30} height={30} src={Burger} className={`cursor-pointer ${filter}`} onClick={() => onToggleSidebar(true)} /> : <nav className="flex gap-10 items-center font-semibold text-white">{children}</nav>}
      </header>

      <header className="open-header hidden w-full h-screen top-0 translate-x-[99vw] bg-white ">
        <div className="py-6 px-6 flex items-center justify-between ">
          <Link to="/" className="text-3xl font-bold">
            CHILLZONE QC
          </Link>
          <img width={30} height={30} src={Exit} className="cursor-pointer" onClick={() => onToggleSidebar(false)} />
        </div>
        <nav className="flex flex-col gap-10 items-center justify-center h-[80vh] text-4xl font-semibold ">{children}</nav>
      </header>
    </>
  );
};
export default Header;
