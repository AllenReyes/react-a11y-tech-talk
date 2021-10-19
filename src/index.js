import React from 'react';
import ReactDOM from 'react-dom';
import ModalDemo from './components/ModalDemo/ModalDemo';
import ModalWorkingDemo from './components/ModalWorkingDemo/ModalWorkingDemo';
import Todo from './components/Todo/Todo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <main>
        <h1>NDEAM - Demos </h1>
        <Switch>
          <Route path="/modal-demo" component={ModalDemo} />
          <Route path="/modal-working-demo" component={ModalWorkingDemo} />
          <Route path="/todo" component={Todo} />
          <Route path="/" component={App} />
        </Switch>
      </main>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
