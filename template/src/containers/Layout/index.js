import React, { memo, Suspense, useEffect } from 'react';

// routes config
import routes from '../../routes';

import { Route, Switch, Redirect, useLocation, useRouteMatch, useHistory } from 'react-router-dom';
import {useMemoSelector} from "use-redux-state-hook";
import {NotificationContainer} from 'react-notifications';
import Http from '../../func/Http';
import {Loading} from '../../components/Base/Anim'

// Pages
const Home = React.lazy(() => import('../../views/Home'));
const Auth = React.lazy(() => import('../../views/Auth'));

const Page404 = React.lazy(() => import('../../views/Pages/Page404'));
const Page500 = React.lazy(() => import('../../views/Pages/Page500'));

const RestrictedRoute = memo(({component: Component, location, token, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      token
      ? <Component {...props} />
      : <Redirect
        to={{
          pathname: '/auth',
          state: {from: location}
        }}
    />}
  />
))

const AuthRoutes = memo(() => {
  const {token} = useMemoSelector(({auth}) => auth);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (!token) {
      history.push('/auth');
    }
  }, [token, location, history]);

  return (
    <Suspense fallback={Loading({})}>
      <Switch>
        {routes.map((route, idx) => {
          return route.component ? (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              name={route.name}
              render={props => (
                <route.component {...props} />
              )} />
          ) : (null);
        })}
        <Redirect from={location.path} to="/404" />
      </Switch>
    </Suspense>
  );
})

const Routes = memo(() => {
  const {token} = useMemoSelector(({auth}) => auth);

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  useEffect(() => {
    Http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }, [token])

  useEffect(() => {
    if (['/auth'].includes(location.pathname)) {
      if (token) {
        history.push('/dashboard');
      }
    }
  }, [token, location, history]);

  return (<>
    <NotificationContainer/>
    <Switch>
      <Route exact path="/" name="Home" render={props => <Home {...props}/>} />
      <Route exact path="/auth" name="Auth" render={props => <Auth {...props}/>} />
      <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
      <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
      <RestrictedRoute name="Home" path={`${match.url}`} token={token} location={location}
                       component={AuthRoutes} />
    </Switch>
  </>)
})

export default Routes
