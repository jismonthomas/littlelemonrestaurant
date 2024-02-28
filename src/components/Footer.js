import logo from '../images/footer-logo.png';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <img src={logo} alt="little lemon logo" />

                <div>
                    <h2>Navigation</h2>
                    <ul>
                        <li>
                            <a href="/#">Home</a>
                        </li>
                        <li>
                            <a href="/#">About</a>
                        </li>
                        <li>
                            <a href="/#">Menu</a>
                        </li>
                        <li>
                            <a href="/#">Reservations</a>
                        </li>
                        <li>
                            <a href="/#">Contact</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2>Contact</h2>
                    <ul>
                        <li>line 1</li>
                        <li>line 2</li>
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
