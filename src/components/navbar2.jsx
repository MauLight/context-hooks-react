import React, { useContext } from 'react';
import { AuthContext } from '../contexts/authcontext';
import { ThemeContext } from '../contexts/themeContext';

const Navbar2 = () => {

    const {isAuthenticated, auth} = useContext(AuthContext);
    const {isLight, light, dark} = useContext(ThemeContext);
    const theme = isLight ? light : dark;

    return (
        <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Context App</h1>
            <div onClick={auth}>
                {
                    isAuthenticated ? 'Logged in' : 'Logged out'
                }
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar2;