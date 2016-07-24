var IndexController = {
  getIndex: function (request, response) {
    var locals = {}

    locals.title = "Media Ranker"
    locals.blurb = "Ranking the Best of Everything!"
    // locals.params = "stuff here"
    response.render('index', locals);
  },
}

module.exports = IndexController
