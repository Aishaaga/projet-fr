import React, { useState, useEffect } from 'react';
import './ArtisanDashboard.css';

function ArtisanDashboard({ user, artisans, onUpdateArtisan }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    profession: user?.profession || '',
    location: user?.location || '',
    phone: user?.phone || '',
    description: '',
    services: [],
    newService: ''
  });

  useEffect(() => {
    // Charger les données de l'artisan depuis la liste des artisans
    const artisanProfile = artisans.find(a => a.email === user?.email);
    if (artisanProfile) {
      setFormData({
        name: artisanProfile.name,
        profession: artisanProfile.profession,
        location: artisanProfile.location,
        phone: artisanProfile.phone || '',
        description: artisanProfile.description,
        services: [...artisanProfile.services],
        newService: ''
      });
    } else {
      // Si l'artisan n'existe pas encore dans la liste, utiliser les données utilisateur
      setFormData({
        name: user?.name || '',
        profession: user?.profession || '',
        location: user?.location || '',
        phone: user?.phone || '',
        description: '',
        services: [],
        newService: ''
      });
    }
  }, [user, artisans]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAddService = () => {
    if (formData.newService.trim()) {
      setFormData({
        ...formData,
        services: [...formData.services, formData.newService.trim()],
        newService: ''
      });
    }
  };

  const handleRemoveService = (index) => {
    setFormData({
      ...formData,
      services: formData.services.filter((_, i) => i !== index)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const artisanProfile = artisans.find(a => a.email === user?.email);
    const artisanData = {
      id: artisanProfile?.id || Date.now(),
      name: formData.name,
      profession: formData.profession,
      location: formData.location,
      phone: formData.phone,
      email: user.email,
      description: formData.description,
      services: formData.services,
      rating: artisanProfile?.rating || 4.5,
      reviews: artisanProfile?.reviews || 0,
      image: artisanProfile?.image || `https://via.placeholder.com/300x300?text=${formData.name}`
    };

    if (artisanProfile) {
      onUpdateArtisan(artisanData);
    } else {
      // Ajouter un nouvel artisan
      const updatedArtisans = [...artisans, artisanData];
      localStorage.setItem('artisans', JSON.stringify(updatedArtisans));
    }

    setIsEditing(false);
    alert('Profil mis à jour avec succès !');
  };

  return (
    <div className="dashboard-page">
      <div className="container">
        <div className="dashboard-header">
          <h1>Mon Tableau de bord</h1>
          <p>Gérez votre profil et vos informations professionnelles</p>
        </div>

        <div className="dashboard-content">
          {!isEditing ? (
            <div className="profile-view">
              <div className="profile-card">
                <div className="profile-header-section">
                  <div className="profile-avatar">
                    <span>{formData.name.charAt(0).toUpperCase()}</span>
                  </div>
                  <div>
                    <h2>{formData.name}</h2>
                    <p className="profile-profession">{formData.profession}</p>
                    <p className="profile-location">📍 {formData.location}</p>
                  </div>
                </div>

                <div className="profile-details">
                  <div className="detail-section">
                    <h3>Description</h3>
                    <p>{formData.description || 'Aucune description disponible'}</p>
                  </div>

                  <div className="detail-section">
                    <h3>Services proposés</h3>
                    <div className="services-list">
                      {formData.services.length > 0 ? (
                        formData.services.map((service, index) => (
                          <span key={index} className="service-tag">
                            {service}
                          </span>
                        ))
                      ) : (
                        <p>Aucun service ajouté</p>
                      )}
                    </div>
                  </div>

                  <div className="detail-section">
                    <h3>Coordonnées</h3>
                    <p><strong>Email :</strong> {user?.email}</p>
                    <p><strong>Téléphone :</strong> {formData.phone || 'Non renseigné'}</p>
                  </div>
                </div>

                <button 
                  onClick={() => setIsEditing(true)}
                  className="btn btn-primary"
                >
                  Modifier mon profil
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="profile-form">
              <div className="form-section">
                <h2>Informations personnelles</h2>
                
                <div className="input-group">
                  <label htmlFor="name">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="profession">Profession</label>
                  <input
                    type="text"
                    id="profession"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    required
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
                    required
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
              </div>

              <div className="form-section">
                <h2>Description professionnelle</h2>
                
                <div className="input-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Décrivez votre expérience, vos spécialités..."
                    rows="5"
                  />
                </div>
              </div>

              <div className="form-section">
                <h2>Services proposés</h2>
                
                <div className="services-input">
                  <div className="input-group">
                    <label htmlFor="newService">Ajouter un service</label>
                    <div className="service-input-group">
                      <input
                        type="text"
                        id="newService"
                        name="newService"
                        value={formData.newService}
                        onChange={handleChange}
                        placeholder="Ex: Réparation fuite, Installation sanitaire..."
                      />
                      <button
                        type="button"
                        onClick={handleAddService}
                        className="btn btn-secondary"
                      >
                        Ajouter
                      </button>
                    </div>
                  </div>

                  <div className="services-list">
                    {formData.services.map((service, index) => (
                      <span key={index} className="service-tag editable">
                        {service}
                        <button
                          type="button"
                          onClick={() => handleRemoveService(index)}
                          className="remove-service"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="btn btn-secondary"
                >
                  Annuler
                </button>
                <button type="submit" className="btn btn-primary">
                  Enregistrer les modifications
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ArtisanDashboard;
