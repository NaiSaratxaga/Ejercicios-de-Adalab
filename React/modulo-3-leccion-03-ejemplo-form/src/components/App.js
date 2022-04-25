import '../styles/App.scss';
import { useState } from 'react';

function App() {
  /**
   * OBJETO DATA =
   * {
   *  title. nombre de la peli,
   *  synopsys: descripcion
   * }
   */
  const [data, setData] = useState({
    title: '',
    synopsis: '',
    language: '',
    age: '7',
  });

  //función general para controlar todos los inputs
  const handleInput = (ev) => {
    const newValue = ev.target.value;
    const prop = ev.currentTarget.name;
    console.log(prop);
    setData({
      ...data,
      [prop]: newValue,
    });
  };

  const [title, setTitle] = useState('');
  const handleInputTitle = (ev) => {
    const newValue = ev.target.value; //en ete caso es lo mismo que currentarget
    setTitle(newValue); //cuando estoy actualizando solo ese valor

    /* setData({
       title: newValue,
       synopsis: data.synopsis,
       language: data.language,
       age: data.age
     });*/

    setData({
      ...data,
      title: newValue,
    });
  };

  const [synopsis, setSynopsis] = useState('');
  const handleInputSynopsis = (ev) => {
    const newValue = ev.target.value; //lo mismo que currentarget
    setSynopsis(newValue);
  };
  const [age, setAge] = useState('7');
  const handleChangeRadio = (ev) => {
    setAge(ev.currentTarget.value);
  };

  const handleReset = (ev) => {
    ev.preventDefault();
    //para volver al valor inicial de una variable
    setTitle('');
    //para actualizar todo el objeto y volverlo a su valor inicial
    setData({
      title: '',
      synopsis: '',
      language: '',
      age: '7',
    });
  };

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
            <select
              name='language'
              id='language'
              onChange={handleInput}
              value={data.language}
            >
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
                <input
                  type='radio'
                  name='age'
                  id='age-all'
                  value='all'
                  onChange={handleInput}
                  checked={data.age === 'all'}
                  /** if(age === "all") return true else return false */
                />
                Todas las edades
              </label>
              <label htmlFor='age-7'>
                <input
                  type='radio'
                  name='age'
                  id='age-7'
                  value='7'
                  onChange={handleInput}
                  checked={data.age === '7'}
                  /** if(age === "7") return true else return false */
                />
                +7 años
              </label>
            </div>
          </div>
          <button>Enviar</button>
          <button onClick={handleReset}>Borrar</button>
        </form>
        <p>{`Titulo de la peli ${data.title}`}</p>
      </main>
    </div>
  );
}

export default App;
