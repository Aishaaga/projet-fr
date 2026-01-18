import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ArtisansList.css';

function ArtisansList({ artisans }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProfession, setSelectedProfession] = useState('');

  const professions = [...new Set(artisans.map(a => a.profession))];

  const filteredArtisans = artisans.filter(artisan => {
    const matchesSearch = artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artisan.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artisan.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProfession = !selectedProfession || artisan.profession === selectedProfession;
    return matchesSearch && matchesProfession;
  });

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star">⭐</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="star">⭐</span>);
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(<span key={i} className="star star-empty">☆</span>);
    }
    return stars;
  };

  return (
    <div className="artisans-list-page">
      <div className="container">
        <div className="page-header">
          <h1>Trouvez votre artisan</h1>
          <p>Découvrez des professionnels qualifiés près de chez vous</p>
        </div>

        <div className="filters">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Rechercher par nom, profession ou localisation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="profession-filter">
            <select
              value={selectedProfession}
              onChange={(e) => setSelectedProfession(e.target.value)}
              className="filter-select"
            >
              <option value="">Toutes les professions</option>
              {professions.map(profession => (
                <option key={profession} value={profession}>{profession}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="results-info">
          <p>
            {filteredArtisans.length} artisan{filteredArtisans.length > 1 ? 's' : ''} trouvé{filteredArtisans.length > 1 ? 's' : ''}
          </p>
        </div>

        <div className="artisans-grid">
          {filteredArtisans.length === 0 ? (
            <div className="no-results">
              <p>Aucun artisan trouvé. Essayez de modifier vos critères de recherche.</p>
            </div>
          ) : (
            filteredArtisans.map(artisan => (
              <Link 
                key={artisan.id} 
                to={`/artisan/${artisan.id}`}
                className="artisan-card"
              >
                <div className="artisan-image">
                  <img src={artisan.image} alt={artisan.name} />
                </div>
                <div className="artisan-info">
                  <h3 className="artisan-name">{artisan.name}</h3>
                  <p className="artisan-profession">{artisan.profession}</p>
                  <p className="artisan-location">📍 {artisan.location}</p>
                  <div className="artisan-rating">
                    <div className="star-rating">
                      {renderStars(artisan.rating)}
                    </div>
                    <span className="rating-text">
                      {artisan.rating} ({artisan.reviews} avis)
                    </span>
                  </div>
                  <p className="artisan-description">
                    {artisan.description.substring(0, 120)}...
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ArtisansList;
