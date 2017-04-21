import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './containers/App';
import Login from './containers/Login';
import Main from './containers/Main';
import Recordings from './containers/Recordings';
import ErrorPage from './containers/ErrorPage';
import configureStore from './stores';
import jwtDecode from 'jwt-decode';

const store = configureStore();

function requireAuth(nextState, replace) {
  let token = localStorage.getItem('id_token');

  if (!token) {
    replace('/login');
  } else {
    let tokenData = jwtDecode(token);

    if ((Date.now() / 1000) > tokenData.exp) {
      replace('/login');
    }
  }
}

function checkIfLoggedIn(nextState, replace) {
  let token = localStorage.getItem('id_token');

  if (token) {
    let tokenData = jwtDecode(token);

    if ((Date.now() / 1000) < tokenData.exp) {
      replace('/recordings');
    }
  }
}

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Router history={browserHistory}>
          <Route path="/" component={App}>
            <Route path="/login" component={Login} onEnter={checkIfLoggedIn} />
            <Route component={Main} onEnter={requireAuth}>
              <Route path="/recordings" component={Recordings} />
            </Route>
          </Route>
          <Route path="*" component={ErrorPage} />
      </Router>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);
