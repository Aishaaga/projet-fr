import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ user, onLogout }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-icon">🔗</span>
            <span className="logo-text">ArtisanLink</span>
          </Link>
          
          <nav className="nav">
            <Link to="/" className="nav-link">Accueil</Link>
            <Link to="/artisans" className="nav-link">Artisans</Link>
            
            {user ? (
              <>
                {user.type === 'artisan' && (
                  <Link to="/dashboard" className="nav-link">Mon Tableau de bord</Link>
                )}
                <div className="user-menu">
                  <span className="user-name">Bonjour, {user.name}</span>
                  <button onClick={onLogout} className="btn btn-outline btn-small">
                    Déconnexion
                  </button>
                </div>
              </>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" className="btn btn-outline btn-small">
                  Connexion
                </Link>
                <Link to="/register" className="btn btn-primary btn-small">
                  Inscription
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
