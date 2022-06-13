import React from "react";
import "./style.css";
import ModalRemovePalette from "components/Modals/ModalRemovePalette";
import ModalEditPalette from "components/Modals/ModalEditPalette";
import { BsTrash, BsPencilFill } from "react-icons/bs";
import toast from "react-hot-toast";
import { useState } from "react";

const Cards = ({ palette, getPalettes }) => {
  const errorMessage = () => {
    toast.error("Sessão em desenvolvimento.");
  };

  //Modal de Deletar
  const [showRemoveModal, setRemoveModal] = useState(false);

  const handleShowRemoveModal = () => {
    setRemoveModal(!showRemoveModal);
  };
  //Modal de Edição
  const [showEditModal, setShowEditModal] = useState(false);
  const handleShowEditModal = () => {
    setShowEditModal(!showEditModal);
  };

  return (
    <>
      <div className="card-container">
        <div className="card-container-div1">
          <p>{`R$ ${palette.preco.toFixed(2)}`}</p>
          <img src={palette.foto} alt={`Paleta sabor ${palette.sabor}`} />
        </div>
        <h3>{palette.sabor}</h3>
        <p>{palette.descricao}</p>
        <div className="card-container-buttons">
          <a
            href="##"
            title="Editar"
            className="icon-edit"
            onClick={handleShowEditModal}
          >
            <i>
              <BsPencilFill />
            </i>
          </a>
          <a
            href="##"
            onClick={handleShowRemoveModal}
            title="Remover"
            className="icon-remove"
          >
            <i>
              <BsTrash />
            </i>
          </a>
        </div>
        <button
          title="Adicionar ao carrinho"
          className="button-add"
          onClick={errorMessage}
        >
          adicionar{" "}
        </button>
      </div>
      {showRemoveModal && (
        <ModalRemovePalette
          getPalettes={getPalettes}
          closeModal={handleShowRemoveModal}
          palette={palette}
        />
      )}
      {showEditModal && (
        <ModalEditPalette
          getPalettes={getPalettes}
          closeModal={handleShowEditModal}
          palette={palette}
        />
      )}
    </>
  );
};

export default Cards;
