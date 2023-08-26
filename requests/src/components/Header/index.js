import { Link } from 'react-router-dom';
function Header() {
  return (
    <header>
        <h1>Requests</h1>
        <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </header>
  );
}

export default Header;
