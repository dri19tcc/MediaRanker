var Movie = require('../models/movie')

var IndexController = {
  getIndex: function (request, response) {
    var locals = {}

    locals.title = "Media Ranker"
    locals.blurb = "Ranking the Best of Everything!"

    var db = request.app.get('db');
    var movies = request.params.movies;
    var books = request.params.books;
    var albums = request.params.albums;
    //look in the db for the movie, book, or album

    locals.movie = db.movies.findSync({})
    locals.book = db.books.findSync({})
    locals.album = db.albums.findSync({})
    //return either the record or null

    response.render('index', locals);
  },

  getMovies: function (request, response) {
    Movie.findMovie(req.params.id, function(error, movie) {
      if(error) {
        var err = new Error("Movie does not exist")
        err.status = 404
        next(err)
      } else {
        response.render('movies', movie)
      }
    })
  }
}

module.exports = IndexController
