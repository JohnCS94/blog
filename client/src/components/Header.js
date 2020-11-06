import React from 'react';

import {useHistory} from 'react-router-dom';

function Header() {
    const history = useHistory();

    const go = (location) => {
        history.push(location);
    }

    return (
        <>
            <nav class="navbar navbar-default">
                <div class="container">
                    <div class="navbar-header">
                        <p class="navbar-brand">DAILY JOURNAL</p>
                    </div>
                    <ul class="nav navbar-nav navbar-right">
                        <li id="home" onClick={()=> go("/home")}>Home</li>
                        <li id="about" onClick={()=> go("/about")}>About</li>
                        <li id="contact" onClick={()=> go("/contact")}>Contact</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header;