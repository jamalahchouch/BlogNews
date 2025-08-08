import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => (
  <div className="home-container">
    <div className="home-hero">
      <h1>Bienvenue sur Blog News</h1>
      <p>Découvrez les dernières actualités du monde entier, sélectionnées pour vous.</p>
      <Link to="/news" className="home-cta">Voir les actualités</Link>
    </div>
    <div className="home-features">
      <div className="feature">
        <h3>Actualités en temps réel</h3>
        <p>Les articles sont mis à jour en continu grâce à l'API GNews.</p>
      </div>
      <div className="feature">
        <h3>Design moderne</h3>
        <p>Une interface claire, responsive et agréable à utiliser sur tous vos appareils.</p>
      </div>
      <div className="feature">
        <h3>Navigation rapide</h3>
        <p>Accédez facilement aux détails, sources et partagez les articles qui vous intéressent.</p>
      </div>
    </div>
    <div className="home-about-section">
      <div className="about-image">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="À propos" />
      </div>
      <div className="about-text">
        <h2>À propos de BlogNews</h2>
        <p>Notre mission est de vous offrir une expérience d'information simple, rapide et agréable. BlogNews agrège les meilleures actualités du monde entier et vous permet de partager vos propres articles pour enrichir la communauté.</p>
      </div>
    </div>
    <div className="home-join-section">
      <div className="join-text">
        <h2>Rejoignez la communauté !</h2>
        <p>Publiez vos propres articles, partagez vos opinions et participez à la vie du blog. Blog News est ouvert à tous !</p>
        <Link to="/new" className="join-cta">Publier un article</Link>
      </div>
      <div className="join-image">
        <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="Rejoignez-nous" />
      </div>
    </div>
  </div>
);

export default Home; 