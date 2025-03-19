/** @format */

const express = require('express');
const crypto = require('node:crypto');
const path = require('node:path');
const movies = require('./movies.json');
const { validateMovie, validatePartialMovie } = require('./schemas.js');
const { error } = require('node:console');

const PORT = process.env.PORT ?? 1234;

const app = express();
app.use(express.json());
app.disable('x-powered-by');

//Todos los recursos que sean MOVIES se identifica con /movies
app.get('/movies', (req, res) => {
  const { genre } = req.query;

  if (genre) {
    const filteredMovies = movies.filter((movie) =>
      movie['genre'].some((g) => g.toLowerCase() == genre.toLowerCase())
    );
    return res.json(filteredMovies);
  }

  res.json(movies);
});

app.get('/movies/:id', (req, res) => {
  const { id } = req.params;

  const movie = movies.find((movie) => movie['id'] == id);
  if (movie) return res.json(movie);

  res.status(404).json({ message: 'Movie not found' });
});

app.post('/movies', (req, res) => {
  const result = validateMovie(req.body);

  if (result.error) {
    //422 Unprocessable Entity
    return res.status(422).json({ error: JSON.parse(result.error.message) });
  }

  const newMovie = {
    id: crypto.randomUUID(),
    ...result.data,
  };
  //Esto no seria REST, porque estamo guardando
  //el estado de la aplicaciòn en memoria

  movies.push(newMovie);

  res.status(201).json(newMovie); //actualizar la caché del cliente
});

app.patch('/movies/:id', (req, res) => {
  const result = validatePartialMovie(req.body);

  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.message) });
  }

  const { id } = req.params;
  const movieIndex = movies.findIndex((movie) => movie['id'] == id);

  if (movieIndex == -1)
    return res.status(404).json({ message: 'Movie not found' });

  const updateMovie = {
    ...movies[movieIndex],
    ...result.data,
  };

  movies[movieIndex] = updateMovie;

  return res.json(updateMovie);
});

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
