CREATE DATABASE moviesdb;


USE moviesdb;

--- crear la tabla movies

CREATE TABLE movie (
	id BINARY(16) PRIMARY KEY DEFAULT (UUID_TO_BIN(UUID()),
	title VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    director VARCHAR(255) NOT NULL,
    duration INT NOT NULL,
    poster TEXT,
    rate DECIMAL(2,1) UNSIGNED NOT NULL  
);

	CREATE TABLE genre (
    id INT AUOT_INCREMENT PRIMARY KEY,
    name VARCHA(255) NOT NULL UNIQUE
    );
    
    CREATE TABLE movie_genres (
    movie_id BINARY(16) REFERENCES movies(id),
    genre_id INT REFERENCES genres(id),
    PRIMARY KEY (movies_id, genre_id)
    );
    
    INSERT INTO genre (name) VALUES
    ('Drama'),
    ('Action'),
    ('Crime'),
    ('Adventure'),
    ('Sci-Fi'),
    ('Romance'),
    
    INSERT INTO (id, title,year,director,duration,postrer,rate) VALUES