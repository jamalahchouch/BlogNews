// Configuration EmailJS
// Remplacez ces valeurs par vos propres clés EmailJS

export const EMAILJS_CONFIG = {
  PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'W04wnX18gff2dAVmK',
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_5pbj5a7',
  TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_xpvhd7c',
};

// Template de message pour EmailJS
export const EMAIL_TEMPLATE = {
  to_name: 'BlogNews',
  from_name: '{{from_name}}',
  from_email: '{{from_email}}',
  message: '{{message}}',
}; 