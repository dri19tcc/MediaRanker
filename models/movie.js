var app = require('../app')
var db = app.get('db')

var Movie = function (movie) {
  this.id = movie.id
  this.title = movie.title
  this.director = movie.director
  this.ranked = movie.ranked
  this.blurb = movie.blurb
}

// var Book = function (book) {
//   this.id = book.id
//   this.title = book.title
//   this.author = book.director
//   this.ranked = book.ranked
//   this.blurb = book.blurb
// }
//
// var Album = function (album) {
//   this.id = album.id
//   this.title = album.title
//   this.artist = album.director
//   this.ranked = album.ranked
//   this.blurb = album.blurb
// }

Movie.findMovie = function(id, callback) {
  db.movies.findOne({id: id}, function(error, movie) {
    if(error || !movie) {
      callback(new Error("movie not found"), undefined)
    } else {
      callback(null, new Movie(movie))
    }
  })
}
