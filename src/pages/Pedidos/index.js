import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import "./styles.css";

export default function Pedidos({ ...props }) {
  return (
    <>
      <div className="body" style={{ paddingBottom: "84%" }}>
        <NavBar {...props} />
        <div className="container-title-pedido col-md-12">
          <span className="title">Pedidos</span>
        </div>

        <div className="container col-md-12 container-pedido">
          <div className="data-pedido col-md-12">
            <strong>15-04-2020</strong>
          </div>
          <div className="pedido">
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
              <div className="valor-pedido">
                <small>QTD:</small> <p style={{ marginLeft: 15 }}>2</p>
              </div>
            </div>
          </div>
          <div className="pedido">
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
              <div className="valor-pedido">
                <small>QTD:</small> <p style={{ marginLeft: 15 }}>2</p>
              </div>
            </div>
          </div>

          <div className="total-pedido col-md-12">
            <small>Total:</small> <strong>40.00 R$</strong>
          </div>
        </div>

        <div className="container col-md-12 container-pedido">
          <div className="data-pedido col-md-12">
            <strong>15-04-2020</strong>
          </div>
          <div className="pedido">
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
              <div className="valor-pedido">
                <small>QTD:</small> <p style={{ marginLeft: 15 }}>2</p>
              </div>
            </div>
          </div>
          <div className="pedido">
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
              <div className="valor-pedido">
                <small>QTD:</small> <p style={{ marginLeft: 15 }}>2</p>
              </div>
            </div>
          </div>

          <div className="total-pedido col-md-12">
            <small>Total:</small> <strong>40.00 R$</strong>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
