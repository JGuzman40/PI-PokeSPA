import { Link } from 'react-router-dom';

import './NavBar.scss';

function NavBar() {
    return (
        <nav className='navbar'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link to="/home" className='nav_link'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/home/:id" className='nav_link'>Detail</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/create" className='nav_link'>Crear</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/" className='nav_link'>Salir</Link>
                </li>
                </ul>            
        </nav>
    )
}

export default NavBar;