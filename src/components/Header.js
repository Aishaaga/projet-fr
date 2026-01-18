import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { translate } from '../utils/translations';
import './Header.css';

function Header({ user, onLogout }) {
  const { language, theme, toggleTheme, changeLanguage } = useApp();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-icon">🔗</span>
            <span className="logo-text">DariService</span>
          </Link>
          
          <nav className="nav">
            <Link to="/" className="nav-link">{translate(language, 'header.home')}</Link>
            <Link to="/artisans" className="nav-link">{translate(language, 'header.artisans')}</Link>
            
            {user ? (
              <>
                {user.type === 'artisan' && (
                  <Link to="/dashboard" className="nav-link">{translate(language, 'header.dashboard')}</Link>
                )}
                <div className="user-menu">
                  <span className="user-name">{translate(language, 'header.hello', { name: user.name })}</span>
                  <button onClick={onLogout} className="btn btn-outline btn-small">
                    {translate(language, 'header.logout')}
                  </button>
                </div>
              </>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" className="btn btn-outline btn-small">
                  {translate(language, 'header.login')}
                </Link>
                <Link to="/register" className="btn btn-primary btn-small">
                  {translate(language, 'header.register')}
                </Link>
              </div>
            )}

            <div className="settings-menu">
              <div className="language-selector">
                <select 
                  value={language} 
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="language-select"
                >
                  <option value="fr">🇫🇷 FR</option>
                  <option value="en">🇬🇧 EN</option>
                </select>
              </div>
              
              <button 
                onClick={toggleTheme} 
                className="theme-toggle"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
