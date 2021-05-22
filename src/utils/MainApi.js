class MainApi {
  constructor({baseUrl}) {
    this._baseUrl = baseUrl;
  }

  signup(name, email, password) {
    return fetch(this._baseUrl + '/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'email': email,
        'password': password
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }


  signin(email, password) {
    return fetch(this._baseUrl + '/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'email': email,
        'password': password
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  checkToken(JWT) {
    return fetch(this._baseUrl + '/users/me', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JWT}`
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

  getUserInfo(JWT) {
    return fetch(this._baseUrl + '/users/me', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${JWT}`
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

  patchUserInfo(JWT, userInfoObj) {
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${JWT}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: userInfoObj.name,
        email: userInfoObj.email
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  getUserMovies(JWT) {
    return fetch(this._baseUrl + '/movies', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${JWT}`
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

  postMovie(JWT, movie) {
    console.log(movie);
    return fetch(this._baseUrl + '/movies', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${JWT}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  deleteMovie(JWT, movieId) {
    return fetch(this._baseUrl + '/movies/' + movieId, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${JWT}`,
        'Content-Type': 'application/json'
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

const mainApi = new MainApi({
  baseUrl: `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3001'}`,
});

export default mainApi;