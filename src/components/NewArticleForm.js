import React, { useState } from 'react';
import { useArticles } from '../contexts/ArticleContext';
import './NewArticleForm.css';

const NewArticleForm = () => {
  const { addArticle } = useArticles();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    image: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Le titre est obligatoire';
    if (!formData.description.trim()) newErrors.description = 'La description est obligatoire';
    if (!formData.content.trim()) newErrors.content = 'Le contenu est obligatoire';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setSubmitMessage('Veuillez corriger les erreurs dans le formulaire');
      return;
    }
    setIsSubmitting(true);
    setSubmitMessage('');
    const result = await addArticle(formData);
    if (result.success) {
      setSubmitMessage('Article publié avec succès !');
      setFormData({ title: '', description: '', content: '', image: '' });
      setErrors({});
    } else {
      setSubmitMessage('Erreur lors de la publication');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="new-article-container">
      <h2>Publier un nouvel article</h2>
      <form onSubmit={handleSubmit} className="article-form">
        <div className="form-group">
          <label htmlFor="title">Titre *</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className={errors.title ? 'error' : ''} placeholder="Titre de l'article" />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} className={errors.description ? 'error' : ''} placeholder="Courte description" />
          {errors.description && <span className="error-message">{errors.description}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="content">Contenu *</label>
          <textarea id="content" name="content" value={formData.content} onChange={handleChange} className={errors.content ? 'error' : ''} placeholder="Contenu détaillé de l'article" rows="6" />
          {errors.content && <span className="error-message">{errors.content}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="image">URL de l'image (optionnel)</label>
          <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} placeholder="https://exemple.com/image.jpg" />
        </div>
        {submitMessage && (
          <div className={`submit-message ${submitMessage.includes('succès') ? 'success' : 'error'}`}>{submitMessage}</div>
        )}
        <button type="submit" className="submit-btn" disabled={isSubmitting}>{isSubmitting ? 'Publication...' : 'Publier'}</button>
      </form>
    </div>
  );
};

export default NewArticleForm; 