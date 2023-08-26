import {Link} from 'react-router-dom';
function Contact() {
  return (
    <div>
        <h1>Contact</h1>
        <p>Phone: 123456789</p>
        <Link to="/">Home</Link><br />
        <Link to="/about">About</Link>
    </div>
  );
}

export default Contact;
