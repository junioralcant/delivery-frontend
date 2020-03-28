import React from "react";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import "./styles.css";

export default function Home({ ...props }) {
  return (
    <div className="body">
      <NavBar {...props} />
      <header className="col-md-12 ">
        <div className="text-banner">
          <span className="banner">
            PIZZARIA
            <br />
            Delivary
          </span>

          <p>
            <a href="#menu" className="button">
              Faça seu pedido
            </a>
          </p>
        </div>
      </header>

      <div className="col-md-12 funcionamento">
        <div className="container">
          <div className="col-md-12 container-text-hr">
            <span className="hr-funcionamento">Horário de Funcionamento</span>
          </div>
        </div>

        <div className="col-md-12 container-hr">
          <div className="container container-dados-hr">
            <strong>Segunda</strong> <small>Das 18 às 23 horas</small>
          </div>
        </div>
        <div className="col-md-12 container-hr">
          <div className="container container-dados-hr">
            <strong>Terça</strong> <small>Das 18 às 23 horas</small>
          </div>
        </div>
        <div className="col-md-12 container-hr">
          <div className="container container-dados-hr">
            <strong>Quarta</strong> <small>Das 18 às 23 horas</small>
          </div>
        </div>
        <div className="col-md-12 container-hr">
          <div className="container container-dados-hr">
            <strong>Quinta</strong> <small>Das 18 às 23 horas</small>
          </div>
        </div>
        <div className="col-md-12 container-hr">
          <div className="container container-dados-hr">
            <strong>Sexta</strong> <small>Das 18 às 23 horas</small>
          </div>
        </div>
        <div className="col-md-12 container-hr">
          <div className="container container-dados-hr">
            <strong>Sabado</strong> <small>Das 18 ás 23 horas</small>
          </div>
        </div>
        <div className="col-md-12 container-hr">
          <div className="container container-dados-hr">
            <strong>Domingo</strong> <small>Das 18 às 23 horas</small>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
