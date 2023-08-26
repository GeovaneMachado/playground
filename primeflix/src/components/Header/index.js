import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link className="logo" to="/">Primeflix</Link>
            <Link className="favorites" to="/favorites">Favoritos</Link>
        </header>
    )
}

export default Header;