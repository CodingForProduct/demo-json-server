var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();

var env = process.env.NODE_ENV || 'development'
// use dotenv during development
if(env === 'development') {
  require('dotenv').config();
}

server.use(middlewares);

// check if the url contains the secret as a query string
// ex: /users?secret=xxxx
function isAuthorized(req) {
  return req.query.secret === process.env.API_SECRET
}

server.use((req, res, next) => {
  // if request is authorized, go to next step
  if (isAuthorized(req)) {
    next()
  // if it is not authorized, show error
  } else {
    res.sendStatus(401)
  }
})

// prepend all routes with '/api'
// ex: '/api/users'
server.use('/api', router);

// start server
server.listen(process.env.PORT || 3001, () => {
  console.log('JSON Server is running')
});
