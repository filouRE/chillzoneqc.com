import React from "react";

import Patreon from "../../data/patreon.svg";
import Discord from "../../data/discord.svg";
import Youtube from "../../data/youtube.svg";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center gap-1 my-5 px-2">
      <div id="icons" className="flex gap-5 items-center">
        {" "}
        <a href="https://www.patreon.com/CZQC" target="_blank">
          <img width={25} src={Patreon} alt="patreon logo" />
        </a>
        <a href="https://discord.gg/CZQC" target="_blank">
          <img width={30} src={Discord} alt="discord logo" />
        </a>
        <a href="https://youtube.com" target="_blank">
          <img width={30} src={Youtube} alt="youtube logo" />
        </a>
      </div>
      <span>Fait avec ❤️ du Québec ⚜️​</span>
      <span className="text-center px-5">
        © 2022{" "}
        <a href="https://seku.tech" target="_blank" className="font-semibold">
          Seku Technologies
        </a>{" "}
        Tous les droits sont réservés.
      </span>
      <nav className="flex gap-3 text-center">
        <a href="/politique">
          <b className="text-base text-gray-900">Politique de confidentialité</b>
        </a>

        <a href="/tos">
          <b className="text-base text-gray-900">Conditions de services</b>
        </a>
      </nav>
    </footer>
  );
}
