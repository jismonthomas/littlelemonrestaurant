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
                        Indulge in the Authentic Tastes of the Mediterranean at
                        Our Family-Owned Restaurant. Our Culinary Journey blends
                        Time-Honored Recipes with a Modern Touch, offering a
                        Fusion of Tradition and Innovation in Every Savory Dish.
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
