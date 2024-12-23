import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Manage from "./components/Manage";
import ProtechtedRoute from "./components/protectedRoute/ProtechtedRoute";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { logout } from "./components/state/actions/userAction";

import { io } from "socket.io-client";

const App = () => {

  const socket = useMemo(() => io(process.env.REACT_APP_API_URL), []);

  const dispatch = useDispatch();

  const logoutUser = () => {
    return dispatch(logout());
  }

  useEffect(() => {

    // const securityCode = "dkje3bdfhewde";
    // const getSecurityCode = localStorage.getItem('billingUserVal');
    // if (!getSecurityCode) {
    //   return logoutUser();
    // } else if (getSecurityCode !== securityCode) {
    //   return logoutUser();
    // }

    socket.on("connect", () => {
      // console.log("New user joined", socket.id);
    });

    socket.on("logoutNow", () => {
      // console.log("Terminated")
      return dispatch(logout());
    });

  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route element={<ProtechtedRoute />}>
          <Route path="/manage/*" element={<Manage />} />
          <Route path="/dashboard/*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
