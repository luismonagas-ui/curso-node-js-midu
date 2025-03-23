/** @format */
import { randomUUID } from 'node:crypto';
import { readJSON } from '../utils/utils.js';

const movies = readJSON('./data/movies.json');

export class MovieModel {
  static async getAll({ genre }) {
    if (genre) {
      return movies.filter((movie) =>
        movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
      );
    }
    return movies;
  }

  static async getById({ id }) {
    const movie = movies.find((movie) => movie['id'] == id);

    return movie;
  }

  static async create({ input }) {
    const newMovie = {
      id: randomUUID(),
      ...input,
    };
    //Esto no seria REST, porque estamo guardando
    //el estado de la aplicaciòn en memoria

    movies.push(newMovie);

    return newMovie;
  }

  static async delete({ id }) {
    const movieIndex = movies.findIndex((movie) => movie.id === id);

    if (movieIndex === -1) return false;

    movies.splice(movieIndex, 1);

    return true;
  }

  static async update({ id, input }) {
    const movieIndex = movies.findIndex((movie) => movie.id === id);

    if (movieIndex === -1) return false;

    movies[movieIndex] = {
      ...movies[movieIndex],
      ...input,
    };

    return movies[movieIndex];
  }
}
