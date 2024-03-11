import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import { HomeNotLogged } from "../pages/HomeNotLogged/HomeNotLogged";
import { HomeLogged } from "../pages/HomeLogged/HomeLogged";
import ProfilePage from "../pages/Profile/ProfilePage";
import { Register1 } from "../pages/Register/Register1";
import { Register2 } from "../pages/Register/Register2";
import { EditProfile } from "../pages/EditProfile/EditProfile";
import { SearchPage } from "../pages/Search/SearchPage";
import { MySongsSection } from "../pages/MySongsSection/MySongsSection";
import ProtectedRoute from "./ProtectedRoute";
import Player from "../pages/Player/Player";
import Page404 from "../pages/Page404/Page404";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeNotLogged />} />
        {/* <Route path="/player" element={<Player />} /> */}
        <Route path="/page404" element={<Page404 />} />
        <Route path="/register1" element={<Register1 />} />
        <Route path="/register2" element={<Register2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute component={HomeLogged} />} />
        <Route
          path="/profile"
          element={<ProtectedRoute component={ProfilePage} />}
        />
        <Route
          path="/editprofile"
          element={<ProtectedRoute component={EditProfile} />}
        />
        <Route
          path="/search"
          element={<ProtectedRoute component={SearchPage} />}
        />
        <Route
          path="/mysongs"
          element={<ProtectedRoute component={MySongsSection} />}
        />
        <Route path="/player" element={<ProtectedRoute component={Player} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
