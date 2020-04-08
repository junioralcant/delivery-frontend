import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";

import NavBar from "../../components/NavBar";
import Loader from "../../components/Loader";

import api from "../../services/api";
import "./styles.css";

export default function Enderecos({ ...props }) {
  const [enderecos, setEnderecos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadEnderecos() {
      setLoading(true);
      const response = await api.get("/enderecos");

      setLoading(false);
      setEnderecos(response.data);
    }
    loadEnderecos();
  }, []);

  async function deleteEndereco(id) {
    await api.delete(`/enderecos/${id}`);
    const response = await api.get("/enderecos");

    setEnderecos(response.data);
  }

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
          {loading && (
            <div className="loader-end">
              <Loader />
            </div>
          )}

          {enderecos.map(end => (
            <div key={end._id} className="endereco col-md-12">
              <div className="dados-endereco">
                <div>
                  <span>Rua: </span>
                  <strong>{end.rua}</strong>
                </div>
                <div>
                  <span>Número da residência: </span>
                  <strong>{end.numeroCasa}</strong>
                </div>
                <div>
                  <span>Bairro: </span>
                  <strong>{end.bairro}</strong>
                </div>
                <div>
                  <span>Cidade: </span>
                  <strong>{end.cidade}</strong>
                </div>
                <div>
                  <span>Estado: </span>
                  <strong>{end.estado}</strong>
                </div>
              </div>

              <div className="remove-endereco">
                <button
                  onClick={() => {
                    if (
                      window.confirm("Deseja realmente deletar esse endereco ?")
                    )
                      deleteEndereco(end._id);
                  }}
                >
                  <MdDeleteForever />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
