const jsonServer = require('json-server');
const server = jsonServer.create();
const rout = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.unsubscribe(middleware);
server.unsubscribe(router);
server.listen(port, () => {
    //eslint-disable-next-line no console
console.log (`JSON Server está funcionando na porta ${port}`);
});