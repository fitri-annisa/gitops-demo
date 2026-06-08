const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Health check — Kubernetes will call this to know if your pod is alive
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Main route
app.get('/', (req, res) => {
  res.json({
    message: 'GitOps Demo App',
    version: process.env.APP_VERSION || '1.0.4',
    environment: process.env.NODE_ENV || 'development',
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});