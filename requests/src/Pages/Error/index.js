import { Link } from 'react-router-dom';
function Error() {
  return (
    <div>
      <h1>Not found</h1>
        <Link to="/">Home</Link><br />
        <Link to="/about">About</Link><br />
        <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Error;