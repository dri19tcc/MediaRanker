var IndexController = {
  getIndex: function (request, response) {
    var locals = {}

    locals.title = "Media Ranker"
    locals.blurb = "Ranking the Best of Everything!"
    // locals.movies = 

    response.render('index', locals);
  },
}

module.exports = IndexController
