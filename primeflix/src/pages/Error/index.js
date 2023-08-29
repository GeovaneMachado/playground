import './Error.css';
import {Link} from 'react-router-dom';

function Index(){
    return(
        <div className={"error"}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Sorry, but the page you are looking for does not exist, have been removed, name changed or is temporarily unavailable.</p>

            <Link to="/">Go to homepage</Link>
        </div>
    )
}

export default Index;