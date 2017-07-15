var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();

server.use(middlewares);

// prepend all routes with '/api'
// for example '/api/users'
server.use('/api', router);

// start server
server.listen(process.env.PORT || 3001, () => {
  console.log('JSON Server is running')
});
