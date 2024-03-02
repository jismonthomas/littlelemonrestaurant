import logo from '../images/footer-logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <img src={logo} alt="little lemon logo" />

                <div>
                    <h2>Navigation</h2>
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

                <div>
                    <h2>Contact</h2>
                    <ul>
                        <li>Little Lemon Restaurant</li>
                        <li>Chicago</li>
                    </ul>
                </div>

                <div>
                    <h2>Connect</h2>
                    <ul>
                        <li>
                            <a href="/#">Facebook</a>
                        </li>
                        <li>
                            <a href="/#">Instagram</a>
                        </li>
                        <li>
                            <a href="/#">Tiktok</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
