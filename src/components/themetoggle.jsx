import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext';

const ThemeToggle = () => {

    const { toggle } = useContext(ThemeContext)

    return (
        <button className='btn btn-outline-info' onClick={toggle}>Toogle Theme</button>
    );
}

export default ThemeToggle;