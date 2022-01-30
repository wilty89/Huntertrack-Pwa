const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {  
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://huntertrack.com.do/huntertrack/',
            changeOrigin: true,
        })
    );
};