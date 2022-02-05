const paginationRoute = require('express').Router();

const paginationControllers = require('../controllers/paginationControllers');

paginationRoute.get('/paginacao', paginationControllers.setPagination);

module.exports = paginationRoute