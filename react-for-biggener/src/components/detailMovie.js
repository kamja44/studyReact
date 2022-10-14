import PropTypes from "prop-types";

function Movie({id, sTitle, title, backImg, rating, runtime, geners}){
    return (
        <div id={id}>
            <img src={backImg} alt= {sTitle} />
            <h2>{title}</h2>
            <p>{rating}/10</p>
            <p>{runtime}m</p>
            <p>Tag</p>
            <ul>
                {geners && geners.map((g) => <li key={g}>{g}</li>)}
            </ul>
        </div>
    );
}
Movie.propTypes={
    id: PropTypes.number.isRequired,
    sTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    backImg: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    geners: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;