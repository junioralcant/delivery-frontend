import React, { useState } from "react";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import api from "../../services/api";

import "./styles.css";

export default function Cadastrese({ ...props }) {
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");

  async function handlerSubmit(e) {
    e.preventDefault();

    await api.post("/enderecos", {
      endereco: {
        rua: rua,
        bairro: bairro,
        numeroCasa: numero
      }
    });

    setRua("");
    setNumero("");
    setBairro("");
    props.history.push("/endereco");
  }

  return (
    <>
      <div className="body-cad">
        <NavBar {...props} />

        <div className="container container-form">
          <div className="container-title col-md-12">
            <span className="title">Cadastro de endereço</span>
          </div>
          <form onSubmit={handlerSubmit}>
            <div className="form-group">
              <label>Rua:</label>
              <input
                onChange={e => setRua(e.target.value)}
                name="rua"
                placeholder="Rua"
                className="form-control"
                value={rua}
              />
            </div>
            <div className="form-group">
              <label>Número da residência:</label>
              <input
                onChange={e => setNumero(e.target.value)}
                name="numeroCasa"
                placeholder="Número da residência"
                className="form-control"
                value={numero}
              />
            </div>
            <div className="form-group">
              <label>Bairro:</label>
              <input
                onChange={e => setBairro(e.target.value)}
                name="bairro"
                placeholder="Bairro"
                className="form-control"
                value={bairro}
              />
            </div>

            <button type="submit" className="btn-lg btn-primary">
              Salvar
            </button>
            <button
              type="submit"
              className="btn-lg btn-danger"
              style={{ marginLeft: 10 }}
              onClick={() => props.history.push("/endereco")}
            >
              Cancelar
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
