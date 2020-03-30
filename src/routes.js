import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";

import Home from "./pages/Home";
import Categoria from "./pages/Categoria";
import Cardapio from "./pages/Cardapio";
import Carrinho from "./pages/Carrinho";
import Cadastrese from "./pages/Cadastrese";
import Pedidos from "./pages/Pedidos";
import Enderecos from "./pages/Enderecos";
import CadEndereco from "./pages/CadEndereco";
import SelecionarEndereco from "./pages/SelecionarEndereco";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: `/`, state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/categoria" component={Categoria} />
      <Route path="/cardapio/:filtro" component={Cardapio} />
      <Route path="/carrinho" component={Carrinho} />
      <Route path="/cadastrese" component={Cadastrese} />

      <PrivateRoute exact path="/pedido" component={Pedidos} />
      <PrivateRoute path="/endereco" component={Enderecos} />
      <PrivateRoute path="/cadendereco" component={CadEndereco} />
      <PrivateRoute path="/selecionarendereco" component={SelecionarEndereco} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
