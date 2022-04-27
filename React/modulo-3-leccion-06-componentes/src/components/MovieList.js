import MovieItem from './MovieItem';
import '../styles/MovieList.scss';

function MovieList(props) {
  const htmlMovies = props.moviesList.map((movieItem) => {
    return <MovieItem movie={movieItem} />;
  });

  return (
    <>
      <ul className='movies__list'>{htmlMovies}</ul>
    </>
  );
}

export default MovieList;
