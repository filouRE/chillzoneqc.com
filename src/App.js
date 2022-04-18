// Imports
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Images
import Arrow from "./data/arrow.svg";
import Down from "./data/down.svg";
import Wave from "./data/wave.svg";
import Quebec from "./data/quebec.png";
import Donut from "./data/donut.png";
import Spring from "./data/spring.png";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <div className="hero h-screen w-screen bg-[url('./data/background.png')] bg-center bg-no-repeat bg-cover px-20 md:px-1">
          <Header color="text-white">
            <a href="/">Accueil</a>
            <a href="https://discord.gg/CZQC" target="_blank">
              Discord
            </a>
            <a href="https://www.patreon.com/CZQC" className="bg-blue-600 px-3 py-2 text-white rounded mr-6">
              Whitelist
            </a>
          </Header>
          <div className="md:justify-center md:items-center md:text-center content h-[80vh] text-white px-5 flex flex-col justify-center gap-6">
            <h1 className="md:text-4xl lg:text-5xl font-black text-7xl leading-tight">
              L'EXPÉRIENCE SQUAD FAIT PAR DES <span className="text-blue-600">QUÉBÉCOIS</span> POUR LES <span className="text-blue-600">QUÉBÉCOIS</span>
            </h1>
            <a
              href="https://discord.gg/CZQC"
              target="_blank"
              className="flex text-center justify-center gap-2 bg-blue-600 rounded-lg w-56
           p-3"
            >
              <button>REJOIGNEZ NOUS</button>
              <img src={Arrow} alt="arrow" className="w-4" />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a href="#about-us">
              <img src={Down} alt="" className="w-6 cursor-pointer transition-all bounce" />
            </a>
          </div>
        </div>
        <img src={Wave} alt="wave image" className="w-screen" />
        <div className="2xl:px-40 md:px-5 lgg:px-5 flex item-center justify-evenly flex-col flex-wrap px-80">
          <h2 id="about-us" className="md:text-4xl flex items-center justify-center font-bold text-6xl py-6 text-gray-900 text-center">
            Qui sommes-nous?
          </h2>
          <div className="group-cards flex flex-col gap-6">
            <div className="cards-1 flex items-center justify-center md:flex-wrap gap-8">
              <div className="card-1 flex flex-col items-center bg-gray-200 rounded-md px-6 py-9 border-4 border-gray-900 gap-3 max-w-md">
                <img src={Quebec} alt="quebec logo" />
                <h3 className="font-bold text-center">Communaute Quebecoise</h3>
                <p className="text-center text-orange-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia tincidunt metus, a vestibulum arcu tempor sit amet.</p>
              </div>
              <div className="card-2 flex flex-col items-center bg-gray-200 rounded px-6 py-9 border-4 border-gray-900 gap-3 max-w-md">
                <img src={Quebec} alt="quebec logo" />
                <h3 className="font-bold text-center">Communaute Quebecoise</h3>
                <p className="text-center text-orange-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia tincidunt metus, a vestibulum arcu tempor sit amet.</p>
              </div>
              <div className="card-3 flex flex-col items-center bg-gray-200 rounded px-6 py-9 border-4 border-gray-900 gap-3 max-w-md">
                <img src={Quebec} alt="quebec logo" />
                <h3 className="font-bold text-center">Communaute Quebecoise</h3>
                <p className="text-center text-orange-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia tincidunt metus, a vestibulum arcu tempor sit amet.</p>
              </div>
            </div>
            <div className="cards-1 flex items-center justify-center md:flex-wrap gap-8">
              <div className="card-1 flex flex-col items-center bg-gray-200 rounded-md px-6 py-9 border-4 border-gray-900 gap-3 max-w-md">
                <img src={Quebec} alt="quebec logo" />
                <h3 className="font-bold text-center">Communaute Quebecoise</h3>
                <p className="text-center text-orange-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia tincidunt metus, a vestibulum arcu tempor sit amet.</p>
              </div>
              <div className="card-2 flex flex-col items-center bg-gray-200 rounded px-6 py-9 border-4 border-gray-900 gap-3 max-w-md">
                <img src={Quebec} alt="quebec logo" />
                <h3 className="font-bold text-center">Communaute Quebecoise</h3>
                <p className="text-center text-orange-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia tincidunt metus, a vestibulum arcu tempor sit amet.</p>
              </div>
              <div className="card-3 flex flex-col items-center bg-gray-200 rounded px-6 py-9 border-4 border-gray-900 gap-3 max-w-md">
                <img src={Quebec} alt="quebec logo" />
                <h3 className="font-bold text-center">Communaute Quebecoise</h3>
                <p className="text-center text-orange-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia tincidunt metus, a vestibulum arcu tempor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
        <div id="price">
          <h2 id="prices" className="md:text-3xl flex items-center justify-center font-bold text-6xl py-6 px-2 text-gray-900 text-center">
            Soutenez nous avec un abonnement exclusif!
          </h2>

          <div>
            <div className="Plans">
              <div>
                <span>VIP</span>
                <b>
                  $1<span>/month</span>
                </b>
                <ul>
                  <li>FEATURE</li>
                  <li>FEATURE</li>
                  <li>FEATURE</li>
                </ul>
                <a>
                  <b>S'abonner maintenant</b>
                </a>
              </div>

              <div>
                <span>VIP+</span>
                <b>
                  $2<span>/month</span>
                </b>
                <ul>
                  <li>FEATURE</li>
                  <li>FEATURE</li>
                  <li>FEATURE</li>
                </ul>
                <a>
                  <b>S'abonner maintenant</b>
                </a>
              </div>

              <div>
                <span>VIP++</span>
                <b>
                  $5<span>/month</span>
                </b>
                <ul>
                  <li>FEATURE</li>
                  <li>FEATURE</li>
                  <li>FEATURE</li>
                </ul>
                <a>
                  <b>S'abonner maintenant</b>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="ad" className="px-5  w-screen flex items-center justify-center">
          <div id="box" className="bg-blue-600 rounded-2xl flex items-center justify-start gap-5 px-10 pb-5">
            <div id="text">
              <h3 id="about-us" className="md:text-center md:text-2xl md:items-center flex flex-col items-start justify-center font-black text-4xl py-6 text-white">
                REJOINS NOUS SUR <br /> DISCORD DÈS MAINTENANT
              </h3>
              <div id="right-side" className="md:flex-col-reverse flex gap-5 justify-center items-center">
                <a href="https://discord.gg/CZQC" target="_blank" className="md:px-10 lg:h-auto lg:py-3 flex text-center bg-gray-900 text-white rounded-lg px-6 h-12">
                  <button className="font-bold ">Rejoindre notre Discord</button>
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
      </div>
    </>
  );
}

export default App;
