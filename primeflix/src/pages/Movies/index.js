import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api, {configGet} from '../../services/api';
import {toast} from 'react-toastify';
import './movies.css';

function Movies() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMovie() {
            await api.get(`movie/${id}`, configGet)
                .then(response => {
                    setMovie(response.data);
                })
                .catch(error => {
                    navigate('/', {replace: true});
                    return;
                });
            setLoading(false);
        }
        loadMovie();
    }, [id, navigate]);

    function saveMovie() {
        const listMovies = localStorage.getItem('movies');
        let movies = JSON.parse(listMovies) || [];

        const hasMovie = movies.some(movieItem => movieItem.id === movie.id);
        if (hasMovie) {
            toast.warning('Você já possui esse filme salvo!');
            return;
        }

        movies.push(movie);
        localStorage.setItem('movies', JSON.stringify(movies));
        toast.success('Filme salvo com sucesso!');
    }

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
                <button onClick={saveMovie}>Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${movie.title}+Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>

        </div>
    )
}

export default Movies;