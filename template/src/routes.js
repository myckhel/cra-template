import {lazy} from 'react';

const Dashboard = lazy(() => import('./views/App/Dashboard'));

const routes = [
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
];

export default routes;
