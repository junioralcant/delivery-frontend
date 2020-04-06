import React, { useEffect, useState } from "react";
import { parseFromTimeZone, formatToTimeZone } from "date-fns-timezone";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import { formatPrice } from "../../util/formart";

import api from "../../services/api";

import "./styles.css";

export default function Pedidos({ ...props }) {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    async function loadProduto() {
      const response = await api.get("/pedidos");

      setPedidos(response.data);
    }

    loadProduto();
  }, []);

  console.log(pedidos);

  return (
    <>
      <div className="body" style={{ paddingBottom: "84%" }}>
        <NavBar {...props} />
        <div className="container-title-pedido col-md-12">
          <span className="title">Pedidos</span>
        </div>

        {pedidos.map(pedido => {
          const data = parseFromTimeZone(pedido.createdAt, {
            timeZone: "America/Sao_Paulo"
          });

          const dataFormatada = formatToTimeZone(data, "DD/MM/YYYY", {
            timeZone: "Europe/Berlin"
          });
          return (
            <div
              key={pedido._id}
              className="container col-md-12 container-pedido"
            >
              <div className="data-pedido col-md-12">
                <strong>{dataFormatada}</strong>
              </div>
              {pedido.produto.map(p => (
                <div key={p._id} className="pedido">
                  <div className="produtos-desc">
                    <strong>{p.produtoId.nome}</strong>{" "}
                    <small>{formatPrice(p.produtoId.preco)}</small>
                  </div>
                  <div className="descricao">
                    <small>{p.produtoId.descricao}</small>
                  </div>
                  <div className="footer-desc">
                    <div>
                      <small>Valor:</small>{" "}
                      <strong>{formatPrice(p.valor)}</strong>
                    </div>
                    <div className="valor-pedido">
                      <small>QTD:</small>{" "}
                      <strong style={{ marginLeft: 15 }}>{p.quantidade}</strong>
                    </div>
                  </div>
                </div>
              ))}

              <div className="total-pedido col-md-12">
                <small>Total:</small>{" "}
                <strong>{formatPrice(pedido.valorTotal)}</strong>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
