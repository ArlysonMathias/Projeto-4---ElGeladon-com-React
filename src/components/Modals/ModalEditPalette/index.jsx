import "./style.css";
import { GrClose } from "react-icons/gr";
import { toast } from "react-hot-toast";
import { useState } from "react";

const ModalEditPalette = ({ closeModal, palette, getPalettes }) => {
  const [sabor, setSabor] = useState(palette.sabor);
  const [preco, setPreco] = useState(palette.preco);
  const [descricao, setDescricao] = useState(palette.descricao);
  const [foto, setFoto] = useState(palette.foto);

  const handleEditPalette = async () => {
    const editedPalette = {
      sabor,
      preco,
      descricao,
      foto,
    };

    const response = await fetch(
      `http://localhost:8080/paletas/atualizar-paleta/${palette._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(editedPalette),
      }
    );

    if (response.status !== 201) {
      return toast.error("Erro ao editar paleta.");
    }

    toast.success("Paleta editada com sucesso!")

    closeModal();
    getPalettes();
  };
  return (
    <div className="modal-overlay">
      <div className="modal-edit-container">
        <div className="modal-edit-container-header">
          <h3>Editar paleta de {palette.sabor}</h3>
          <a href="##" onClick={closeModal}>
            <i className="fas fa-grClose">
              <GrClose />
            </i>
          </a>
        </div>
        <div className="modal-edit-container-body">
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
          <button onClick={handleEditPalette}>Editar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalEditPalette;
