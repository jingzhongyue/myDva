import React from 'react';
import { Router, Route } from 'dva/router';
import TestPage from '../../routes/test/TestPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
<Route path="/test.html" component={TestPage} />
<Route path="/test/*.html" component={TestPage} />
    </Router>
  );
}

export default RouterConfig;
