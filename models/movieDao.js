const { myDataSource } = require('../utils/dataSource');
const { BaseError } = require('../middleware/errorConstructor');

const getMovies = async (showingType, sortType, pagenation) => {
  try {
    const movieList = await myDataSource.query(`
    SELECT
    m.id AS movie_id,
    m.title,
    m.book_rate,
    date_format(open_date, '%Y-%m-%d') as open_date,
    movie_grades.grade_image,
    (SELECT 
      COUNT(movie_id)
      FROM
      users_movies_likes
      WHERE movie_id = m.id) likes,
    (SELECT
      TRUNCATE(AVG(rate),1)
      FROM
      reviews
      WHERE movie_id = m.id) reviews_rate,
    m.poster_img,
    m.detail_content
    FROM
    movies m
    LEFT JOIN movie_grades ON  m.grade = movie_grades.id
    ${showingType}
    ${sortType}
    ${pagenation}
    `);
    return movieList;
  } catch (err) {
    throw new BaseError('INVALID_DATA_INPUT', 500);
  }
};

const getMovieById = async (movieId) => {
  try {
    const movieDetail = await myDataSource.query(
      `
      SELECT
      m.id as movie_id,
      m.title,
      m.eng_title,
      date_format(open_date, '%Y-%m-%d') as open_date,
      m.audience,
      m.country,
      m.production,
      m.distribution,
      m.genre,
      m.director,
      m.actor,
      m.book_rate,
      m.poster_img,
      m.background_img,
      m.detail_title,
      m.detail_content,
      (SELECT
        grade_name
        FROM
        movie_grades
        WHERE movie_grades.id = m.grade) grade_name,
      (SELECT
        grade_image
        FROM
        movie_grades
        WHERE movie_grades.id = m.grade) grade_image,
      (SELECT
        COUNT(movie_id)
        FROM
        users_movies_likes
        WHERE movie_id = m.id) likes,
      (SELECT
        TRUNCATE(AVG(rate),1)
        FROM
        reviews
        WHERE movie_id = m.id) reviews_rate,
      (SELECT
        COUNT(movie_id)
        FROM
        reviews
        WHERE movie_id = m.id) reviews_count,
      (SELECT
        JSON_ARRAYAGG(json_object(
          'id', r.id,
          'account_id', users.account_id,
          'content' , r.content,
          'rate', r.rate,
          'created_at', TIMESTAMPDIFF(minute,date_format(r.created_at, '%Y-%m-%d %H:%i:%s'),date_format(now(),'%Y-%m-%d %H:%i:%s')),
          'options', review_options.options)
          )as reviews
        FROM (SELECT *, ROW_NUMBER () OVER (ORDER BY reviews.created_at desc) FROM reviews) as r
        LEFT JOIN (
          SELECT
            review_id,
            JSON_ARRAYAGG(options.option_name) as options
            FROM
            review_options
            JOIN options ON review_options.option_id = options.id
            GROUP BY review_id
            )review_options ON r.id = review_options.review_id
        LEFT JOIN users ON users.account_id = r.account_id
        WHERE movie_id = m.id
        GROUP BY movie_id
        ORDER BY r.content ASC
        ) reviews
      FROM
      movies m
    WHERE m.id = ?
    `,
      [movieId]
    );
    return movieDetail;
  } catch (err) {
    throw new BaseError('INVALID_DATA_INPUT', 500);
  }
};

const getMoviePictuers = async (movieId) => {
  try {
    const moviePictuers = await myDataSource.query(
      `
      SELECT
      movie_id,
      trailer,
      movie_img
      FROM
      movie_pictures
      WHERE movie_id = ?
      `,
      [movieId]
    );
    return moviePictuers;
  } catch (err) {
    throw new BaseError('INVALID_DATA_INPUT', 500);
  }
};

const getUserIdByAccountId = async (account_id) => {
  try {
    const [userId] = await myDataSource.query(
      `
      SELECT
      users.id
      FROM
      users
      WHERE users.account_id = ?
      `,
      [account_id]
    );
    return Object.values(userId)[0];
  } catch (err) {
    throw new BaseError('INVALID_DATA_INPUT', 500);
  }
};

const existCheckMovieLike = async (userId, movieId) => {
  try {
    const [isExist] = await myDataSource.query(
      `
      SELECT exists
      (SELECT
      *
      FROM
      users_movies_likes
      WHERE user_id = ?
      AND movie_id = ?) AS isExist
      `,
      [userId, movieId]
    );
    return +Object.values(isExist)[0];
  } catch (err) {
    throw new BaseError('INVALID_DATA_INPUT', 500);
  }
};

const createMovieLike = async (userId, movieId) => {
  try {
    await myDataSource.query(
      `
      INSERT INTO
      users_movies_likes
      (user_id,movie_id)
      VALUES
      (?,?)
      `,
      [userId, movieId]
    );
  } catch (err) {
    throw new BaseError('INVALID_DATA_INPUT', 500);
  }
};

const deleteMovieLike = async (userId, movieId) => {
  try {
    await myDataSource.query(
      `
      DELETE FROM
      users_movies_likes
      WHERE user_id = ?
      AND movie_id = ?
      `,
      [userId, movieId]
    );
  } catch (err) {
    throw new BaseError('INVALID_DATA_INPUT', 500);
  }
};

module.exports = { getMovies, getMovieById, getMoviePictuers, getUserIdByAccountId, existCheckMovieLike, createMovieLike, deleteMovieLike };
