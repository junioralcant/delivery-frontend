import React from "react";
import { Link } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./styles.css";

export default function NavBar({ history }) {
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
            className="btn btn btn-primary btn-cart my-2 my-sm-0"
            style={{ marginRight: 10 }}
          >
            <IoIosCart /> <span> 1</span>
          </button>
        </div>
      </div>

      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal"></button>
              <h4 class="modal-title">Login</h4>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label>Senha:</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    class="form-control"
                  />
                </div>

                <button type="submit" class="btn-lg btn-primary">
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
                >
                  Cadastre-se
                </Link>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
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
