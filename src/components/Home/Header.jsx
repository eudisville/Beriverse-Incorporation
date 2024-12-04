import React, { useEffect } from 'react';
import Nav from '../Nav/Nav';
import './Header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {
    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);

    return (
        <div>
            <Nav />
            <header>
                <div className="header">
                    <div className="header-main" data-aos="fade-up">
                        <h1>
                            <span>Inspire and Transform</span> the World.
                        </h1>
                        <p>We work to enhance the world and human capacity through technology.</p>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;