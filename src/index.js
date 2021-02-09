import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from "./styles";
import SelectCurso from "./pages/selecionarCurso";
import Cadastro1 from "./pages/cadastro1";
import Cadastro2 from "./pages/cadastro2";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter basename={"/"}>
        <Switch>
            <Route component={SelectCurso} path= {"/"} exact />
            <Route component={Cadastro1} path= {"/cadastropart1"} exact />
            <Route component={Cadastro2} path= {"/cadastropart2"} exact />
        </Switch>
        <GlobalStyle />
    </BrowserRouter>,
  document.getElementById('root')
);
