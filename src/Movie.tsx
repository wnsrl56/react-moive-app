import React, { Component } from 'react';
import { Indexable } from './commonInterface';
import './Movie.css';

export interface MovieItem {
  title?: string;
  medium_cover_image?: string;
  id?: number;
}

class Movie extends Component<MovieItem, object> {
  render() {
    const { title, medium_cover_image } = this.props;
    return (
      <div>
        <MoviePoster poster={medium_cover_image} />
        <h1 className="Movie"> {title} </h1>
      </div>
    );
  }
}

function MoviePoster(poster: any) {
  const { poster: posterUrl } = poster;
  return (
    <div className="img-size">
      <img src={posterUrl} />
    </div>
  );
}

export default Movie;

// https://yts.am/api/v2/list_movies.json?sort_by=rating
