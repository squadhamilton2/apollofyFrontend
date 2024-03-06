import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import { HomeNotLogged } from "../pages/HomeNotLogged/HomeNotLogged";
import { Register1 } from "../pages/Register/Register1";
import { Register2 } from "../pages/Register/Register2";
import { HomeLogged } from "../pages/HomeLogged/HomeLogged";

export const AppRoutes = () => {
  const logged = false;
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* HOME */}
          {logged ? (
            <Route path="/" element={<HomeLogged />} />
          ) : (
            <Route path="/" element={<HomeNotLogged />} />
          )}

          {/* LOGIN */}
          {logged ? (
            <Route path="/login" element={<Navigate to="/" replace={true} />} />
          ) : (
            <Route path="/login" element={<Login />} />
          )}

          {/* REGISTER */}
          {logged ? (
            <Route
              path="/register1"
              element={<Navigate to="/" replace={true} />}
            />
          ) : (
            <Route path="/register1" element={<Register1 />} />
          )}
          {logged ? (
            <Route
              path="/register2"
              element={<Navigate to="/" replace={true} />}
            />
          ) : (
            <Route path="/register2" element={<Register2 />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
};
