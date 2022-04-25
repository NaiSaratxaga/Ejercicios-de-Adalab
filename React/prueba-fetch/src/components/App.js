import { useEffect, useState } from 'react';
import getMovies from '../services/fetchMovies';
import ls from '../services/localStorage';

function App() {
  const [name, setName] = useState('');
  const [movies, setMovies] = useState([]);

  //casos tipicos useEffect: fetch y guardar ls
  //sino pongo [] significa ejecyta cada vez que se renderiza el componente
  // si [] vavio solo se ejecuta la primera vez
  //si [variable de estado], se ejecuta cada vez que cambia esa variable

  useEffect(() => {
    if (movies.length === 0) {
      getMovies().then((data) => {
        localStorage.set('movies', data);
        setMovies(data);
      });
    }
  }, []);

  const handleName = (ev) => {
    setName(ev.currentTarget.value);
  };
  const htmlMovies = movies.map((movieItem) => {
    return <li key={movieItem.id}> {movieItem.title}</li>;
  });
  return (
    <div className='App'>
      <input type='text' value={name} onChange={handleName} />
      <ul>{htmlMovies}</ul>
    </div>
  );
}

export default App;
