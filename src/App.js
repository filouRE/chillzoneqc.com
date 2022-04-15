import Header from "./components/Header/Header";
import Arrow from "./data/arrow.svg";
import Down from "./data/down.svg";
import Wave from "./data/wave.svg";

function App() {
  return (
    <>
      <div className="hero h-screen w-screen bg-[url('./data/background.png')] bg-center bg-no-repeat bg-cover ">
        <Header />
        <div className="md:justify-center md:items-center md:text-center content h-[80vh] text-white px-5 flex flex-col justify-center gap-6 px-20">
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
        <div className="bottom w-screen flex flex-col items-center justify-center">
          <img src={Down} alt="" className="w-6 cursor-pointer" />
        </div>
        <img src={Wave} alt="" className="w-screen mt-4" />
      </div>
    </>
  );
}

export default App;
