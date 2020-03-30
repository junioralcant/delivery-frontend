import React from "react";
import { connect } from "react-redux";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import { formatPrice } from "../../util/formart";

import "./styles.css";

function SelecioneEndereco({ ...props }) {
  const { cart, total, history } = props;

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
            <div className="container container-endereco">
              <button className="endereco col-md-12">
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
              </button>
            </div>
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
