import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { renderRoutes } from 'react-router-config';
import { Provider } from "react-redux";
import "./func/window";
import "./App.css";
import "react-notifications/lib/notifications.css";
import "antd/dist/antd.css";
import store from "./redux/store";

// Containers
import AppRoutes from "./containers/Layout";

import { Loading } from "./components/Base/Anim";

require("dotenv").config();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route path="*" element={<AppRoutes />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  </Provider>
);

export default App;
