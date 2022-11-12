import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

    const [theme, setTheme] = useState({
        isLight: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    })

    const toggleTheme = () => {
        setTheme({...theme, isLight: !theme.isLight })
    }

    return (
        <ThemeContext.Provider value={{ ...theme, toggle: toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
};

export default ThemeContextProvider;