import React from "react";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import "./styles.css";

export default function Cadastrese({ ...props }) {
  return (
    <>
      <div className="body-cad">
        <NavBar {...props} />

        <div className="container container-form">
          <div className="container-title col-md-12">
            <span className="title">Cadastre-se</span>
          </div>
          <form>
            <div className="form-group">
              <label>Nome:</label>
              <input
                type="email"
                name="email"
                placeholder="Nome"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Telefone:</label>
              <input
                name="telefone"
                placeholder="Telefone"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Rua:</label>
              <input name="rua" placeholder="Rua" className="form-control" />
            </div>

            <div className="form-group">
              <label>Bairro:</label>
              <input
                name="bairro"
                placeholder="Bairro"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Número da residência:</label>
              <input
                name="numeroCasa"
                placeholder="Número da residência"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Cidade:</label>
              <input
                name="cidade"
                placeholder="Cidade"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Estado:</label>
              <input
                name="estado"
                placeholder="Estado"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="form-control"
                id="email"
              />
            </div>
            <div className="form-group">
              <label>Senha:</label>
              <input
                name="password"
                type="password"
                placeholder="Senha"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn-lg btn-primary">
              Salvar
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
