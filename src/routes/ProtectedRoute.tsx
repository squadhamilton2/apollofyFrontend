import { Navigate } from "react-router-dom";
import { useAuthState } from "../context/authcontext";

const ProtectedRoute = ({
  component: Component,
}: {
  component: React.ElementType;
}) => {
  const { isAuthenticated } = useAuthState();
  return isAuthenticated ? <Component /> : <Navigate to="/start" />;
};

export default ProtectedRoute;
