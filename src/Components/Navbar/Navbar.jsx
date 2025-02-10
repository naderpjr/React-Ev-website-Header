import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='nav'>
            <div className="nav-logo">EV-olution</div>
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "nav-menu open" : "nav-menu"}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Explore</a></li>
                <li><a href="#">About</a></li>
                <li className='nav-contact'><a href="#">Contact</a></li>
            </ul>
        </div>
    );
};

export default Navbar;
