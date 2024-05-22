import { Link } from 'react-router-dom';
import "./../styles/Navbar.css"

const Navbar = () => {
    return (
        <nav>
            <Link to="/" className='nav-link'>Inicial</Link>
            <Link to="/afaculdade" className='nav-link'>A faculdade</Link>
            <Link to="/dpolgpd" className='nav-link'>dpolgpd</Link>
            <Link to="/noticias" className='nav-link'>Noticias</Link>
        </nav>
    )
}

export default Navbar