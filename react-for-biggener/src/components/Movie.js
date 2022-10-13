import PropTypes from "prop-types";

function Movie({coverImg, title, year, summary, genres}){
    return <div>
    <img src={coverImg} alt={title} />
    <h2>{title}({year})</h2>
    <p>{summary}</p>
    <ul>
      {genres && genres.map(g => <li key={g}>{g}</li>)}
    </ul>
  </div>;
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
  };

export default Movie;