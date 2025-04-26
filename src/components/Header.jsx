import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow p-4">
      <nav className="flex items-center mx-auto p-6 w-full max-w-[1110px]">
        <ul className="flex items-center gap-[24px] font-medium text-blue-600">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/new">Create Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
