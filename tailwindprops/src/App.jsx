import { useState } from "react";

import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded">React with tailwind</h1>
      {""}
      <br />
      <Card
        username="tope"
        position="Staff Engineer, Algolia"
        img="https://images.pexels.com/photos/14803628/pexels-photo-14803628.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=loads"
      />
      {""}
      <br />
      <Card />
      {""}
      <br />
      <Card />
    </>
  );
}

export default App;
