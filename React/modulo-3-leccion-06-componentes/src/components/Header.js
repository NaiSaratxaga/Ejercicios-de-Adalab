function Header(props) {
  return (
    <header className='header'>
      <img
        className='header__img'
        alt='movie'
        src='https://adalab.es/wp-content/uploads/2021/05/logo-adalab.svg'
      />
      <h1 className='header__title'>{props.title} Promo Pepino</h1>
    </header>
  );
}

export default Header;
