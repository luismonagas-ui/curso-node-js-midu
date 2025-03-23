/** @format */

import { Router } from 'express';
import { randomUUID } from 'node:crypto';
import { readJSON } from '../utils/utils.js';
import { validateMovie, validatePartialMovie } from '../schemas/movies.js';

export const moviesRouter = Router();

const movies = readJSON('./data/movies.json');

moviesRouter.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');

  const { genre } = req.query;

  if (genre) {
    const filteredMovies = movies.filter((movie) =>
      movie['genre'].some((g) => g.toLowerCase() == genre.toLowerCase())
    );
    return res.json(filteredMovies);
  }

  res.json(movies);
});

moviesRouter.get('/:id', (req, res) => {
  const { id } = req.params;

  const movie = movies.find((movie) => movie['id'] == id);
  if (movie) return res.json(movie);

  res.status(404).json({ message: 'Movie not found' });
});

moviesRouter.post('/', (req, res) => {
  const result = validateMovie(req.body);

  if (result.error) {
    //422 Unprocessable Entity
    return res.status(422).json({ error: JSON.parse(result.error.message) });
  }

  const newMovie = {
    id: randomUUID(),
    ...result.data,
  };
  //Esto no seria REST, porque estamo guardando
  //el estado de la aplicaciòn en memoria

  movies.push(newMovie);

  res.status(201).json(newMovie); //actualizar la caché del cliente
});

moviesRouter.delete('/:id', (req, res) => {
  const { id } = req.params;
  const movieIndex = movies.findIndex((movie) => movie.id === id);

  if (movieIndex === -1) {
    return res.status(404).json({ message: 'Movie not found' });
  }

  movies.splice(movieIndex, 1);

  return res.json({ message: 'Movie deleted' });
});

moviesRouter.patch('/:id', (req, res) => {
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
