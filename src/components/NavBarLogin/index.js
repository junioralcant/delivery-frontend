import React from "react";
import { Link } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./styles.css";

export default function NavBar({ history }) {
  return (
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
        </ul>
        <button
          className="btn btn btn-danger my-2 my-sm-0"
          style={{ marginRight: 10 }}
        >
          Sair
        </button>
        <button
          className="btn btn btn-primary btn-cart my-2 my-sm-0"
          onClick={() => {
            history.push("/carrinho");
          }}
        >
          <IoIosCart /> <span> 1</span>
        </button>
      </div>
    </div>
  );
}
