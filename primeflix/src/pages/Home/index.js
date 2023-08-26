import {useEffect, useState} from 'react';
import api from '../../services/api';

//movie/now_playing?api_key=7a9429aff0a61b6aee27daf163193805&language=pt-BR
function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function loadMovies() {
            const response = await api.get('movie/now_playing',
                {
                    params: {
                        api_key: '7a9429aff0a61b6aee27daf163193805',
                        language: 'pt-BR'
                    }
                });
            setMovies(response.data.results);

        }
        loadMovies().then(r => console.log(r));
    }, []);

    return (
        <div className="container">
            <h1>Welcome Home Page</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                        <h2>{movie.title}</h2>
                        <p>{movie.vote_average}/10</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;
