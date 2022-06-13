import "./style.css";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { GrClose } from "react-icons/gr";

const ModalNewPalette = ({ closeModal, getPalettes }) => {
  const [sabor, setSabor] = useState("");
  const [preco, setPreco] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [foto, setFoto] = useState("");

  const handleCreatePalette = async () => {
    const newPalette = {
      sabor,
      preco,
      descricao,
      foto,
    };

    const response = await fetch("http://localhost:8080/paletas/criar-paleta", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(newPalette),
    });

    if (response.status !== 201) {
      return toast.error("Erro na criação!");
    }

    setSabor("");
    setPreco("");
    setDescricao("");
    setFoto("");
    closeModal();
    getPalettes();
    toast.success("Paleta sugerida com sucesso!");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div>
          <div className="modal-container-header">
            <h3>Sugerir uma nova paleta</h3>
            <a href="##" onClick={closeModal}>
              <i className="fas fa-grClose">
                <GrClose />
              </i>
            </a>
          </div>
          <div className="modal-container-body">
            <input
              placeholder="Informe o sabor"
              value={sabor}
              onChange={(event) => setSabor(event.target.value)}
              name="sabor"
            ></input>
            <input
              value={preco}
              onChange={(event) => setPreco(event.target.value)}
              name="preco"
              type="number"
            ></input>
            <input
              placeholder="Informe uma descrição"
              value={descricao}
              onChange={(event) => setDescricao(event.target.value)}
              name="descricao"
              type="text"
            ></input>
            <input
              placeholder="Informe o link da imagem"
              value={foto}
              onChange={(event) => setFoto(event.target.value)}
              name="foto"
            ></input>
            <button onClick={handleCreatePalette}>Adicionar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalNewPalette;
