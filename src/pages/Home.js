import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { translate } from '../utils/translations';
import './Home.css';

function Home() {
  const { language } = useApp();
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              {translate(language, 'home.title')}
            </h1>
            <p className="hero-subtitle">
              {translate(language, 'home.subtitle')}
            </p>
            <div className="hero-buttons">
              <Link to="/artisans" className="btn btn-primary btn-large">
                {translate(language, 'home.findArtisan')}
              </Link>
              <Link to="/register" className="btn btn-outline btn-large">
                {translate(language, 'home.becomeArtisan')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">{translate(language, 'home.whyChoose')}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3 className="feature-title">{translate(language, 'home.feature1Title')}</h3>
              <p className="feature-description">
                {translate(language, 'home.feature1Desc')}
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3 className="feature-title">{translate(language, 'home.feature2Title')}</h3>
              <p className="feature-description">
                {translate(language, 'home.feature2Desc')}
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3 className="feature-title">{translate(language, 'home.feature3Title')}</h3>
              <p className="feature-description">
                {translate(language, 'home.feature3Desc')}
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3 className="feature-title">{translate(language, 'home.feature4Title')}</h3>
              <p className="feature-description">
                {translate(language, 'home.feature4Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <div className="mission-content">
            <h2 className="section-title">{translate(language, 'home.missionTitle')}</h2>
            <p className="mission-text">
              {translate(language, 'home.missionText')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">{translate(language, 'home.ctaTitle')}</h2>
            <p className="cta-subtitle">
              {translate(language, 'home.ctaSubtitle')}
            </p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary btn-large">
                {translate(language, 'home.createAccount')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
