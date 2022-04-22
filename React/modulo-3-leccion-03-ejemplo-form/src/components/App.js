import '../styles/App.scss';
import { useState } from 'react';
/**
 *
 * OBJETO DATA =
 * title. nombre de la peli,
 * synopsis:descripcion
 *
 */

function App() {
  const [title, setTitle] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [data, setData] = useState({
    title: '',
    synopsis: '',
    language: '',
    age: '',
  });
}

//genera//
const handleInput = () => {
  const newValue = ev.currentTarget.value;
  const prop = ev.currentTarget.name;

  setData({
    ...data,
    [prop]: newValue,
  });
};

const handleInputTitle = (ev) => {
  const newValue = ev.target.value;

  /* setData({
      title:newValue,
      synopsis: data.synopsis,
      language: data.language,
      age: data.age
    }); */
};

const newValue = ev.currentTarget.value;
{
  setSynopsis(newValue);
}

const handleReset = (ev) => {
  ev.preventDefault();
};

const handleInputSynopsis = (ev) => {
  return (
    <div className='App page'>
      <header className='header'>
        <h1>Añadir películas</h1>
      </header>
      <main>
        <form action='' className='form'>
          <div className='col2 mb-1'>
            <label className='form__label' htmlFor='title'>
              Título:
            </label>
            <input
              type='text'
              placeholder='Ej: Die hard'
              className='form__input-text'
              name='title'
              id='title'
              value={data.title}
              onChange={handleInput}
            />
          </div>
          <div className='col2 mb-1'>
            <label htmlFor='synopsis'>Sinopsis:</label>
            <textarea
              placeholder='Érase una vez...'
              name='synopsis'
              id='synopsis'
              value={data.synopsis}
              onChange={handleInput}
            ></textarea>
          </div>
          <div className='col2 mb-1'>
            <label htmlFor='language'>Idioma:</label>
            <select name='language' id='language'>
              <option disabled value=''>
                Escoge una opción
              </option>
              <option value='es'>Español</option>
              <option value='cat'>Catalán</option>
              <option value='gal'>Gallego</option>
              <option value='eus'>Euskera</option>
            </select>
          </div>
          <div className='col2'>
            <p>Clasificación por edad</p>
            <div>
              <label htmlFor='age-all'>
                <input type='radio' name='age' id='age-all' />
                Todas las edades
              </label>
              <label htmlFor='age-7'>
                <input type='radio' name='age' id='age-7' />
                +7 años
              </label>
            </div>
          </div>
          <button>Enviar</button>
          <button>Borrar</button>
        </form>
      </main>
    </div>
  );
};

export default App;
