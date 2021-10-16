import React from 'react';
import ReactDOM from 'react-dom';
import ModalDemo from './components/ModalDemo/ModalDemo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App/App';
import Navigation from './components/Navigation/Navigation';
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <aside>
          <Navigation />
        </aside>
        <main>
          <h1>NDEAM - Accessibility Demos </h1>
          <Switch>
            <Route path="/hello-world" render={() => <h1>Hello world</h1>} />
            <Route path="/konnichiwa-sekai" render={() => <h1>こんにちは世界</h1>} />
            <Route path="/modal-demo" component={ModalDemo} />
            <Route path="/" component={App} />
          </Switch>
        </main>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
