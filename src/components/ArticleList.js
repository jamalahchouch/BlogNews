import React from 'react';
import { Link } from 'react-router-dom';
import { useArticles } from '../contexts/ArticleContext';
import './ArticleList.css';

const ArticleList = () => {
  const { articles, loading, error } = useArticles();

  // Log pour déboguer
  console.log('ArticleList - Nombre total d\'articles:', articles.length);
  const localArticles = articles.filter(article => article.id.startsWith('local_'));
  const apiArticles = articles.filter(article => article.id.startsWith('api_'));
  console.log('Articles locaux:', localArticles.length, 'Articles API:', apiArticles.length);

  const checkLocalStorage = () => {
    const saved = localStorage.getItem('simpleBlogLocalArticles');
    console.log('localStorage contenu:', saved);
    if (saved) {
      const parsed = JSON.parse(saved);
      console.log('Articles dans localStorage:', parsed);
      alert(`Articles dans localStorage: ${parsed.length}`);
    } else {
      alert('Aucun article dans localStorage');
    }
  };

  if (loading) {
    return (
      <div className="article-list-container">
        <h2>Actualités</h2>
        <div className="loading">Chargement des articles...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="article-list-container">
        <h2>Actualités</h2>
        <div className="error">Erreur: {error}</div>
      </div>
    );
  }

  return (
    <div className="article-list-container">
      <h2>Actualités</h2>
      <div className="articles-info">
        <p>Articles locaux: {localArticles.length} | Articles API: {apiArticles.length}</p>
        <button onClick={checkLocalStorage} className="debug-btn">Vérifier localStorage</button>
      </div>
      {articles.length === 0 ? (
        <p className="no-articles">Aucune actualité disponible</p>
      ) : (
        <div className="articles-grid">
          {articles.map((article) => (
            <div key={article.id} className="article-card">
              <img src={article.image} alt={article.title} className="article-image" />
              <h3 className="article-title">{article.title}</h3>
              <p className="article-excerpt">{article.description}</p>
              <div className="article-meta">
                <span className="article-source">{article.source.name}</span>
                <span className="article-date">{new Date(article.publishedAt).toLocaleDateString('fr-FR')}</span>
              </div>
              <div className="article-actions">
                <Link to={`/article/${article.id}`} className="view-more-btn">Voir plus</Link>
                {article.url !== '#' && (
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="external-link">Source</a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticleList; 