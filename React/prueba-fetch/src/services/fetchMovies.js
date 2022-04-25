function getMovies() {
  fetch(
    'https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/adamdb-v1/books_with_id.json'
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}

const objecttoExport = {
  getMovies: getMovies(),
};
export default getMovies;
