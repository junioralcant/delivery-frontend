import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import api from "../../services/api";

import * as CartActions from "../../store/modules/cart/actions";

import "./styles.css";

function Cardapio({ ...props }) {
  const [produtos, setProdutos] = useState([]);
  const [add, setAdd] = useState(false);

  const { filtro } = props.match.params;

  useEffect(() => {
    async function loadprodutos() {
      const response = await api.get(`/produtos`);

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
          {produtos.map(produto => {
            if (produto.categoria.nome === filtro) {
              return (
                <div key={produto._id} className="col-md-12 container-cat">
                  <div className="produtos">
                    <div className="produtos-desc">
                      <strong>{produto.nome}</strong>{" "}
                      <small>{produto.preco} R$</small>
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
      <Footer />
    </>
  );
}

export default connect()(Cardapio);
