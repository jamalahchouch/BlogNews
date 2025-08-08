import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} BlogNews. Tous droits réservés.</p>
  </footer>
);

export default Footer;
