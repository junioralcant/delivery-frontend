import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { IoIosCart } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./styles.css";

function NavBar({ history, cartSize }) {
  return (
    <>
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <button
          type="button"
          data-toggle="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            history.push("/carrinho");
          }}
          className=" navbar-toggler btn btn-primary btn-cart my-2 my-sm-0"
          style={{ marginRight: 10 }}
        >
          <IoIosCart /> <span> {cartSize}</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/">
            Pizzaria<span className="sr-only">(current)</span>
          </Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item ">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item ">
              <Link className="nav-link" to="/categoria">
                Cardápio<span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item ">
              <Link className="nav-link" to="/pedido">
                Pedidos <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/endereco">
                Endereços <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item ">
              <Link className="nav-link" to="/cadastrese">
                Cadastre-se<span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>

          <button
            className="btn btn btn-primary my-2 my-sm-0"
            style={{ marginRight: 10 }}
            data-toggle="modal"
            data-target="#myModal"
          >
            Login
          </button>

          <button
            onClick={() => {
              history.push("/carrinho");
            }}
            className="btn btn-primary btn-cart my-2 my-sm-0"
            style={{ marginRight: 10 }}
          >
            <IoIosCart /> <span> {cartSize}</span>
          </button>
        </div>
      </div>

      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
              ></button>
              <h4 className="modal-title">Login</h4>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Senha:</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    className="form-control"
                  />
                </div>

                <button type="submit" className="btn-lg btn-primary">
                  Logar
                </button>
                <br />
                <br />
                <Link
                  className="cadastrese"
                  onClick={() => {
                    history.push("/cadastrese");
                    history.go(0);
                  }}
                  to=""
                >
                  Cadastre-se
                </Link>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default connect(state => ({
  cartSize: state.cart.length
}))(NavBar);
