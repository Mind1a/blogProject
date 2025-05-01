import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogOut = () => {
    alert("ლოგაუთი წარმატებით განხორციელდა");
    logout();
    navigate("/");
  };
  return (
    <header className="shadow p-4">
      <nav className="flex items-center mx-auto p-6 w-full max-w-[1110px]">
        <ul className="flex items-center gap-[24px] font-medium text-blue-600 dark:text-blue-50">
          <li>
            <Link to="/" className="test">
              Home
            </Link>
          </li>

          {user ? (
            <>
              <li>
                <Link to="/new">Create Post</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}

          <li>
            <button className="cursor-pointer" onClick={handleLogOut}>
              Log Out
            </button>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
