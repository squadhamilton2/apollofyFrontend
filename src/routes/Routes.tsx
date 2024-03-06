import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import { HomeNotLogged } from "../pages/HomeNotLogged/HomeNotLogged";
import { HomeLogged } from "../pages/HomeLogged/HomeLogged";

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeNotLogged />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomeLogged />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
