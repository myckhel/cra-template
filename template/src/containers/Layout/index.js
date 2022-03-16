import React, { memo, Suspense, useEffect } from "react";

// routes config
import routes from "../../routes";

import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { useMemoSelector } from "use-redux-states";
import { NotificationContainer } from "react-notifications";
import Http from "../../func/Http";
import { Loading } from "../../components/Base/Anim";

// Pages
const Home = React.lazy(() => import("../../views/Home"));
const Auth = React.lazy(() => import("../../views/Auth"));

const Page404 = React.lazy(() => import("../../views/Pages/Page404"));
const Page500 = React.lazy(() => import("../../views/Pages/Page500"));

const AuthRoutes = memo(() => {
  const { token } = useMemoSelector(({ auth }) => auth);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/auth");
    }
  }, [token, location, navigate]);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {routes.map((Component, path, name, exact, idx) => (
          <Route
            key={idx}
            path={path}
            exact={exact}
            name={name}
            element={<Component />}
          />
        ))}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  );
});

const AppRoutes = memo(() => {
  const { token } = useMemoSelector(({ auth }) => auth);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    Http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }, [token]);

  useEffect(() => {
    if (token) {
      if (["/auth"].includes(location.pathname)) {
        navigate("/dashboard");
      }
    }
  }, [token, location, navigate]);

  return (
    <>
      <NotificationContainer />
      <Routes>
        <Route exact path="/" name="Home" element={<Home />} />
        <Route exact path="/auth" name="Auth" element={<Auth />} />
        <Route exact path="/404" name="Page 404" element={<Page404 />} />
        <Route exact path="/500" name="Page 500" element={<Page500 />} />
        <Route
          path="*"
          element={
            token ? (
              <AuthRoutes />
            ) : (
              <Navigate
                to={{
                  pathname: "/auth",
                  state: { from: location },
                }}
              />
            )
          }
        />
      </Routes>
    </>
  );
});

export default AppRoutes;
