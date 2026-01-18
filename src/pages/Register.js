import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

function Register({ onRegister }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    type: 'client',
    profession: '',
    location: '',
    phone: ''
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
    
    // Validation
    if (!formData.name || !formData.email || !formData.password) {
      setError('Veuillez remplir tous les champs obligatoires');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    if (formData.type === 'artisan' && (!formData.profession || !formData.location)) {
      setError('Veuillez remplir tous les champs pour les artisans');
      return;
    }

    // Créer un utilisateur (en production, appeler une API)
    const user = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      type: formData.type,
      profession: formData.profession || null,
      location: formData.location || null,
      phone: formData.phone || null
    };

    onRegister(user);
    navigate(formData.type === 'artisan' ? '/dashboard' : '/');
  };

  return (
    <div className="auth-page">
      <div className="container">
        <div className="auth-container">
          <div className="auth-header">
            <h1>Inscription</h1>
            <p>Créez votre compte ArtisanLink</p>
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
              <label htmlFor="name">
                {formData.type === 'artisan' ? 'Nom complet' : 'Nom'}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
              />
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

            {formData.type === 'artisan' && (
              <>
                <div className="input-group">
                  <label htmlFor="profession">Profession</label>
                  <input
                    type="text"
                    id="profession"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    placeholder="Ex: Plombier, Électricien, Menuisier..."
                    required={formData.type === 'artisan'}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="location">Localisation</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Ex: Paris, 75001"
                    required={formData.type === 'artisan'}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </>
            )}

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

            <div className="input-group">
              <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-full">
              S'inscrire
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Déjà un compte ?{' '}
              <Link to="/login">Connectez-vous ici</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
