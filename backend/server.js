const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const contactRoute = require('./routes/contact');

const app = express(); // ✅ FIRST create app

// ✅ SIMPLE CORS (best for now)
app.use(cors());

// OR (for production strict mode)
/*
app.use(cors({
  origin: 'https://personal-portfolio-one-dusky-17.vercel.app',
  methods: ['GET', 'POST'],
  credentials: true
}));
*/

// Middleware
app.use(express.json());

// Debug logs
app.use((req, res, next) => {
  console.log('Incoming request:', req.method, req.originalUrl);
  next();
});

const port = process.env.PORT || 5000;

// ✅ MongoDB Connection
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB Connected ✅'))
  .catch(err => console.error('MongoDB error:', err));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

app.use('/api/contact', contactRoute);

// Serve frontend (optional)
const buildPath = path.resolve(__dirname, '../frontend/build');
app.use(express.static(buildPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;