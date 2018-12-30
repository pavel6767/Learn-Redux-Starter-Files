import React from 'react';
import { render } from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import css from './styles/style.styl';

import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import store, { history } from './store';

import Raven from 'raven-js';
import { sentry_url, logException } from './data/config';

Raven.config(sentry_url, {
  tags: {
    git_commit: 'fjfj4ign',
    userLevel: 'editor'
  }
}).install();

logException(new Error('failed'), {
  email: 'somePersion@priif.cooooom'
});

// Raven.showReportDialog();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
