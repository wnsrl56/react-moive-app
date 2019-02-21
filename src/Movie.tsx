import React, { Component } from 'react';
import './Movie.css';

export interface MovieItem {
  title?: string;
  poster?: string;
}

class Movie extends Component<MovieItem, object> {
  render() {
    const { title, poster } = this.props;
    return (
      <div>
        <MoviePoster poster={poster} />
        <h1 className="Movie">this is Movie {title} </h1>
      </div>
    );
  }
}

class MoviePoster extends Component<any> {
  render() {
    const { poster } = this.props;
    return (
      <div className="img-size">
        <img src={poster} />
      </div>
    );
  }
}

export default Movie;
