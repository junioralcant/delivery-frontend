import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import api from "../../services/api";
import { login } from "../../services/auth";

import "./styles.css";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/sessions", { email, password });
        login(response.data.token);
        document.getElementById("btn-modal").click();
        this.props.history.push("/");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }
  };

  handleCadastrese = () => {
    document.getElementById("btn-modal").click();
    this.props.history.push("/cadastrese");
  };

  render() {
    return (
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
              {this.state.error && (
                <p
                  className="p-1  mb-2 bg-danger text-white"
                  style={{ fontSize: 25, fontWeight: "bold" }}
                >
                  {this.state.error}
                </p>
              )}
              <form onSubmit={this.handleSignIn}>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Senha:</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    className="form-control"
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-lg btn-primary">
                  Logar
                </button>
                <br />
                <br />
                <button className="cadastrese" onClick={this.handleCadastrese}>
                  Cadastre-se
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
                id="btn-modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
