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
import { isValidToken } from './utils/helper';

const store = configureStore();

function requireAuth(nextState, replace) {
  if (!isValidToken()) {
    replace('/login');
  }
}

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/login" component={Login} />
        <Route component={Main} onEnter={requireAuth}>
          <Route path="/" component={Recordings} />
          <Route path="*" component={ErrorPage} />
        </Route>
      </Router>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);
