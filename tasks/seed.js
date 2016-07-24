var massive = require('massive')
var connectionString = "postgres://localhost/media_ranker"

var db = massive.connectSync({connectionString : connectionString})

var movies = require("../db/seeds/movies.json")
// var books = require("../db/seeds/books.json")
// var albums = require("../db/seeds/albums.json")

for (var movie of movies) {
  console.log(movie)
  db.movies.saveSync(movie)
}

// for (var book of books) {
//   console.log(book)
//   db.books.saveSync(book)
// }
//
// for (var album of albums) {
//   console.log(album)
//   db.albums.saveSync(album)
// }

console.log("seeding done!")
process.exit()
