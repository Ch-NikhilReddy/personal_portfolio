// In production, REACT_APP_API_URL should be set to the Render backend URL
// e.g., https://personal-portfolio-j4w2.onrender.com/api
// For local development, it falls back to localhost:5000
const API_URL =
  process.env.REACT_APP_API_URL ||
  (window.location.hostname === 'localhost'
    ? 'http://localhost:5000/api'
    : 'https://personal-portfolio-j4w2.onrender.com/api');

export default API_URL;
