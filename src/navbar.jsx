import { useContext } from "react";
import AuthContext from "./Context/AuthContext";
import Logout from "./Logout";

function Navbar() {
  const { auth } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Todo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {auth && (
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
            )}

            {!auth && (
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/register"
                >
                  Register
                </a>
              </li>
            )}

            {auth ? (
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/logout"
                >
                  Log out
                </a>
              </li>
            ) : (
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/login"
                >
                  Log in
                </a>
              </li>
            )}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
