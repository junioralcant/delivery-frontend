import React from "react";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import "./styles.css";

export default function Cardapio({ ...props }) {
  return (
    <>
      <div className="body">
        <NavBar {...props} />
        <div className="container" style={{ paddingBottom: 60 }}>
          <div
            className="col-md-12 container-text"
            style={{ textAlign: "center" }}
          >
            <span className="title">Pizzas</span>
          </div>
          <div className="col-md-12 container-cat">
            <div className="produtos">
              <div className="produtos-desc">
                <strong>Portuguesa</strong> <small>12:00 R$</small>
              </div>
              <div className="descricao">
                <small>
                  Prezunto, queijo, milhor, calabresa , queijo, milhor,
                  calabresa
                </small>
              </div>
              <div className="btn-add-carrinho">
                <button>Adicionar ao carrinho</button>
              </div>
            </div>

            <div className="produtos">
              <div className="produtos-desc">
                <strong>Baiana</strong> <small>12:00 R$</small>
              </div>
              <div className="descricao">
                <small>
                  Prezunto, queijo, milhor, calabresa , queijo, milhor,
                  calabresa
                </small>
              </div>
              <div className="btn-add-carrinho">
                <button>Adicionar ao carrinho</button>
              </div>
            </div>

            <div className="produtos">
              <div className="produtos-desc">
                <strong>Dois Queijos</strong> <small>12:00 R$</small>
              </div>
              <div className="descricao">
                <small>
                  Prezunto, queijo, milhor, calabresa , queijo, milhor,
                  calabresa
                </small>
              </div>
              <div className="btn-add-carrinho">
                <button>Adicionar ao carrinho</button>
              </div>
            </div>
            <div className="produtos">
              <div className="produtos-desc">
                <strong>Carne Seca</strong> <small>12:00 R$</small>
              </div>
              <div className="descricao">
                <small>
                  Prezunto, queijo, milhor, calabresa , queijo, milhor,
                  calabresa
                </small>
              </div>
              <div className="btn-add-carrinho">
                <button>Adicionar ao carrinho</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
