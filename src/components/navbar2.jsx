import React, { Component } from 'react';
import { AuthContext } from '../contexts/authcontext';
import { ThemeContext } from '../contexts/themeContext';

class Navbar2 extends Component {

    render() {

        return (
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                    console.log(authContext);
                    const { isAuthenticated, auth } = authContext;
                    const { isLight, light, dark } = themeContext;
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
                    )
                }
                }

                </ThemeContext.Consumer>
            )}

            </AuthContext.Consumer>
        );
    }
};

export default Navbar2;