import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from "./styles";
import SelectCurso from "./pages/selecionarCurso";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter basename='/'>
        <Switch>
            <Route path="/" component={SelectCurso} exact />
        </Switch>
        <GlobalStyle />
    </BrowserRouter>,
  document.getElementById('root')
);
