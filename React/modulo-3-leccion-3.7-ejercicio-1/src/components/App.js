// Fichero src/components/App.js
import { useState } from 'react';
import Preview from '../components/Preview.js';

const App = () => {
  // Estados del componente
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('España peninsular'); // Iniciamos el componente con la primera opción del select
  const [paymentType, setPaymentType] = useState('');
  const [legalTerms, setLegalTerms] = useState(false);

  // Eventos

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };

  const handleRegion = (ev) => {
    setRegion(ev.target.value);
  };

  const handlePaymentType = (ev) => {
    setPaymentType(ev.target.value);
  };

  const handleLegalTerms = (ev) => {
    // Como lo que nos interesa es si está activo o no, guardamos el checked
    setLegalTerms(ev.target.checked);
  };

  const handleResetButton = () => {
    // Ponemos los mismos valores que hemos usado arriba en los useState
    setName('');
    setEmail('');
    setRegion('España peninsular');
    setPaymentType('');
    setLegalTerms(false);
  };

  const handleForm = (ev) => {
    ev.preventDefault();
    console.log('Enviando datos al servidor...');
  };

  const isValidForm = () => {
    // El formulario solo es válido cuando los inputs de tipo texto no estén vacíos, cuando se haya marcado un tipo de pago y cuando los términos legales sean true
    // También podríamos comprobar que el email tiene el formato correcto, pero no queremos complicar este ejemplo
    if (
      name !== '' &&
      email !== '' &&
      paymentType !== '' &&
      legalTerms === true
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <form className='form' onSubmit={handleForm}>
        <h2>Rellena tus datos para finalizar la compra:</h2>
        <div className='form'>
          {/* name */}
          <div className='input-group-text'>
            <label className='label-text' htmlFor='name'>
              Escribe un nombre:
            </label>
            <input
              className='input-text'
              type='text'
              name='name'
              id='name'
              placeholder='María García'
              value={name}
              onChange={handleName}
            />
          </div>

          {/* email */}

          {/* region */}
          <div className='input-group-select'>
            <label className='label-text' htmlFor='region'>
              Indica tu región:
            </label>
            <select
              className='input-select'
              name='region'
              id='region'
              value={region}
              onChange={handleRegion}
            >
              <option>España peninsular</option>
              <option>Islas Canarias</option>
              <option>Islas Baleares</option>
              <option>Ceuta</option>
              <option>Melilla</option>
            </select>
          </div>

          {/* payment type */}
          <label className='label-text'>Indica tu método de pago:</label>

          <div className='input-group-radio'>
            <label className='label-radio' htmlFor='creditCard'>
              Tarjeta de crédito
            </label>
            {/* Este radio solo debe aparecer activo cuando paymentType sea creditCard */}
            <input
              type='radio'
              name='paymentType'
              id='creditCard'
              value='creditCard'
              checked={paymentType === 'creditCard'}
              onChange={handlePaymentType}
            />
          </div>

          <div className='input-group-radio'>
            <label className='label-radio' htmlFor='cash'>
              Efectivo
            </label>
            {/* Este radio solo debe aparecer activo cuando paymentType sea cash */}
            <input
              type='radio'
              name='paymentType'
              id='cash'
              value='cash'
              checked={paymentType === 'cash'}
              onChange={handlePaymentType}
            />
          </div>

          <div className='input-group-radio'>
            <label className='label-radio' htmlFor='cashOnDelivery'>
              Contra reembolso
            </label>
            {/* Este radio solo debe aparecer activo cuando paymentType sea cashOnDelivery */}
            <input
              type='radio'
              name='paymentType'
              id='cashOnDelivery'
              value='cashOnDelivery'
              checked={paymentType === 'cashOnDelivery'}
              onChange={handlePaymentType}
            />
          </div>

          {/* legal terms */}
          <div className='input-group-checkbox'>
            <label className='label-check' htmlFor='legalTerms'>
              Debes aceptar nuestros términos legales para completar la compra:
            </label>
            {/* Este radio solo debe aparecer activo cuando legalTerms sea true */}
            <input
              type='checkbox'
              name='legalTerms'
              id='legalTerms'
              checked={legalTerms}
              onChange={handleLegalTerms}
            />
          </div>
        </div>

        {/* reset */}
        {/* Este botón debe estar inhabilitado mientras el formulario no sea válido */}
        <input
          className='button'
          type='submit'
          value='Enviar'
          disabled={isValidForm() === false}
        />

        {/* send */}
        <button className='button reset' onClick={handleResetButton}>
          Limpiar el formulario
        </button>
      </form>
    </div>
  );
};

export default App;
