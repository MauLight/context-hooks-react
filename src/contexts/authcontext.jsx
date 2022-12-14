import React, { useState, createContext } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [auth, setAuth] = useState({
        isAuthenticated: false
    });

    const toggleAuth = () => {
        setAuth({ isAuthenticated: !auth.isAuthenticated })
    }

    return (
        <AuthContext.Provider value={{ ...auth, auth: toggleAuth }}>
            {props.children}
        </AuthContext.Provider>
    );

};

export default AuthContextProvider;

