import React, { Component } from 'react';
import { ThemeContext } from '../contexts/themeContext';

class ThemeToggle extends Component {
    state = {}
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { toggle } = context;

                return (
                    <button className='btn' onClick={toggle}>Toogle Theme</button>
                )

            }}
            </ThemeContext.Consumer>

        );
    }
}

export default ThemeToggle;