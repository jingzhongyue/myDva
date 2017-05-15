import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from '../../routes/index/IndexPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
<Route path="/*.html" component={IndexPage} />
<Route path="/index/*.html" component={IndexPage} />
      <Route path="/index.html" component={IndexPage} />
<Route path="/index/*.html" component={IndexPage} />
    </Router>
  );
}

export default RouterConfig;
