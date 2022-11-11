import React, { Component, createContext } from "react";
import { ThemeContext } from "./themeContext";

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = { 
        isAuthenticated: false
     }
    
    toggleAuth = () => {
        this.setState({isAuthenticated: !this.state.isAuthenticated})
    }

    render() { 
        return (
            <AuthContext.Provider value={{...this.state, auth: this.toggleAuth}}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}
 
export default AuthContextProvider;

