import React, { createContext, useContext, useState } from "react";

import Api from "../api/Api";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const login = async (username: string, password: string) => {
        try {
            setIsLoading(true);

            const response = await Api.post("/users/login", { username, password });

            const userData = response.data;


            setUser(userData);

            setIsLoading(false);
        } catch (error) {
            console.error("Login error:", error);

            setIsLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
    };

    const contextValue = {
        user,
        isLoading,
        login,
        logout,
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};