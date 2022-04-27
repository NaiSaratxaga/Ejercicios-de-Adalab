function MovieItem(props) {
  return (
    <li key={props.movie.id} className='movies__item'>
      <h2 className='movies__title'>{props.movie.name}</h2>
      <p>{props.movie.synopsis}</p>
    </li>
  );
}

export default MovieItem;
