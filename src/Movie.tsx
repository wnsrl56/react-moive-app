import React, { Component } from 'react';
import { Indexable } from './commonInterface';
import './Movie.css';

export interface MovieItem extends Indexable {
  title: string;
  poster: string;
  id?: number;
  genres?: string[];
  synopsis?: string;
}

class Movie extends Component<MovieItem> {
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
              {genres
                ? genres.map((genre, index) => (
                    <MovieGenre genre={genre} key={index} />
                  ))
                : ''}
            </div>
            <p className="Movie_Synopsis">{synopsis}</p>
          </div>
        </div>
      </div>
    );
  }
}

function MoviePoster(props: Indexable) {
  const { poster, alt } = props;
  return <img src={poster} alt={alt} title={alt} className="Movie_Poster" />;
}

function MovieGenre(props: Indexable) {
  const { genre } = props;
  return <span className="Movie_Genre">{genre}</span>;
}
export default Movie;
