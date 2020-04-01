import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import { formatPrice } from "../../util/formart";
import api from "../../services/api";

import "./styles.css";

function SelecioneEndereco({ ...props }) {
  const [enderecos, setEnderecos] = useState([]);

  const { cart, total, history } = props;

  useEffect(() => {
    async function loadEndereco() {
      const response = await api("/enderecos");

      setEnderecos(response.data);
    }

    loadEndereco();
  }, []);

  async function handlerPedido(enderecoId) {
    await api.post("/pedidos", {
      enderecoId: enderecoId,
      produtos: cart.map(produto => {
        return { produtoId: produto._id, quantidade: produto.amount };
      })
    });

    alert("PEDIDO REALIZADO COM SUCESSO!");
    history.push("/pedido");
    history.go(0);
  }

  return (
    <>
      <div className="body-carrinho">
        <NavBar {...props} />
        <div
          className="container col-md-12 container-carrinho"
          style={{ paddingBottom: "50%" }}
        >
          {cart.map(produto => {
            return (
              <div key={produto._id} className="produtos">
                <div className="produtos-desc">
                  <strong>{produto.nome}</strong>{" "}
                  <small>{produto.preco} R$</small>
                </div>
                <div className="descricao">
                  <small>{produto.descricao}</small>
                </div>
                <div className="footer-desc">
                  <div>
                    <small>Subtotal:</small> <strong>{produto.subtotal}</strong>
                  </div>

                  <div className="btn-add-carrinho">
                    <small style={{ marginRight: 5 }}>QTD: </small>
                    <input
                      type="number"
                      readOnly
                      value={produto.amount}
                      className="form-control input-number"
                    />
                  </div>
                </div>
              </div>
            );
          })}

          <div className="finalizar-total">
            <div>
              <strong>Total:</strong> <strong>{total}</strong>
            </div>
          </div>

          <div>
            <div className="container-title-endereco col-md-12">
              <span className="title-selecione">
                Selecione um endereço para entrega
              </span>
            </div>

            {enderecos.length > 0 ? (
              <div className="container container-endereco">
                {enderecos.map(end => (
                  <button
                    key={end._id}
                    onClick={() => {
                      if (
                        window.confirm(
                          "Deseja enviar o pedido para o endereço selecionado ?"
                        )
                      )
                        handlerPedido(end._id);
                    }}
                    className="endereco col-md-12"
                  >
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
                  </button>
                ))}
              </div>
            ) : (
              <div className="container container-endereco-button-cad">
                <button onClick={() => history.push("/cadendereco")}>
                  Cadastrar endereço
                </button>
              </div>
            )}
          </div>
          <div className="voltar ">
            <button
              className="btn-lg btn-primary"
              onClick={() => history.push("/carrinho")}
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.preco * product.amount)
  })),
  cartSize: state.cart.length,
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.preco * product.amount;
    }, 0)
  )
});

export default connect(mapStateToProps)(SelecioneEndereco);
