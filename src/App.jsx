import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NewPost from "./pages/NewPost";

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <main className="mx-auto p-6 max-w-[1110px]">
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new" element={<NewPost />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
