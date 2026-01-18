import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    type: 'client'
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.email || !formData.password) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    // Simuler une connexion (en production, appeler une API)
    const user = {
      id: Date.now(),
      email: formData.email,
      name: formData.email.split('@')[0],
      type: formData.type
    };

    onLogin(user);
    navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="container">
        <div className="auth-container">
          <div className="auth-header">
            <h1>Connexion</h1>
            <p>Connectez-vous à votre compte DariService</p>
          </div>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="input-group">
              <label htmlFor="type">Je suis</label>
              <select 
                id="type" 
                name="type" 
                value={formData.type}
                onChange={handleChange}
              >
                <option value="client">Un particulier</option>
                <option value="artisan">Un artisan</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-full">
              Se connecter
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Pas encore de compte ?{' '}
              <Link to="/register">Créez-en un ici</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
