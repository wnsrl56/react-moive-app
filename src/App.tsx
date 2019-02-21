import './App.css';
import React, { Component } from 'react';
import Movie, { MovieItem } from './Movie';

const movies: MovieItem[] = [
  {
    title: 'Titanic',
    poster: 'https://upload.wikimedia.org/wikipedia/en/2/22/Titanic_poster.jpg'
  },
  {
    title: 'Matrix',
    poster:
      'https://upload.wikimedia.org/wikipedia/en/0/06/Ultimate_Matrix_Collection_poster.jpg'
  },
  {
    title: 'Full Metal Jacket',
    poster:
      'https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg'
  }
];

class App extends Component {
  state = {
    greeting: 'hello',
    movies
  };
  componentDidMount() {
    const { movies } = this.state;
    setTimeout(() => {
      this.setState({
        movies: [
          ...movies,
          {
            title: 'Full Metal Jacket2',
            poster:
              'https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg'
          }
        ]
      });
    }, 3000);
  }
  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        {movies.map((v: MovieItem, i: number) => {
          const { title, poster } = v;
          return <Movie title={title} poster={poster} key={i} />;
        })}
      </div>
    );
  }
}

export default App;
