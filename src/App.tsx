import './App.css';
import React, { Component } from 'react';
import Movie, { MovieItem } from './Movie';
import { Indexable } from './commonInterface';

class App extends Component {
  state: Indexable = {};

  _renderMovies = (list: MovieItem[]) => {
    return list.map((v: MovieItem) => {
      const { title, medium_cover_image, id } = v;
      return (
        <Movie title={title} medium_cover_image={medium_cover_image} key={id} />
      );
    });
  };
  componentDidMount() {
    this._getMovies();
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({ movies });
  };
  _callApi = () => {
    return fetch(
      'https://yts.am/api/v2/list_movies.json?sort_by=download_count'
    )
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(error => console.log(error));
  };

  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        {movies ? this._renderMovies(movies) : 'Loadings'}
      </div>
    );
  }
}

export default App;
