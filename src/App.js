import Header from "./components/Header/Header";
import Arrow from "./data/arrow.svg";
import Down from "./data/down.svg";
import Wave from "./data/wave.svg";
import Quebec from "./data/quebec.png";

function App() {
  return (
    <>
      <div className="hero h-screen w-screen bg-[url('./data/background.png')] bg-center bg-no-repeat bg-cover ">
        <Header>
          <a href="">Accueil</a>
          <a href="https://discord.gg/CZQC" target="_blank">
            Discord
          </a>
          <a href="" className="bg-blue-600 p-2 text-white rounded mr-6">
            Whitelist
          </a>
        </Header>
        <div className="md:justify-center md:items-center md:text-center content h-[80vh] text-white px-5 flex flex-col justify-center gap-6">
          <h1 className="md:text-5xl md:leading-tight font-black text-7xl leading-tight">
            L'EXPÉRIENCE SQUAD FAIT PAR DES <span className="text-blue-600">QUÉBÉCOIS</span> POUR LES <span className="text-blue-600">QUÉBÉCOIS</span>
          </h1>
          <a
            href="https://discord.gg/CZQC"
            target="_blank"
            className="flex text-center justify-center gap-2 bg-blue-600 rounded w-56
           p-3"
          >
            <button>REJOIGNEZ NOUS</button>
            <img src={Arrow} alt="arrow" className="w-4" />
          </a>
        </div>
        <div className="bottom w-screen flex flex-col items-center">
          <img src={Down} alt="" className="w-6 cursor-pointer" />
        </div>
      </div>
      <img src={Wave} alt="" className="w-screen block" />
      <div className="about-us  flex item-center justify-evenly flex-col flex-wrap px-5">
        <h2 className="flex items-center justify-center font-semibold text-4xl py-6 text-gray-900">Qui sommes-nous?</h2>
        <div className="group-cards flex flex-col gap-6">
          <div className="cards-1 flex items-center md:flex-wrap gap-8">
            <div className="card-1 flex flex-col items-center bg-gray-200 rounded-md px-6 py-9 border-4 border-gray-900">
              <img src={Quebec} alt="quebec logo" />
              <h3 className="font-bold">Communaute Quebecoise</h3>
              <p className="text-center text-orange-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia tincidunt metus, a vestibulum arcu tempor sit amet.</p>
            </div>
            <div className="card-2 flex flex-col items-center bg-gray-200 rounded px-6 py-9 border-4 border-gray-900">
              <img src={Quebec} alt="quebec logo" />
              <h3 className="font-bold">Communaute Quebecoise</h3>
              <p className="text-center text-orange-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia tincidunt metus, a vestibulum arcu tempor sit amet.</p>
            </div>
            <div className="card-3 flex flex-col items-center bg-gray-200 rounded px-6 py-9 border-4 border-gray-900">
              <img src={Quebec} alt="quebec logo" />
              <h3 className="font-bold">Communaute Quebecoise</h3>
              <p className="text-center text-orange-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia tincidunt metus, a vestibulum arcu tempor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
