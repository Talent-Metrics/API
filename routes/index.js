const main = require('../server/controllers/main.controller');

module.exports = (app) => {
  app.get('/', main);
};