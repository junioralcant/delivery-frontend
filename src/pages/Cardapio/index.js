import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import NavBar from "../../components/NavBar";
import Loader from "../../components/Loader";

import api from "../../services/api";

import { formatPrice } from "../../util/formart";
import * as CartActions from "../../store/modules/cart/actions";

import "./styles.css";

function Cardapio({ ...props }) {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [add, setAdd] = useState(false);

  const { filtro } = props.match.params;

  useEffect(() => {
    async function loadprodutos() {
      setLoading(true);

      const response = await api.get(`/produtos`);

      setLoading(false);
      setProdutos(response.data.docs);
    }

    loadprodutos();
  }, []);

  function handlerAddProduct(product) {
    setAdd(true);
    const { dispatch } = props;

    dispatch(CartActions.addToCart(product));
    setTimeout(() => setAdd(false), 1000);
  }

  return (
    <>
      <div className="body-cardapio">
        <NavBar {...props} />

        {!add ? null : (
          <div className="container-add-carrinho">
            <small className="alert-add-carrinho">Adicionado ao carrinho</small>
          </div>
        )}

        <div className="container" style={{ paddingBottom: 60 }}>
          <div
            className="col-md-12 container-text"
            style={{ textAlign: "center" }}
          >
            <span className="title">{filtro}</span>
          </div>

          {loading && (
            <div className="container-cat">
              <Loader />
            </div>
          )}

          {produtos.map(produto => {
            if (
              produto.categoria.nome === filtro &&
              produto.disponivel === true
            ) {
              return (
                <div key={produto._id} className="col-md-12 container-cardapio">
                  <div className="produtos-cardapio">
                    <div className="produtos-desc">
                      <strong>{produto.nome}</strong>{" "}
                      <small>{formatPrice(produto.preco)}</small>
                    </div>
                    <div className="descricao">
                      <small>{produto.descricao}</small>
                    </div>
                    <div className="btn-add-carrinho">
                      <button onClick={() => handlerAddProduct(produto)}>
                        Adicionar ao carrinho
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          })}
          <div
            className="container-btn-voltar"
            onClick={() => props.history.push("/categoria")}
          >
            <button className="btn-lg btn-primary btn-cart my-2 my-sm-0">
              Voltar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default connect()(Cardapio);
