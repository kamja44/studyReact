import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";
function Movie({id, coverImg, title, year, summary, genres}){
    return (
      <div className={styles.movie}>
        <img src={coverImg} alt={title} className={styles.movie__img} />
        <div>
          <h2 className="{styles.movie__title}">
            <Link to={`/movie/${id}`}>
              {title}({year})
            </Link>
          </h2>
          {/*slice <- 0부터 235까지 문자만 표현 */}
          <p>{summary.length > 235 ? `${summary.slice(0,235)}...`: summary}</p>
          <ul className={styles.movie__genres}>
            {genres ? genres.map(g => <li key={g}>{g}</li>) : null}
          </ul>
        </div>
      </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
  };

export default Movie;