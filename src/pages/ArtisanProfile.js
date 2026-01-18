import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ArtisanProfile.css';

function ArtisanProfile({ artisans, user }) {
  const { id } = useParams();
  const artisan = artisans.find(a => a.id === parseInt(id));

  if (!artisan) {
    return (
      <div className="artisan-profile-page">
        <div className="container">
          <div className="not-found">
            <h2>Artisan non trouvé</h2>
            <Link to="/artisans" className="btn btn-primary">
              Retour à la liste
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star">⭐</span>);
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(<span key={i} className="star star-empty">☆</span>);
    }
    return stars;
  };

  return (
    <div className="artisan-profile-page">
      <div className="container">
        <Link to="/artisans" className="back-link">← Retour à la liste</Link>

        <div className="profile-header">
          <div className="profile-image-section">
            <img src={artisan.image} alt={artisan.name} className="profile-image" />
          </div>
          <div className="profile-info-section">
            <h1 className="profile-name">{artisan.name}</h1>
            <p className="profile-profession">{artisan.profession}</p>
            <p className="profile-location">📍 {artisan.location}</p>
            <div className="profile-rating">
              <div className="star-rating">
                {renderStars(artisan.rating)}
              </div>
              <span className="rating-value">{artisan.rating}</span>
              <span className="reviews-count">({artisan.reviews} avis)</span>
            </div>
          </div>
        </div>

        <div className="profile-content">
          <div className="profile-main">
            <section className="profile-section">
              <h2>À propos</h2>
              <p className="profile-description">{artisan.description}</p>
            </section>

            <section className="profile-section">
              <h2>Services proposés</h2>
              <div className="services-list">
                {artisan.services.map((service, index) => (
                  <span key={index} className="service-tag">
                    {service}
                  </span>
                ))}
              </div>
            </section>

            <section className="profile-section">
              <h2>Coordonnées</h2>
              <div className="contact-info">
                <p>
                  <strong>Email :</strong>{' '}
                  <a href={`mailto:${artisan.email}`}>{artisan.email}</a>
                </p>
                <p>
                  <strong>Téléphone :</strong>{' '}
                  <a href={`tel:${artisan.phone}`}>{artisan.phone}</a>
                </p>
              </div>
            </section>
          </div>

          <div className="profile-sidebar">
            <div className="contact-card">
              <h3>Contacter cet artisan</h3>
              <p>Vous avez un projet ? Contactez directement cet artisan pour discuter de vos besoins et obtenir un devis.</p>
              <div className="contact-buttons">
                <a href={`mailto:${artisan.email}`} className="btn btn-primary btn-full">
                  Envoyer un email
                </a>
                <a href={`tel:${artisan.phone}`} className="btn btn-outline btn-full">
                  Appeler
                </a>
              </div>
            </div>

            {user && user.type === 'artisan' && (
              <Link to="/dashboard" className="btn btn-secondary btn-full">
                Gérer mon profil
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtisanProfile;
