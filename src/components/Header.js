import { Link } from 'react-router-dom';
import headerImage from '../images/restauranfood.jpg';

const Header = () => {
    return (
        <header className="home">
            <div className="container">
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        we are a family owned Mediterranean restaurant, focused
                        on traditional recipes served with a modern twist.
                    </p>
                    <Link to={`/reservation`}>Reserve Table</Link>
                </div>
                <div className="image-container">
                    <img
                        src={headerImage}
                        alt="restaurant server with a food tray"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
