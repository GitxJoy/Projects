const fetch = require('node-fetch');
const _ = require('lodash');

async function blogAnalyticsMiddleware(req, res, next) {
  try {
    const response = await fetch('THIRD_PARTY_BLOG_API_URL'); // Replace with the actual API URL
    const data = await response.json();

    // Analyze data and calculate statistics
    const totalPosts = data.length;
    const totalLikes = _.sumBy(data, 'likes');
    const averageLikesPerPost = totalLikes / totalPosts;

    // Attach analytics to the request object
    req.blogAnalytics = {
      totalPosts,
      totalLikes,
      averageLikesPerPost,
    };

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch and analyze blog data.' });
  }
}

module.exports = blogAnalyticsMiddleware;
