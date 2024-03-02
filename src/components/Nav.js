import logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="mainNavigation">
            <div className="container">
                <Link to="/">
                    <img src={logo} alt="little lemon logo" />
                </Link>

                <ul>
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
