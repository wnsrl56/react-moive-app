import React, { Component } from 'react';
import { Indexable } from './commonInterface';
import './Movie.css';

export interface IMovieItem extends Indexable {
  title: string;
  poster: string;
  id?: number;
  genres: string[];
  synopsis?: string;
}

export interface IMoviePoster {
  poster: string;
  alt: string;
}

export interface IMovieGenre {
  genre: string;
}

class Movie extends Component<IMovieItem> {
  render() {
    const { title, poster, genres, synopsis } = this.props;
    return (
      <div className="Movie">
        <div className="Movie_Rows">
          <MoviePoster poster={poster} alt={title} />
        </div>
        <div className="Movie_Rows">
          <div className="Movie_Columns">
            <h1> {title} </h1>
            <div className="Movie_Genres">
              {genres.map((genre, index) => (
                <MovieGenre genre={genre} key={index} />
              ))}
            </div>
            <p>{synopsis}</p>
          </div>
        </div>
      </div>
    );
  }
}

function MoviePoster(props: IMoviePoster) {
  const { poster, alt } = props;
  return <img src={poster} alt={alt} title={alt} className="Movie_Poster" />;
}

function MovieGenre(props: IMovieGenre) {
  const { genre } = props;
  return <span className="Movie_Genre">{genre}</span>;
}
export default Movie;
