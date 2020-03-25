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
            <span className="title">Cadastro de endereço</span>
          </div>
          <form>
            <div class="form-group">
              <label>Rua:</label>
              <input name="rua" placeholder="Rua" class="form-control" />
            </div>
            <div class="form-group">
              <label>Número da residência:</label>
              <input
                name="numeroCasa"
                placeholder="Número da residência"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label>Bairro:</label>
              <input name="bairro" placeholder="Bairro" class="form-control" />
            </div>

            <div class="form-group">
              <label>Cidade:</label>
              <input name="cidade" placeholder="Cidade" class="form-control" />
            </div>

            <div class="form-group">
              <label>Estado:</label>
              <input name="estado" placeholder="Estado" class="form-control" />
            </div>

            <button type="submit" class="btn-lg btn-primary">
              Salvar
            </button>
            <button
              type="submit"
              class="btn-lg btn-danger"
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
