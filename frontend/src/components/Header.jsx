import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";

export default function Header() {

  const { user, logout } = useContext(AuthContext);
  const { changeTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">

      <div className="container">

        {/* Application name */}

        <Link className="navbar-brand fw-bold" to="/">
          Train App
        </Link>

        {/* Burger */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">

          {/* LEFT MENU */}

          <ul className="navbar-nav me-auto">

            {/* Language */}

            <li className="nav-item dropdown">

              <button
                className="btn nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                🌐 {t("language", "Langue")}
              </button>

              <ul className="dropdown-menu">

                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => i18n.changeLanguage("fr")}
                  >
                    Français
                  </button>
                </li>

                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => i18n.changeLanguage("en")}
                  >
                    English
                  </button>
                </li>

              </ul>
            </li>

            {/* Theme */}

            <li className="nav-item dropdown">

              <button
                className="btn nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                🎨 {t("theme", "Couleur")}
              </button>

              <ul className="dropdown-menu">

                <li>
                  <button className="dropdown-item" onClick={() => changeTheme("green")}>
                    Vert
                  </button>
                </li>

                <li>
                  <button className="dropdown-item" onClick={() => changeTheme("blue")}>
                    Bleu
                  </button>
                </li>

                <li>
                  <button className="dropdown-item" onClick={() => changeTheme("red")}>
                    Rouge
                  </button>
                </li>

                <li>
                  <button className="dropdown-item" onClick={() => changeTheme("yellow")}>
                    Jaune
                  </button>
                </li>

                <li>
                  <button className="dropdown-item" onClick={() => changeTheme("grey")}>
                    Gris
                  </button>
                </li>

              </ul>

            </li>

          </ul>

          {/* RIGHT MENU */}

          <ul className="navbar-nav ms-auto">

            {!user && (

              <li className="nav-item">

                <Link className="btn btn-primary" to="/login">
                  {t("login", "Connexion")}
                </Link>

              </li>

            )}

            {user && (

              <>
                <li className="nav-item">

                  <Link className="nav-link" to="/search">
                    {t("search", "Recherche")}
                  </Link>

                </li>

                <li className="nav-item d-flex align-items-center px-3">

                  <span className="small text-muted">
                    {user.email}
                  </span>

                </li>

                <li className="nav-item">

                  <button
                    className="btn btn-outline-danger"
                    onClick={logout}
                  >
                    {t("logout", "Déconnexion")}
                  </button>

                </li>
              </>
            )}

          </ul>

        </div>

      </div>

    </nav>
  );
}