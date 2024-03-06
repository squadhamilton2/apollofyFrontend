import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../pages/Login/Login"
import { HomeNotLogged } from "../pages/HomeNotLogged/HomeNotLogged"


export const AppRoutes = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomeNotLogged/>} />
    <Route path="/login" element={<Login/>} />
    

    </Routes>
    </BrowserRouter>
    </>
  )
}
