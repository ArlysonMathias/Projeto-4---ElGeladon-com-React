import "./style.css";
import logo from "../../assets/icons/logo.svg";
import checkoutIcon from "../../assets/icons/sacola.svg";
import addPallet from "../../assets/icons/criar-paleta.svg";
import ModalNewPalette from "components/Modals/ModalNewPallete";
import { useState } from "react";


const Header = ({ getPalettes }) => {
  const [showModalCreate, setShowModalCreate] = useState(false);

  const handleShowModalCreate = () => {
    setShowModalCreate(!showModalCreate);
  };

  return (
    <>
      <div className="header-container">
        <div>
          <img className="img-elgeladon" src={logo} alt="El geladon" />
          <h1>El Geladon</h1>
        </div>
        <div className="icons-header">
          <img
            onClick={handleShowModalCreate}
            className="img-add"
            src={addPallet}
            alt="Adicionar Paleta"
          />
          <img
            className="img-checkout"
            src={checkoutIcon}
            alt="Sacola de compras"
          />
        </div>
      </div>
      {showModalCreate && (
        <ModalNewPalette
          closeModal={handleShowModalCreate}
          getPalettes={getPalettes}
        />
      )}
    </>
  );
};

export default Header;
