import {Link} from 'react-router-dom';

function Home() {
    return (
        <div className="container">
            <h1>Welcome Home Page</h1>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Home;