var IndexController = {
  getIndex: function (request, response) {
    var locals = {}

    locals.title = "Media Ranker"
    locals.blurb = "Ranking the Best of Everything!"

    var db = request.app.get('db');
    var movies = request.params.movies;
    //look in the db for the movie

    db.movies.find({}, function(err, result) {
      //return either the record or null
      locals.result = result;

      response.render('index', locals);
    })
  }
}

  module.exports = IndexController
