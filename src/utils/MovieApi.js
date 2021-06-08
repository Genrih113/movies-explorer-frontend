class MovieApi {
  constructor({baseUrl}) {
    this._baseUrl = baseUrl;
  }

  getMovies() {
    return fetch(this._baseUrl + '/beatfilm-movies', {
      method: 'GET',
      headers: {
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }
}

const movieApi = new MovieApi({
  baseUrl: 'https://api.nomoreparties.co'
});

export default movieApi;