import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import api from "../../services/api";

import "./styles.css";

export default function Categoria({ ...props }) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function loadCategoria() {
      const response = await api.get("/categorias");

      setCategorias(response.data.docs);
    }

    loadCategoria();
  }, []);

  return (
    <>
      <div className="body-categoria">
        <NavBar {...props} />
        <div className="container col-md-12" style={{ paddingBottom: "31.5%" }}>
          <div
            className="col-md-12 container-text"
            style={{ textAlign: "center" }}
          >
            <span className="title">Categorias</span>
          </div>
          {categorias.map(categoria => (
            <div key={categoria._id} className="col-md-12 container-cat">
              <Link className="btn-cat" to={`/cardapio/${categoria.nome}`}>
                {categoria.nome}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
