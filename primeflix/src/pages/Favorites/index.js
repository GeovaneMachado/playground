import { useEffect, useState } from 'react';
import api, {configGet} from '../../services/api';
import { toast } from 'react-toastify';

import './favorites.css';
import { Link } from 'react-router-dom';

function Favorites() {
    const [favorites, setFavorites] = useState([]);
    const [teste, setTeste] = useState([]);

    async function loadFavorites() {
        await api.get('account/20355469/lists', configGet).then(response => {
            setTeste(response.data.results);
        });
    }


    useEffect(() => {
        const myFavorites = JSON.parse(localStorage.getItem('movies'));
        setFavorites(myFavorites || []);
        loadFavorites();

    }, []);

    function deleteMovie(id) {
        let listMovies =  favorites.filter(movie => movie.id !== id);
        localStorage.setItem('movies', JSON.stringify(listMovies));
        setFavorites(listMovies);
        toast.success('Filme removido com sucesso!');
    }

    console.log(teste)
    return (
        <div className={'myMovies'}>
            <h1>Favorites</h1>
            {favorites.length === 0 && <span>Você não possui nenhum filme salvo!</span>}
            <ul className="favorites__container">
                {favorites.map((favorite) => (
                    <li className="favorites__container__card" key={favorite.id}>
                        <span>{favorite.title}</span>
                        <div>
                            <Link to={`/movies/${favorite.id}`}>Ver detalhes</Link>
                            <button onClick={() => deleteMovie(favorite.id)}>Remover</button>
                        </div>
                    </li>
                ))}
            </ul>
            <div>
                {teste.map((test) => (
                    <li className="favorites__container__card" key={test.id}>
                        <span>{test.name}</span>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default Favorites;