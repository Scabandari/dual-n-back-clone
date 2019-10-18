const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    proxy('/dnbc/auth/google', {
      target: 'http://localhost:5000'
    })
  );

  app.use(
    proxy('/dnbc/auth/current_user', {
      target: 'http://localhost:5000'
    })
  );
};

