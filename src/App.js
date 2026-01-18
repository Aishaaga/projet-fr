import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ArtisansList from './pages/ArtisansList';
import ArtisanProfile from './pages/ArtisanProfile';
import ArtisanDashboard from './pages/ArtisanDashboard';
// Import des images
import artisan1Image from './assets/pf 1.jpg';
import artisan2Image from './assets/pf 2.jpg';
import artisan3Image from './assets/pf 3.jpg';

function App() {
  const [user, setUser] = useState(null);
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    // Charger les données utilisateur depuis localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    // Charger les données d'artisans (simulation)
    const savedArtisans = localStorage.getItem('artisans');
    if (savedArtisans) {
      setArtisans(JSON.parse(savedArtisans));
    } else {
      // Données initiales d'exemple
      const initialArtisans = [
        {
          id: 1,
          name: 'Mohammed Najim',
          profession: 'Plombier',
          rating: 4.8,
          reviews: 124,
          location: 'Agadir, 85000',
          description: 'Plombier expérimenté avec plus de 15 ans d\'expérience. Spécialisé en rénovation et dépannage d\'urgence.',
          services: ['Réparation fuite', 'Installation sanitaire', 'Chauffage', 'Dépannage urgence'],
          email: 'mohammed.najim@email.com',
          phone: '06 12 34 56 78',
          image: artisan1Image
        },
        {
          id: 2,
          name: 'Ahmed Benali',
          profession: 'Électricien',
          rating: 4.9,
          reviews: 89,
          location: 'Agadir, 85000',
          description: 'Électricien certifié, disponible 7j/7 pour tous vos besoins électriques.',
          services: ['Installation électrique', 'Mise aux normes', 'Dépannage', 'Éclairage'],
          email: 'ahmed.benali@email.com',
          phone: '06 98 76 54 32',
          image: artisan2Image
        },
        {
          id: 3,
          name: 'Pierre Leroy',
          profession: 'Menuisier',
          rating: 4.7,
          reviews: 156,
          location: 'Agadir, 85000',
          description: 'Menuisier artisan depuis 20 ans, création sur mesure et rénovation.',
          services: ['Meubles sur mesure', 'Parquet', 'Fenêtres', 'Armoires'],
          email: 'pierre.leroy@email.com',
          phone: '06 55 44 33 22',
          image: artisan3Image
        },
        {
          id: 4,
          name: 'Leila Karim',
          profession: 'Peintre',
          rating: 4.6,
          reviews: 203,
          location: 'Agadir, 85000',
          description: 'Peintre décoratrice, travail soigné et respect des délais.',
          services: ['Peinture intérieure', 'Peinture extérieure', 'Papier peint', 'Finition'],
          email: 'leila.karim@email.com',
          phone: '06 77 88 99 00',
          image: artisan3Image
        }
      ];
      setArtisans(initialArtisans);
      localStorage.setItem('artisans', JSON.stringify(initialArtisans));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const handleRegister = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const updateArtisan = (updatedArtisan) => {
    const updatedArtisans = artisans.map(a => 
      a.id === updatedArtisan.id ? updatedArtisan : a
    );
    setArtisans(updatedArtisans);
    localStorage.setItem('artisans', JSON.stringify(updatedArtisans));
  };

  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Header user={user} onLogout={handleLogout} />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route 
                path="/login" 
                element={user ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} 
              />
              <Route 
                path="/register" 
                element={user ? <Navigate to="/" /> : <Register onRegister={handleRegister} />} 
              />
              <Route 
                path="/artisans" 
                element={<ArtisansList artisans={artisans} />} 
              />
              <Route 
                path="/artisan/:id" 
                element={<ArtisanProfile artisans={artisans} user={user} />} 
              />
              <Route 
                path="/dashboard" 
                element={
                  user && user.type === 'artisan' ? (
                    <ArtisanDashboard 
                      user={user} 
                      artisans={artisans} 
                      onUpdateArtisan={updateArtisan}
                    />
                  ) : (
                    <Navigate to="/login" />
                  )
                } 
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
