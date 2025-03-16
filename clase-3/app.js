/** @format */

const express = require('express');
const path = require('path');
const movies = require('./movies.json');

const PORT = process.env.PORT ?? 1234;

const app = express();
app.disable('x-powered-by');

app.get('/', (req, res) => {
  res.json({ message: 'hola mundo' });
});

//Todos los recursos que sean MOVIES se identifica con /movies
app.get('/movies', (req, res) => {
  const { genre } = req.query;

  console.log(req.query);

  res.json(movies);
});

app.get('/movies/:imdbID', (req, res) => {
  const { id } = req.params;

  const movie = movies.find((movie) => movie.id == id);
  if (movie) return res.json(movie);

  res.status(404).json({ message: 'Movie not found' });
});

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
