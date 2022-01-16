import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";

// styles and images
import "./Navbar.css";
import Temple from "../../assets/temple.svg";

export default function Navbar({ user }) {
  const { logout, isPending } = useLogout();

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="dojo logo" />
          <span>The Dojo</span>
        </li>

        {!user && (
          <>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login" className="btn">
                Login
              </Link>
            </li>
          </>
        )}

        <li>
          {user && (
            <>
              {!isPending && (
                <button className="btn" onClick={logout}>
                  Logout
                </button>
              )}
            </>
          )}

          {user && (
            <>
              {isPending && (
                <button className="btn" disabled>
                  logged out...
                </button>
              )}
            </>
          )}
        </li>
      </ul>
    </div>
  );
}
