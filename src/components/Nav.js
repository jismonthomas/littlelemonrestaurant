import logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Nav = () => {
    return (
        <nav className="mainNavigation">
            <div className="container">
                <Link to="/">
                    <img src={logo} alt="little lemon logo" />
                </Link>

                <MobileMenu />

                <ul className="desktopMenu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/reservations">Reservations</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
