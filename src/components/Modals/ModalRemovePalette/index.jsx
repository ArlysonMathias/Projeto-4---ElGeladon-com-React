import "./style.css";
import { GrClose } from "react-icons/gr";
import { toast } from "react-hot-toast";

const ModalRemovePalette = ({ closeModal, palette, getPalettes }) => {
  const handleRemovePalette = async () => {
    const response = await fetch(
      `http://localhost:8080/paletas/deletar-paleta/${palette._id}`,
      {
        method: "DELETE",
        mode: "cors",
      }
    );

    if (response.status !== 200) {
      return toast.error("Erro ao deletar paleta.");
    }

    closeModal();
    getPalettes();
    toast.success("Paleta deletada com sucesso!");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-remove-container">
        <div className="modal-remove-container-header">
          <a href="##">
            <i onClick={closeModal}>
              <GrClose />
            </i>
          </a>
        </div>
        <h3>Deseja excluir a paleta de {palette.sabor}?</h3>
        <div className="modal-remove-actions">
          <button onClick={closeModal} className="cancel-button">
            Não
          </button>
          <button className="sucess-button" onClick={handleRemovePalette}>
            Sim
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalRemovePalette;
