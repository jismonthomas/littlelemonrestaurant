import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <span
                className="mobileMenuButton"
                onClick={() => setMenuOpen((state) => !state)}>
                MENU
            </span>
            {menuOpen ? (
                <div
                    className="mobileMenuWrapper"
                    onClick={(e) => {
                        e.preventDefault();
                        setMenuOpen(false);
                    }}>
                    <ul className="mobileMenu">
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
            ) : null}
        </>
    );
};

export default MobileMenu;
