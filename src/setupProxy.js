const proxy = require('http-proxy-middleware');
//const utils = require('./utilities/util');

const {
  REACT_APP_DEV_MODE,
  REACT_APP_DEV_SERVER_ENDPOINT,
  REACT_APP_PROD_SERVER_ENDPOINT
} = process.env;

const dev_mode = JSON.stringify(REACT_APP_DEV_MODE) === JSON.stringify('true');

const serverEndPoint = dev_mode
  ? REACT_APP_DEV_SERVER_ENDPOINT
  : REACT_APP_PROD_SERVER_ENDPOINT;

//console.log(`/n/n./n/n./n/n./n/n./n/n./n/n.Server endpoint: ${serverEndPoint}`);

//const serverEndPoint = getServerEndPoint();
module.exports = function(app) {
  app.use(
    proxy('/dnbc/auth/google', {
      //target: 'http://localhost:5000'
      target: serverEndPoint
    })
  );

  app.use(
    proxy('/dnbc/auth/current_user', {
      //target: 'http://localhost:5000'
      target: serverEndPoint
    })
  );

  app.use(
    proxy('/dnbc/user/*', {
      //target: 'http://localhost:5000'
      target: serverEndPoint
    })
  );
};
