import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import './movies.css';

function Movies() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMovie() {
            await api.get(`movie/${id}`,
                {
                    params: {
                        api_key: '7a9429aff0a61b6aee27daf163193805',
                        language: 'pt-BR'
                    }
                })
                .then(response => {
                    setMovie(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
            setLoading(false);
        }
        loadMovie();
    }, []);

    if (loading) {
        return (
            <div className="loading">
                <h2>Loading movie...</h2>
            </div>
        )
    }

    return (
        <div className="movie-info">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title}/>
            <h2>Sinopse</h2>
            <span>{movie.overview}</span>
            <strong>Nota: {movie.vote_average} / 10</strong>
            <div className="area-buttons">
                <button>Salvar</button>
                <button>
                    <a href={"#"}>
                        Trailer
                    </a>
                </button>
            </div>

        </div>
    )
}

export default Movies;