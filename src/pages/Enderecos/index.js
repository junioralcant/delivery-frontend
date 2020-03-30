import React from "react";
import { MdDeleteForever } from "react-icons/md";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import "./styles.css";

export default function Enderecos({ ...props }) {
  return (
    <>
      <div className="body" style={{ paddingBottom: "45%" }}>
        <NavBar {...props} />
        <div className="container-title-endereco col-md-12">
          <span className="title">Endereços</span>
          <button
            className="btn btn btn-primary"
            onClick={() => props.history.push("/cadendereco")}
          >
            Novo endereço
          </button>
        </div>
        <div className="container container-endereco">
          <div className="endereco col-md-12">
            <div className="dados-endereco">
              <div>
                <span>Rua: </span>
                <strong>Rua lino machado</strong>
              </div>
              <div>
                <span>Número da residência: </span>
                <strong>755A</strong>
              </div>
              <div>
                <span>Bairro: </span>
                <strong>Rua da Granja</strong>
              </div>
              <div>
                <span>Cidade: </span>
                <strong>Sao Mateus</strong>
              </div>
              <div>
                <span>Estado: </span>
                <strong>Maranhao</strong>
              </div>
            </div>

            <div className="remove-endereco">
              <button>
                <MdDeleteForever />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
