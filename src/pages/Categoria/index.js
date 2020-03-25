import React from "react";
import { Link } from "react-router-dom";

import NavBar from "../../components/NavBarLogin";
import Footer from "../../components/Footer";

import "./styles.css";

export default function Categoria({ ...props }) {
  return (
    <div className="body">
      <NavBar {...props} />
      <div className="container col-md-12" style={{ paddingBottom: "31.5%" }}>
        <div
          className="col-md-12 container-text"
          style={{ textAlign: "center" }}
        >
          <span className="title">Categorias</span>
        </div>
        <div className="col-md-12 container-cat">
          <Link className="btn-cat">Massas</Link>
          <Link className="btn-cat" to="/cardapio">
            Pizzas
          </Link>
          <Link className="btn-cat">Bebidas</Link>
          <Link className="btn-cat">Massas</Link>
          <Link className="btn-cat">Pizzas</Link>
          <Link className="btn-cat">Bebidas</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
