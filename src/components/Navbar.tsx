import React, { useState } from "react";
import Logo from "../assets/imagenPrueba.jpg";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
    <div className="leftSide" id={openLinks ? "open" : "close"}>
      <img src={Logo} />
      <div className="hiddenLinks">
        <Link to="/"> Inicio </Link>
        <Link to="/agenda"> Agenda </Link>
        <Link to="/calendario"> Calendario </Link>
        <Link to="/notas"> Notas </Link>
      </div>
    </div>
    <div className="rightSide">
      <Link to="/"> Inicio </Link>
      <Link to="/agenda"> Agenda </Link>
      <Link to="/calendario"> Calendario </Link>
      <Link to="/notas"> Notas </Link>
      <button onClick={toggleNavbar}>
        <ReorderIcon />
      </button>
    </div>
  </div>
  );
}

export default Navbar;
