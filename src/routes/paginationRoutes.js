const paginationRoute = require('express').Router();

const paginationControllers = require('../controllers/paginationControllers');
const checkEntries = require('../validations/checkEntries');

paginationRoute.get('/paginacao', checkEntries, paginationControllers.setPagination);

module.exports = paginationRoute;
