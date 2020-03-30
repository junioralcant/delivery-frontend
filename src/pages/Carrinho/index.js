import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { connect } from "react-redux";

import * as CartActions from "../../store/modules/cart/actions";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import SignIn from "../../components/SignIn";

import { isAuthenticated } from "../../services/auth";

import { formatPrice } from "../../util/formart";

import "./styles.css";

function Carrinho({ ...props }) {
  const { cart, dispatch, total, cartSize } = props;

  function increment(product) {
    dispatch(CartActions.updateAmount(product._id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmount(product._id, product.amount - 1));
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
                    <button onClick={() => decrement(produto)}>-</button>
                    <input
                      type="number"
                      readOnly
                      value={produto.amount}
                      className="form-control input-number"
                    />
                    <button onClick={() => increment(produto)}>+</button>
                  </div>
                </div>
                <div className="btn-remover-carrinho">
                  <button
                    onClick={() =>
                      dispatch(CartActions.removeFromCart(produto._id))
                    }
                  >
                    <MdDeleteForever size="25" />
                  </button>
                </div>
              </div>
            );
          })}

          {cartSize > 0 ? (
            <div className="finalizar">
              {isAuthenticated() ? (
                <>
                  <button
                    onClick={() => props.history.push("/selecionarendereco")}
                  >
                    Finalizar Pedido
                  </button>
                  <div>
                    <small>Total:</small> <strong>{total}</strong>
                  </div>
                </>
              ) : (
                <>
                  <button data-toggle="modal" data-target="#myModal">
                    Faça login
                  </button>
                  <div>
                    <small>Total:</small> <strong>{total}</strong>
                    <SignIn {...props} />
                  </div>
                </>
              )}
            </div>
          ) : (
            <div
              className="col-md-12 container-text-cart"
              style={{ textAlign: "center" }}
            >
              <span className="title-cart">Carrinho Vazio</span>
            </div>
          )}
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

export default connect(mapStateToProps)(Carrinho);
