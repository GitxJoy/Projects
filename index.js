const express = require('express');
const blogAnalyticsMiddleware = require('./middleware');

const app = express();
const PORT = 3000;

app.use(blogAnalyticsMiddleware);

// Blog analytics endpoint
app.get('/analytics', (req, res) => {
  res.json(req.blogAnalytics);
});

// Blog search endpoint
app.get('/search', (req, res) => {
  const query = req.query.q; // Get search query from request query parameters
  // Implement blog search logic using the query parameter
  // Return search results as JSON response
  res.json({ results: `Search results for query: ${query}` });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
