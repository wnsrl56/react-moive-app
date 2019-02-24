import './App.css';
import React, { Component } from 'react';
import Movie, { IMovieItem } from './Movie';
import LoadingMask from './LoadingMask';

interface IAppState {
  movies: IMovieItem[];
}

class App extends Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      movies: []
    };
  }
  private _renderMovies = (list: IMovieItem[]) => {
    return list.map((v: IMovieItem) => {
      const { title, medium_cover_image: poster, genres, synopsis, id } = v;
      return (
        <Movie
          title={title}
          poster={poster}
          genres={genres}
          key={id}
          synopsis={synopsis}
        />
      );
    });
  };

  private _renderLoading = () => {
    return (
      <div className="Viewport">
        <LoadingMask />
      </div>
    );
  };

  componentDidMount() {
    this._getMovies();
  }

  private _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({ movies });
  };

  private _callApi = () => {
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
        {movies ? this._renderMovies(movies) : this._renderLoading()}
      </div>
    );
  }
}

export default App;
