import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/authcontext";
import { TrackContextProvider } from "./context/trackcontext";
import { UserContextProvider } from "./context/usercontext";
import { AppRoutes } from "./routes/Routes";

function App() {
  return (
    <>
      <UserContextProvider>
        <TrackContextProvider>
          <AuthProvider>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </AuthProvider>
        </TrackContextProvider>
      </UserContextProvider>
    </>
  );
}
export default App;
