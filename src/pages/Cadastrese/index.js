import React, { useState } from "react";

import NavBar from "../../components/NavBar";
import Loader from "../../components/Loader";

import api from "../../services/api";

import "./styles.css";

export default function Cadastrese({ ...props }) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [numeroResid, setNumeroResid] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handlerSubmit(e) {
    e.preventDefault();

    try {
      if (
        !nome ||
        !telefone ||
        !rua ||
        !bairro ||
        !numeroResid ||
        !senha ||
        !email
      ) {
        setError("Preencha todos os campos para continuar.");
      } else {
        setLoading(true);

        await api.post("/users", {
          nome: nome,
          telefone: telefone,
          email: email,
          password: senha,
          endereco: {
            rua: rua,
            bairro: bairro,
            numeroCasa: numeroResid
          }
        });

        setLoading(false);

        setNome("");
        setTelefone("");
        setEmail("");
        setSenha("");
        setRua("");
        setBairro("");
        setNumeroResid("");
        alert(
          "Cadastro efetuado com sucesso! Agora faça login para continuar."
        );
        props.history.push("/");
      }
    } catch (error) {
      setError(error.response.data.error);
      setLoading(false);
    }
  }

  return (
    <>
      <div className="body-cad">
        <NavBar {...props} />

        <div className="container container-form">
          <div className="container-title col-md-12">
            <span className="title">Cadastre-se</span>
          </div>
          <form onSubmit={handlerSubmit}>
            <div className="form-group">
              {error && (
                <p
                  className="p-1  mb-2 bg-danger text-white"
                  style={{ fontSize: 25, fontWeight: "bold" }}
                >
                  {error}
                </p>
              )}
            </div>
            <div className="form-group">
              <label>Nome:</label>
              <input
                name="email"
                placeholder="Nome"
                className="form-control"
                onChange={e => setNome(e.target.value)}
                value={nome}
              />
            </div>
            <div className="form-group">
              <label>Telefone:</label>
              <input
                name="telefone"
                placeholder="Telefone"
                className="form-control"
                onChange={e => setTelefone(e.target.value)}
                value={telefone}
              />
            </div>

            <div className="form-group">
              <label>Rua:</label>
              <input
                name="rua"
                placeholder="Rua"
                className="form-control"
                onChange={e => setRua(e.target.value)}
                value={rua}
              />
            </div>

            <div className="form-group">
              <label>Bairro:</label>
              <input
                name="bairro"
                placeholder="Bairro"
                className="form-control"
                onChange={e => setBairro(e.target.value)}
                value={bairro}
              />
            </div>

            <div className="form-group">
              <label>Número da residência:</label>
              <input
                name="numeroCasa"
                placeholder="Número da residência"
                className="form-control"
                onChange={e => setNumeroResid(e.target.value)}
                value={numeroResid}
              />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="form-control"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="form-group">
              <label>Senha:</label>
              <input
                name="password"
                type="password"
                placeholder="Senha"
                className="form-control"
                onChange={e => setSenha(e.target.value)}
                value={senha}
              />
            </div>

            {loading ? (
              <Loader />
            ) : (
              <button type="submit" className="btn-lg btn-primary">
                Salvar
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
