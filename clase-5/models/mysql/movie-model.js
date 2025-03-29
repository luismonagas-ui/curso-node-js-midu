/** @format */

import mysql from 'mysql2/promise';

const config = {
  host: 'localhost',
  user: 'root',
  port: 3309,
  password: '',
  database: 'moviesdb', // Cambia esto por el nombre de tu base de datos
};

const connection = await mysql.createConnection(config);

export class MovieModel {
  static async getAll({ genre }) {
    const [movies] = await connection.query(
      'SELECT title,year,director,duration,poster,uuid() id FROM movie;'
    );

    return movies;
  }

  static async getById({ id }) {}

  static async create({ input }) {}

  static async delete({ id }) {}

  static async update({ id, input }) {}
}
