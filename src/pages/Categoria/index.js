import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import NavBar from "../../components/NavBar";

import api from "../../services/api";

import Loader from "../../components/Loader";

import "./styles.css";

export default function Categoria({ ...props }) {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lojaDisponivel, setLojaDisponivel] = useState();

  useEffect(() => {
    async function loadLojaDisponivel() {
      const response = await api.get(`/lojadisponivel`);

      setLojaDisponivel(response.data[0].disponivel);
    }

    loadLojaDisponivel();
  }, []);

  useEffect(() => {
    async function loadCategoria() {
      setLoading(true);
      const response = await api.get("/categorias");

      setCategorias(response.data.docs);
      setLoading(false);
    }

    loadCategoria();
  }, []);

  return (
    <>
      <NavBar {...props} />
      <div className="body-categoria container col-md-12">
        <div className="container col-md-12" style={{ paddingBottom: "31.5%" }}>
          <div
            className="col-md-12 container-text"
            style={{ textAlign: "center" }}
          >
            <span className="title">Categorias</span>
          </div>

          <div className="col-md-12 container-cat">
            {loading && <Loader />}
            {lojaDisponivel
              ? categorias.map(
                  (categoria) =>
                    categoria.disponivel === true && (
                      <div className="row" key={categoria._id}>
                        <Link
                          className="btn-cat"
                          to={`/cardapio/${categoria.nome}`}
                        >
                          {categoria.nome}
                        </Link>
                      </div>
                    )
                )
              : !loading && (
                  <div className="loja-fechada">
                    <>
                      <h1>Ops, no momento não estamos funcionando</h1>
                      <small>Voltaremos mais tarde</small>
                    </>
                  </div>
                )}
          </div>
        </div>
      </div>
    </>
  );
}
