function Preview(props) {
  const handleName = (ev) => {
    setName(ev.target.value);
  };
}

<div className='input-group-text'>
  <label className='label-text' htmlFor='email'>
    Escribe un email:
  </label>
  <input
    className='input-text'
    type='email'
    name='email'
    id='email'
    placeholder='mariagarcia@gmail.com'
    value={email}
    onChange={handleEmail}
  />
</div>;
