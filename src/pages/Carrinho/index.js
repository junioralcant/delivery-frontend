import React from "react";
import { MdDeleteForever } from "react-icons/md";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import "./styles.css";

export default function Carrinho({ ...props }) {
  return (
    <div className="body">
      <NavBar {...props} />
      <div
        className="container col-md-12 container-carrinho"
        style={{ paddingBottom: "50%" }}
      >
        <div className="produtos">
          <div className="produtos-desc">
            <strong>Baiana</strong> <small>12:00 R$</small>
          </div>
          <div className="descricao">
            <small>
              Prezunto, queijo, milhor, calabresa , queijo, milhor, calabresa
            </small>
          </div>
          <div className="footer-desc">
            <div>
              <small>Valor:</small> <strong>22.00 R$</strong>
            </div>
            <div className="btn-add-carrinho">
              <button>-</button>
              <p style={{ marginLeft: 15 }}>2</p>
              <button>+</button>
            </div>
          </div>
          <div className="btn-remover-carrinho">
            <button>
              <MdDeleteForever size="25" />
            </button>
          </div>
        </div>

        <div className="produtos">
          <div className="produtos-desc">
            <strong>Baiana</strong> <small>12:00 R$</small>
          </div>
          <div className="descricao">
            <small>
              Prezunto, queijo, milhor, calabresa , queijo, milhor, calabresa
            </small>
          </div>
          <div className="footer-desc">
            <div>
              <small>Valor:</small> <strong>22.00 R$</strong>
            </div>
            <div className="btn-add-carrinho">
              <button>-</button>
              <p style={{ marginLeft: 15 }}>2</p>
              <button>+</button>
            </div>
          </div>
          <div className="btn-remover-carrinho">
            <button>
              <MdDeleteForever size="25" />
            </button>
          </div>
        </div>

        <div className="produtos">
          <div className="produtos-desc">
            <strong>Baiana</strong> <small>12:00 R$</small>
          </div>
          <div className="descricao">
            <small>
              Prezunto, queijo, milhor, calabresa , queijo, milhor, calabresa
            </small>
          </div>
          <div className="footer-desc">
            <div>
              <small>Valor:</small> <strong>22.00 R$</strong>
            </div>
            <div className="btn-add-carrinho">
              <button>-</button>
              <p style={{ marginLeft: 15 }}>2</p>
              <button>+</button>
            </div>
          </div>
          <div className="btn-remover-carrinho">
            <button>
              <MdDeleteForever size="25" />
            </button>
          </div>
        </div>

        <div className="produtos">
          <div className="produtos-desc">
            <strong>Baiana</strong> <small>12:00 R$</small>
          </div>
          <div className="descricao">
            <small>
              Prezunto, queijo, milhor, calabresa , queijo, milhor, calabresa
            </small>
          </div>
          <div className="footer-desc">
            <div>
              <small>Valor:</small> <strong>22.00 R$</strong>
            </div>
            <div className="btn-add-carrinho">
              <button>-</button>
              <p style={{ marginLeft: 15 }}>2</p>
              <button>+</button>
            </div>
          </div>
          <div className="btn-remover-carrinho">
            <button>
              <MdDeleteForever size="25" />
            </button>
          </div>
        </div>

        <div className="finalizar">
          <button>Finalizar Pedido</button>
          <div>
            <small>Total:</small> <strong>40.00 R$</strong>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
