import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux'
import './func/window'
import './App.css';
import 'react-notifications/lib/notifications.css';
import 'antd/dist/antd.css';
import store from './redux/store'

// Containers
import Routes from './containers/Layout';

import { Spin } from 'antd';

require('dotenv').config();

// const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));
const loading = () => <div className="animated fadeIn pt-3 text-center"><Spin size="large" color="secondary" /></div>;

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route path="/" component={Routes}/>
          </Switch>
        </React.Suspense>
      </Router>
    </Provider>
  );
}
export default App
