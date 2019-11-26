const express = require('express');
const ClassController = require('./controllers/ClassController');

const routes = express.Router();

routes.get('/classes', ClassController.index);
routes.post('/classes', ClassController.store);

module.exports = routes;