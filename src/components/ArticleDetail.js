import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useArticles } from '../contexts/ArticleContext';
import './ArticleDetail.css';

const ArticleDetail = () => {
  const { id } = useParams();
  const { getArticleById } = useArticles();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundArticle = getArticleById(id);
    setArticle(foundArticle);
    setLoading(false);
  }, [id, getArticleById]);

  if (loading) {
    return (
      <div className="article-detail-container">
        <div className="loading">Chargement de l'article...</div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="article-detail-container">
        <div className="error">Article non trouvé</div>
        <Link to="/" className="back-btn">Retour à la liste</Link>
      </div>
    );
  }

  return (
    <div className="article-detail-container">
      <div className="article-header">
        <Link to="/" className="back-btn">← Retour à la liste</Link>
        <h1 className="article-title">{article.title}</h1>
        {article.image && (
          <img src={article.image} alt={article.title} className="article-detail-image" />
        )}
      </div>
      <div className="article-content">
        <p className="article-body">{article.content || article.description}</p>
        <div className="article-meta-detail">
          <span className="article-source">{article.source.name}</span>
          <span className="article-date">{new Date(article.publishedAt).toLocaleString('fr-FR')}</span>
        </div>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="external-link">Lire l'article complet</a>
      </div>
    </div>
  );
};

export default ArticleDetail; 