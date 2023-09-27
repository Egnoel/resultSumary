import "./App.css";
import memory from "./assets/images/icon-memory.svg";
import reaction from "./assets/images/icon-reaction.svg";
import verbal from "./assets/images/icon-verbal.svg";
import visual from "./assets/images/icon-visual.svg";

function App() {
  return (
    <div className="flex sm:items-center sm:justify-center sm:min-h-screen h-full bg-[#ECF2FF]">
      <div className="flex flex-col sm:flex-row w-full sm:w-[400px] h-full sm:h-[250px] sm:m-auto bg-white sm:rounded-l-xl ">
        <div className="flex flex-1  items-center justify-center bg-gradient-to-b from-[#7755FF] to-[#2F2CE9] rounded-b-xl sm:rounded-xl">
          <div className="w-full sm:w-[90%] h-full sm:h-[90%] flex flex-col justify-between items-center text-center">
            <span className="text-[#CAC9FF]">Your Result</span>
            <div className="flex flex-col w-16 h-16 rounded-full items-center justify-center text-center bg-gradient-to-r from-[#4D21C9] to-[#2521C9]">
              <span className="text-white font-bold text-lg">76</span>
              <span className="text-slate-400 text-[8px]">of 100</span>
            </div>
            <span className="text-white">Great</span>
            <p className="text-[#CAC9FF]">
              Your performance exceed 65% of the people conducting the test
              here!
            </p>
          </div>
        </div>
        <div className="flex flex-1 bg-white items-center justify-center">
          <div className="w-[90%] h-[90%] flex flex-col justify-between bg-white">
            <h1 className=" text-[#303B59] font-bold">Summary</h1>
            <div className=" flex flex-col gap-2">
              <div className="bg-[#FFF6F6] flex flex-row justify-between">
                <div className="flex flex-row gap-1 ">
                  <img src={reaction} alt="reaction" />
                  <span className=" text-[#FF5555]">Reaction</span>
                </div>
                <div className="flex flex-row ">
                  <span className=" text-[#303B59] font-bold">80</span>
                  <span className=" text-[#303B59] font-light">/100</span>
                </div>
              </div>
              <div className="bg-[#FFFBF4] flex flex-row justify-between">
                <div className="flex flex-row gap-1 ">
                  <img src={memory} alt="memory" />
                  <span className=" text-[#FFB21E]">Memory</span>
                </div>
                <div className="flex flex-row ">
                  <span className=" text-[#303B59] font-bold">92</span>
                  <span className=" text-[#303B59] font-light">/100</span>
                </div>
              </div>
              <div className="bg-[#F2FCF9] flex flex-row justify-between">
                <div className="flex flex-row gap-1 ">
                  <img src={verbal} alt="verbal" />
                  <span className=" text-[#00BB8F]">Verbal</span>
                </div>
                <div className="flex flex-row ">
                  <span className="text-[#303B59] font-bold">61</span>
                  <span className=" text-[#303B59] font-light">/100</span>
                </div>
              </div>
              <div className="bg-[#F3F4FD] flex flex-row justify-between">
                <div className="flex flex-row gap-2 ">
                  <img src={visual} alt="visual" />
                  <span className=" text-[#1125D6]">Visual</span>
                </div>
                <div className="flex flex-row">
                  <span className=" text-[#303B59] font-bold">73</span>
                  <span className=" text-[#303B59] font-light">/100</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="w-full h-6 rounded-xl bg-[#303B59] text-white flex items-center justify-center hover:bg-gradient-to-r from-[#6943FF] to-[#2F2CE9]"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
