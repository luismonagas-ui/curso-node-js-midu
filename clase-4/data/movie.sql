DROP DATABASE IF EXISTS moviesdb;
CREATE DATABASE moviesdb;
USE moviesdb;
-- crear la tabla movies

CREATE TABLE movie (
	id VARCHAR(36) NOT NULL PRIMARY KEY,
	title VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    director VARCHAR(255) NOT NULL,
    duration INT NOT NULL,
    poster TEXT,
    rate DECIMAL(2,1) UNSIGNED NOT NULL  
);

	CREATE TABLE genre (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
    );
    
    CREATE TABLE movie_genres (
    movie_id VARCHAR(36) REFERENCES movies(id),
    genre_id INT REFERENCES genres(id),
    PRIMARY KEY (movie_id, genre_id)
    );
    
    INSERT INTO genre (name) VALUES
    ('Drama'),
    ('Action'),
    ('Crime'),
    ('Adventure'),
    ('Sci-Fi'),
    ('Romance'),
    ('Horror');
    
    INSERT INTO movie (id, title,year,director,duration,poster,rate) VALUES
    (uuid(), "Inception",2010,"Christopher Nolan", 180, "https://m.media-amazon.com/images/I/91Rc8cAmnAL._AC_UF1000,1000_QL80_.jpg",8.8),
    (uuid(), "Camaleon: Atentado a Castro",1992,"Jorge Araujo", 210, "https://m.media-amazon.com/images/M/MV5BOWM2YWFjNGQtYTY2My00ZWM3LTg4MTgtNWIyZTRkMDYzNzkzXkEyXkFqcGdeQXVyMTk1MjA1NjU@._V1_SX300.jpg",5.6),
    (uuid(), "I Am Legend",2017,"Francis Lawrence", 101, "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",7.2);
    
    INSERT INTO movie_genres (movie_id, genre_id)
    VALUES
		((SELECT id FROM movie WHERE title = 'Inception'), (SELECT id FROM genre WHERE name ='Sci-Fi')),
        ((SELECT id FROM movie WHERE title = 'Camaleon: Atentado a Castro'), (SELECT id FROM genre WHERE name ='Action')),
        ((SELECT id FROM movie WHERE title = 'I Am Legend'), (SELECT id FROM genre WHERE name ='Horror'));
        
	SELECT title,year,director,duration,poster,uuid() id from movie;
    
  