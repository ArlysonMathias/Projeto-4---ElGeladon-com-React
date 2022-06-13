import Footer from "components/Footer";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";




const App = () => {
  const [palletes, setPalette] = useState([]);

  const getPalettes = async () => {
    const response = await fetch("http://localhost:8080/paletas/listar-todas");
    const palettesList = await response.json();

    setPalette(palettesList);
  };

  useEffect(() => {
    getPalettes();
  }, []);

  return (
    <div>
      <Toaster />
      <Header getPalettes={getPalettes} />
      <Home palletes={palletes} getPalettes={getPalettes} />
      <Footer />
    </div>
  );
};

export default App;
