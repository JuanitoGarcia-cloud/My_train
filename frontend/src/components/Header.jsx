import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const { i18n, t } = useTranslation();
  const { changeTheme } = useContext(ThemeContext);

  const changeLang = (lng) => i18n.changeLanguage(lng);

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      <Link className="navbar-brand" to="/">Train App</Link>

      <div className="ms-auto d-flex gap-2 align-items-center">
        <button
          className="btn btn-outline-light btn-sm"
          onClick={() => changeLang('fr')}
          aria-label="Français"
        >FR</button>

        <button
          className="btn btn-outline-light btn-sm"
          onClick={() => changeLang('en')}
          aria-label="English"
        >EN</button>

        <select onChange={(e) => changeTheme(e.target.value)}>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="grey">Grey</option>
        </select>

        {!user && (
          <Link className="btn btn-light btn-sm" to="/login">
            {t('login')}
          </Link>
        )}

        {user && (
          <>
            <Link className="btn btn-light btn-sm" to="/search">
              {t('search')}
            </Link>
            <span className="text-white small">
              {user.username} ({user.phone})
            </span>
            <button className="btn btn-danger btn-sm" onClick={logout}>
              {t('logout')}
            </button>
          </>
        )}
      </div>
    </header>
  );
}