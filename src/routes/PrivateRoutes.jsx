import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  //             <div>
  //                <h1>Hello World</h1>
  //             </div>
  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
