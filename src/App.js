// Imports
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { motion } from "framer-motion";
import { SlideBlue, SlideWhite } from "./components/Transition/Slide";
import { Link } from "react-router-dom";
import FadeInWhenVisible from "./components/Transition/FadeIn";
// Images
import Arrow from "./data/arrow.svg";
import Down from "./data/down.svg";
import Wave from "./data/wave.svg";
import Quebec from "./data/quebec.png";
import Donut from "./data/donut.png";
import Spring from "./data/spring.png";
import Server from "./data/server.svg";
import Chateau from "./data/chateau.webp";
import Teamwork from "./data/teamwork.svg";
import Soldier from "./data/soldier.svg";
import Help from "./data/help.svg";
import Gift from "./data/gift.svg";

function App() {
  return (
    <>
      <motion.div variants={SlideBlue} initial="initial" animate="animate" exit="exit" transition={SlideBlue.transition} className="fixed z-50 w-screen h-screen bg-blue-600">
        <div className=" md:text-4xl h-full flex items-center justify-center font-black text-6xl text-white">
          <h1 className="animate-bounce text-center">CHILLZONE QC</h1>
        </div>
      </motion.div>
      <motion.div variants={SlideWhite} initial="initial" animate="animate" exit="exit" transition={SlideWhite.transition} className="fixed z-40 w-screen h-screen bg-white"></motion.div>
      <div class="video-container blurred">
        <iframe
          src="https://www.youtube.com/embed/diPOQRZNpJM?rel=0?version=3&autoplay=1&controls=0&start=8&end=85&mute=1"
          width="590"
          height="431"
          frameborder="0"
          scrolling="no"
          allow="autoplay"
          allowfullscreen
          webkitallowfullscreen
          mozallowfullscreen
          oallowfullscreen
          msallowfullscreen
        ></iframe>
      </div>

      <div className="hero h-[100vh] w-screen px-20 md:px-1">
        <Header color="text-white">
          <Link to="/" className="hover:-translate-y-1 transition-all">
            Accueil
          </Link>
          <a href="https://discord.com/invite/w69xrpNHne" className="hover:-translate-y-1 transition-all" target="_blank" rel="noopener noreferrer">
            Discord
          </a>
          <a href="https://www.patreon.com/CZQC" className="hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/40 transition-all bg-blue-600 px-3 py-2 text-white rounded ">
            Whitelist
          </a>
        </Header>
        <div className="md:justify-center md:items-center md:text-center content h-[80vh] text-white px-5 flex flex-col justify-center gap-6">
          <FadeInWhenVisible>
            <h1 className="md:text-4xl lg:text-5xl font-black text-7xl leading-tight drop-shadow-2x">
              L'EXPÉRIENCE SQUAD FAIT PAR DES <span className="text-blue-600">QUÉBÉCOIS</span> POUR LES <span className="text-blue-600">QUÉBÉCOIS</span>
            </h1>
          </FadeInWhenVisible>

          <a
            href="https://discord.com/invite/w69xrpNHne"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/40 transition-all flex text-center justify-center gap-2 bg-blue-600 rounded-lg w-56
           p-3"
          >
            <button className="font-bold">REJOIGNEZ NOUS</button>
            <img src={Arrow} alt="arrow" className="w-4" />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a href="#about-us">
            <img src={Down} alt="" className="w-6 cursor-pointer transition-all animate-bounce" />
          </a>
        </div>
      </div>
      <img src={Wave} alt="wave image" className="w-[150vw] md:hidden" />

      <div className="2xl:px-40 md:px-5 lgg:px-5 flex item-center justify-evenly flex-col flex-wrap px-80">
        <h2 id="about-us" className="md:text-4xl flex items-center justify-center font-bold text-6xl py-6 my-1 text-gray-900 text-center">
          Qui sommes-nous?
        </h2>
        <div className="group-cards flex flex-col gap-6">
          <div className="cards-1 flex items-center justify-center md:flex-wrap gap-8">
            <FadeInWhenVisible>
              <div className="card-1 flex flex-col items-center justify-center bg-gray-200 rounded-md px-6 py-9 border-t-8 border-b-8 border-gray-900 gap-3 max-w-md h-[24rem] xl:h-[30rem]">
                <img src={Chateau} width={132} alt="quebec logo" />
                <h3 className="font-bold text-center">Communauté Québecoise</h3>
                <p className="text-center text-orange-100">ChillzoneQC est parmi l'une des peux nombreuse communauté de joueur fièrement Québecois</p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <div className="card-2 flex flex-col items-center justify-center bg-gray-200 rounded px-6 py-9 border-t-8 border-b-8 border-gray-900 gap-3 d max-w-md h-[24rem] xl:h-[30rem]">
                <img src={Server} width={125} alt="server image" />
                <h3 className="font-bold text-center">Serveur Actif 24/7</h3>
                <p className="text-center text-orange-100">Nous avons a notre disposition plusieurs serveur sur Squad qui sont ouvert 24/7 pour vous apporter la meilleur expérience possible</p>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <div className="card-3 flex flex-col items-center justify-center bg-gray-200 rounded px-6 py-9 border-t-8 border-b-8 border-gray-900 gap-3 max-w-md h-[24rem] xl:h-[30rem]">
                <img src={Teamwork} width={125} alt="friends image" />
                <h3 className="font-bold text-center">Staff Toujours Actif</h3>
                <p className="text-center text-orange-100">Notre philosophie dans la communauté ChillzoneQC c'est qu'il devrais toujours avoir une personne disponible pour répondre à tout questions en tout temps</p>
              </div>
            </FadeInWhenVisible>
          </div>
          <div className="cards-1 flex items-center justify-center md:flex-wrap gap-8">
            <FadeInWhenVisible>
              <div className="card-4 flex flex-col items-center justify-center bg-gray-200 rounded-md px-6 py-9 border-t-8 border-b-8 border-gray-900 gap-3 max-w-md h-[24rem] xl:h-[30rem]">
                <img src={Soldier} width={125} alt="airsoft image" />
                <h3 className="font-bold text-center">Amateurs d'airsoft</h3>
                <p className="text-center text-orange-100">Notre communauté est remplis d'amateurs d'Airsoft et donc c'est pourquoi nous faisons des rassemblements IRL avec tout le monde qui souhaite venir!</p>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <div className="card-5 flex flex-col items-center justify-center bg-gray-200 rounded px-6 py-9 border-t-8 border-b-8 border-gray-900 gap-3 max-w-md h-[24rem] xl:h-[30rem]">
                <img src={Help} width={125} alt="help image" />
                <h3 className="font-bold text-center">Aide aux nouveaux Joueurs</h3>
                <p className="text-center text-orange-100">Notre philosophie dans la communauté ChillzoneQC c'est qu'il devrais toujours avoir une personne disponible pour répondre à tout questions en tout temps</p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <div className="card-6 flex flex-col items-center justify-center bg-gray-200 rounded px-6 py-9 border-t-8 border-b-8 border-gray-900 gap-3 max-w-md h-[24rem] xl:h-[30rem]">
                <img src={Gift} width={125} alt="giveaway image" />
                <h3 className="font-bold text-center">Giveaway à tous les mois</h3>
                <p className="text-center text-orange-100">Le membre de l'équipe chez ChillzoneQc organisons des giveaway de toutes sorte à tous les mois pour faire plaisir à notre communauté</p>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
      <div id="price">
        <h2 id="prices" className="md:text-4xl flex items-center justify-center font-bold text-6xl py-6 my-1 px-2 text-gray-900 text-center">
          Soutenez nous avec un abonnement exclusif!
        </h2>

        <div>
          <div className="flex items-center justify-center mb-5 gap-5 md:flex-col md:px-5">
            <div className="flex flex-col gap-5 justify-between items-center px-5 py-10 rounded-md w-[30vw] max-w-[400px] h-[450px] text-gray-900 bg-[#f4f4f4] md:w-[85vw] md:max-w-full md:h-[400px]">
              <span className="text-2xl font-bold">VIP</span>
              <b className="text-5xl">
                $3<span className="text-2xl">/mois</span>
              </b>
              <ul className="flex flex-col gap-5 text-gray-900 px-10">
                <li className="font-medium text-center text-base">Une fois la souscription effectuée. connectez-vous à notre discord et suivez les instructions. Un de nos administrateur vous aidera à activer votre VIP</li>
              </ul>
              <a href="https://www.patreon.com/CZQC" className="hover:-translate-y-1 hover:bg-gray-900 hover:text-white transition-all bg-white rounded-md py-4 w-full text-center">
                <b className="text-xl">S'abonner maintenant</b>
              </a>
            </div>

            <div className="flex flex-col gap-5 justify-between items-center px-5 py-10 rounded-md w-[30vw] max-w-[400px] text-white bg-blue-600 h-[480px] md:w-[87vw] md:max-w-full md:h-[400px]">
              <span className="text-2xl font-bold">VIP+</span>
              <b className="text-5xl">
                $6<span className="text-2xl">/mois</span>
              </b>
              <ul className="flex flex-col gap-5 text-white px-10">
                <li className="font-medium text-center text-base">Une fois la souscription effectuée. connectez-vous à notre discord et suivez les instructions. Un de nos administrateur vous aidera à activer votre VIP+</li>
              </ul>
              <a href="https://www.patreon.com/CZQC" className="hover:-translate-y-1 hover:bg-white hover:text-gray-900 transition-all	rounded-md py-4 w-full text-center bg-gray-900 ">
                <b className="text-xl">S'abonner maintenant</b>
              </a>
            </div>

            <div className="flex flex-col gap-5 justify-between items-center px-5 py-10 rounded-md w-[30vw] max-w-[400px] h-[450px] text-gray-900 bg-[#f4f4f4] md:w-[85vw]  md:max-w-full md:h-[400px]">
              <span className="text-2xl font-bold">VIP++</span>
              <b className="text-5xl">
                $10<span className="text-2xl ">/mois</span>
              </b>
              <ul className="flex flex-col gap-5 text-gray-900 px-10">
                <li className="font-medium text-center text-base">Une fois la souscription effectuée. connectez-vous à notre discord et suivez les instructions. Un de nos administrateur vous aidera à activer votre VIP++</li>
              </ul>
              <a href="https://www.patreon.com/CZQC" className="hover:-translate-y-1 hover:bg-gray-900 hover:text-white transition-all bg-white rounded-md md py-4 w-full text-center">
                <b className="text-xl">S'abonner maintenant</b>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="ad" className="px-5  w-screen flex items-center justify-center">
        <div id="box" className="bg-blue-600 w-[60rem] md:w-[85vw] md:max-w-full rounded-2xl flex items-center justify-between md:justify-center gap-5 my-1 px-10 pb-5">
          <div id="text">
            <h3 id="about-us" className="md:text-center md:text-2xl md:items-center flex flex-col items-start justify-center font-black text-4xl py-6 text-white">
              REJOINS NOUS SUR <br /> DISCORD DÈS MAINTENANT
            </h3>
            <div id="right-side" className="md:flex-col-reverse flex gap-5 justify-center items-center">
              <a
                href="https://discord.com/invite/w69xrpNHne"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:-translate-y-1 hover:bg-white hover:text-gray-900 transition-all lg:h-auto lg:py-3 flex text-center bg-gray-900 text-white rounded-lg px-6 h-12"
              >
                <button className="font-bold">Rejoindre notre Discord</button>
              </a>
              <div id="reversed-flex" className="md:text-center">
                <p className="md:font-bold lg:text-base text-white font-black text-xl">500+ MEMBRES ACTIFS</p>
                <p className="md:font-bold lg:text-base text-white font-black text-xl">
                  STAFF CONNECTER H24 POUR <br /> TOUT QUESTION!
                </p>
              </div>
            </div>
          </div>
          <img src={Donut} alt="" className="md:hidden" />
        </div>
      </div>
      <Footer />
      <img src={Spring} alt="" className="lg:hidden absolute top-[130vh] right-0" />
    </>
  );
}

export default App;
