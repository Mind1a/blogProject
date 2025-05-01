import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NewPost from "./pages/NewPost";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoutes";

const App = () => {
  return (
    <div className="min-h-screen font-noto">
      <Header />

      <main className="mx-auto p-6 max-w-[1110px]">
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/new"
            element={
              <PrivateRoute>
                <NewPost />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
