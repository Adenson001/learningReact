import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("black");


  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg gb-white px-3 py-2 rounded-3xl">
          <button
            className="'outline-none px-4 py-1 rounded-full  shadow-lg text-white bg-red-700"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="'outline-none px-4 py-1 rounded-full  shadow-lg text-white bg-green-950"
            onClick={() => setColor("green")}
          >
            green
          </button>
          <button
            className="'outline-none px-4 py-1 rounded-full  shadow-lg text-white bg-yellow-700"
            onClick={() => setColor("yellow")}
          >
            yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
