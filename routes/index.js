var express = require('express');
var router = express.Router();
var Controller = require('../controllers/index')

/* GET home page. */
router.get('/', Controller.getIndex)
router.get('/movies/:id', Controller.getMovies)

module.exports = router;
