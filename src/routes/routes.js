const router = require('express').Router();
const paginationRoutes = require('./paginationRoutes')

router.use(paginationRoutes);

module.exports = router;