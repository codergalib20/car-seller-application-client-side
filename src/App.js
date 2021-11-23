import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AllProducts from "./Pages/Home/AllProducts";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register";
import NotFoundPage from "./Pages/NotFound/NotFoundPage";
import OrderProducts from "./Pages/Shared/OrderProducts";
function App() {
  const [preload, setPreload] = useState(true);
  useEffect(() => {
    const preLoader = document.getElementById("preloader");
    setTimeout(() => {
      setPreload(false);
    }, 4000);
  }, []);
  return (
    <AuthProvider>
      <Router>
        {preload === true ? (
          <div
            id="preloader"
            className="flex items-center justify-center min-h-screen"
          >
            <div className="loader">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/allProducts" component={AllProducts} />
            <PrivateRoute path="/service/:id">
              <OrderProducts />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        )}
      </Router>
    </AuthProvider>
  );
}

export default App;
