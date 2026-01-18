import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Trouvez l'artisan parfait pour vos projets à domicile
            </h1>
            <p className="hero-subtitle">
              ArtisanLink connecte directement les particuliers ayant besoin de services 
              à domicile avec des professionnels qualifiés. Simplifiez votre recherche 
              d'artisans et obtenez des devis rapidement.
            </p>
            <div className="hero-buttons">
              <Link to="/artisans" className="btn btn-primary btn-large">
                Trouver un artisan
              </Link>
              <Link to="/register" className="btn btn-outline btn-large">
                Devenir artisan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Pourquoi choisir ArtisanLink ?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3 className="feature-title">Recherche simplifiée</h3>
              <p className="feature-description">
                Trouvez rapidement l'artisan qui correspond à vos besoins grâce 
                à notre système de recherche et de filtres avancés.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3 className="feature-title">Artisans vérifiés</h3>
              <p className="feature-description">
                Tous nos artisans sont qualifiés et notés par la communauté. 
                Consultez les avis et expériences d'autres clients.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3 className="feature-title">Opportunités régulières</h3>
              <p className="feature-description">
                En tant qu'artisan, recevez des nouvelles opportunités de projets 
                régulièrement et développez votre activité.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3 className="feature-title">Communication directe</h3>
              <p className="feature-description">
                Contactez directement les artisans, échangez facilement et obtenez 
                des devis personnalisés en quelques clics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <div className="mission-content">
            <h2 className="section-title">Notre Mission</h2>
            <p className="mission-text">
              ArtisanLink est une plateforme web innovante qui connecte directement 
              les particuliers ayant besoin de services à domicile avec des professionnels 
              qualifiés. Notre mission est de simplifier la recherche d'artisans tout 
              en offrant aux professionnels une source régulière de nouvelles opportunités.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Prêt à commencer ?</h2>
            <p className="cta-subtitle">
              Rejoignez ArtisanLink dès aujourd'hui et découvrez une nouvelle façon 
              de trouver ou proposer des services à domicile.
            </p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary btn-large">
                Créer un compte
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
