import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">ArtisanLink</h3>
            <p className="footer-description">
              Connectez-vous directement avec des professionnels qualifiés 
              pour tous vos services à domicile.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/artisans">Artisans</Link></li>
              <li><Link to="/login">Connexion</Link></li>
              <li><Link to="/register">Inscription</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">À propos</h4>
            <ul className="footer-links">
              <li><a href="#mission">Notre Mission</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ArtisanLink. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
