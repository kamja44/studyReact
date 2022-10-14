import PropTypes from "prop-types";
import styles from "./detailMovie.module.css";

function Movie({id, sTitle, title, backImg, rating, runtime, genres}){
    return (
        <div id={id} className={styles.container}>
            <div className={styles.imgContainer}>
                <img src={backImg} alt= {sTitle} />
            </div>
            <div className={styles.content}>
                <ul>
                    <li className={styles.title}>{title}</li>
                    <li className={styles.rating}>rating : {rating}/10</li>
                    <li className={styles.runtime}>running time : {runtime}m</li>
                    <li className={styles.tag}>Tag<br /><br />{genres ? genres.map((g) => <span key={g}>『{g}』</span>) : null}</li>
                </ul>
            </div>
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
    genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;