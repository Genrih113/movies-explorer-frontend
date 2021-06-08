import posterNotFound from '../images/poster-not-found.jpeg';

export default function NormalizeMovie(unNormalMovie, savedMovieId, baseUrlString) {
  const normalMovie = {
    country: (
      unNormalMovie.country
      ? `${unNormalMovie.country}`
      : 'undefined'
    ),
    description: (
      unNormalMovie.description
      ? `${unNormalMovie.description}`
      : 'undefined'
    ),
    director: (
      unNormalMovie.director
      ? `${unNormalMovie.director}`
      : 'undefined'
    ),
    duration: (
      unNormalMovie.duration
      ? unNormalMovie.duration
      : 0
    ),
    image: (
      (unNormalMovie.image && unNormalMovie.image.url)
      ? `${baseUrlString}${unNormalMovie.image.url}`
      : posterNotFound
    ),
    movieId: (
      unNormalMovie.id
      ? unNormalMovie.id
      : 0
    ),
    nameEN: (
      unNormalMovie.nameEN
      ? `${unNormalMovie.nameEN}`
      : 'undefined'
    ),
    nameRU: (
      unNormalMovie.nameRU
      ? `${unNormalMovie.nameRU}`
      : 'undefined'
    ),
    owner: 'undefined',
    thumbnail: (
      (unNormalMovie.image && unNormalMovie.image.formats && unNormalMovie.image.formats.thumbnail && unNormalMovie.image.formats.thumbnail.url)
      ? `${baseUrlString}${unNormalMovie.image.formats.thumbnail.url}`
      : 'undefined'
    ),
    trailer: (
      unNormalMovie.trailerLink
      ? `${unNormalMovie.trailerLink}`
      : 'undefined'
    ),
    year: (
      unNormalMovie.year
      ? `${unNormalMovie.year}`
      : 'undefined'
    ),
    _id: savedMovieId,
  };

  return normalMovie;
}