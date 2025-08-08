import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs-config';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Initialiser EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: 'BlogNews Team',
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitMessage('Message envoyé avec succès ! Nous vous répondrons rapidement.');
        setForm({ name: '', email: '', message: '' });
        setSubmitted(true);
      } else {
        setSubmitMessage('Erreur lors de l\'envoi du message. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      setSubmitMessage('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setSubmitMessage('');
  };

  return (
    <div className="contact-container">
      <h2>Contactez-nous</h2>
      
      {submitted ? (
        <div className="contact-success">
          <p>{submitMessage}</p>
          <button onClick={resetForm} className="contact-btn">Envoyer un autre message</button>
        </div>
      ) : (
        <>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={form.name} 
                onChange={handleChange} 
                required 
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={form.email} 
                onChange={handleChange} 
                required 
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea 
                id="message" 
                name="message" 
                value={form.message} 
                onChange={handleChange} 
                required 
                rows="5" 
                disabled={isSubmitting}
              />
            </div>
            
            {submitMessage && (
              <div className={`submit-message ${submitMessage.includes('succès') ? 'success' : 'error'}`}>
                {submitMessage}
              </div>
            )}
            
            <button 
              type="submit" 
              className="contact-btn" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </form>
          
          <div className="contact-info">
            <h3>Informations de contact</h3>
            <p>📧 Email: contact@simpleblog.com</p>
            <p>📱 Téléphone: +33 1 23 45 67 89</p>
            <p>📍 Adresse: 123 Rue de la Tech, 75001 Paris</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Contact; 