import logo from '../images/Logo.svg';

const Nav = () => {
    return (
        <nav className="mainNavigation">
            <a href="/">
                <img src={logo} alt="little lemon logo" />
            </a>

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
        </nav>
    );
};

export default Nav;
