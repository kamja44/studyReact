import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Movie from "../components/detailMovie";
function Detail(){
    const [loading,setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const {id} = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
        console.log(json);
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    },[]);
    return (
        <div>
            {loading ? <h1>loading...</h1> : 
            <Movie
                id={movie.id}
                sTitle={movie.title}
                title={movie.title_long}
                backImg={movie.medium_cover_image}
                rating={movie.rating}
                runtime={movie.runtime}
                genres={movie.genres}
                description={movie.description_full}
                download={movie.download_count}
            />}
        </div>
    );
}

export default Detail;