import React, { createContext, useState, useContext, useEffect } from 'react';

const ArticleContext = createContext();

export const useArticles = () => {
  const context = useContext(ArticleContext);
  if (!context) {
    throw new Error('useArticles must be used within an ArticleProvider');
  }
  return context;
};

export const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [localArticles, setLocalArticles] = useState([]);

  // Charger les articles locaux depuis localStorage au démarrage
  useEffect(() => {
    const savedArticles = localStorage.getItem('simpleBlogLocalArticles');
    if (savedArticles) {
      try {
        const parsedArticles = JSON.parse(savedArticles);
        console.log('Articles locaux chargés:', parsedArticles);
        setLocalArticles(parsedArticles);
      } catch (err) {
        console.error('Erreur lors du chargement des articles locaux:', err);
      }
    }
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://gnews.io/api/v4/top-headlines?token=0fcb7a938f1f5819a2d74f3a1159bcb2&lang=fr&max=10');
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des articles');
        }
        const data = await response.json();
        const articlesWithId = data.articles.map((article, idx) => ({
          ...article,
          id: `api_${idx + 1}` // Préfixe pour éviter les conflits
        }));
        console.log('Articles API chargés:', articlesWithId);
        setArticles(articlesWithId);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  // Sauvegarder les articles locaux dans localStorage à chaque modification
  useEffect(() => {
    if (localArticles.length > 0) {
      localStorage.setItem('simpleBlogLocalArticles', JSON.stringify(localArticles));
      console.log('Articles locaux sauvegardés:', localArticles);
    }
  }, [localArticles]);

  const addArticle = async (newArticle) => {
    const id = `local_${Date.now()}`; // Préfixe pour les articles locaux
    const article = {
      id,
      title: newArticle.title,
      description: newArticle.description,
      content: newArticle.content,
      image: newArticle.image || 'https://picsum.photos/seed/' + id + '/400/250',
      source: { name: 'Utilisateur' },
      publishedAt: new Date().toISOString(),
      url: '#',
    };
    console.log('Nouvel article ajouté:', article);
    setLocalArticles(prev => [article, ...prev]);
    return { success: true };
  };

  const getArticleById = (id) => {
    // Chercher d'abord dans les articles locaux, puis dans les articles API
    const localArticle = localArticles.find(article => article.id === id);
    if (localArticle) return localArticle;
    
    const apiArticle = articles.find(article => article.id === id);
    return apiArticle;
  };

  const allArticles = [...localArticles, ...articles];
  console.log('Tous les articles:', allArticles);

  const value = {
    articles: allArticles,
    loading,
    error,
    addArticle,
    getArticleById
  };

  return (
    <ArticleContext.Provider value={value}>
      {children}
    </ArticleContext.Provider>
  );
}; 