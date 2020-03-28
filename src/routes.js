import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Categoria from "./pages/Categoria";
import Cardapio from "./pages/Cardapio";
import Carrinho from "./pages/Carrinho";
import Cadastrese from "./pages/Cadastrese";
import Pedidos from "./pages/Pedidos";
import Enderecos from "./pages/Enderecos";
import CadEndereco from "./pages/CadEndereco";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/categoria" component={Categoria} />
      <Route path="/cardapio/:filtro" component={Cardapio} />
      <Route path="/carrinho" component={Carrinho} />
      <Route path="/cadastrese" component={Cadastrese} />
      <Route exact path="/pedido" component={Pedidos} />
      <Route path="/endereco" component={Enderecos} />
      <Route path="/cadendereco" component={CadEndereco} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
