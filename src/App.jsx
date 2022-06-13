import Footer from "components/Footer";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import api from "services";




const App = () => {
  const [palletes, setPalette] = useState([]);

  const getPalettes = async () => {
    const response = await api.get("/paletas/listar-todas");
    

     setPalette(response.data);
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
