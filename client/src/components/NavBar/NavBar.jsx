import { Link } from 'react-router-dom';
import './NavBar.scss'; // Importa estilos de la NavBar

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Landing Page</Link>
        </li>
        <li className="nav-item">
          <Link to="/home" className="nav-link">Home</Link>
        </li>
        {/* Añade más enlaces según tus necesidades */}
      </ul>
    </nav>
  );
};

export default NavBar;
