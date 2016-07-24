DROP TABLE IF EXISTS movies;
CREATE TABLE movies(
  id serial PRIMARY KEY,
  title text,
  director text,
  ranked int,
  blurb text
);

DROP TABLE IF EXISTS books;
CREATE TABLE books(
  id serial PRIMARY KEY,
  title text,
  author text,
  ranked int,
  blurb text
);

DROP TABLE IF EXISTS albums;
CREATE TABLE albums(
  id serial PRIMARY KEY,
  title text,
  artist text,
  ranked int,
  blurb text
);
