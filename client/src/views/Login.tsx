import React from "react";
import Typography from "@mui/material/Typography";

import { LoginContainer } from "../components/organisms/LoginContainer";
import { LoginViewStyle } from "./styles/LoginStyles";
import { useAuth } from "../context/AuthProvider";
import history from "../history";

export type AuthContextType = {
    login: (username: string, password: string) => Promise<void>,
    isLoading: boolean
}

const Login = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { login, isLoading }: AuthContextType = useAuth();

    const handleLogin = async(username: string, password: string) => {
        await login(username, password);
        history.push("/home");
    };

    return(
        <div style={LoginViewStyle}>
            <Typography
                variant="h3"
                style={{ marginRight: "20px" }}
            >
                IXChat
            </Typography>
            <LoginContainer onLogin={handleLogin} isLoading={isLoading}/>
        </div>
    );
};

export default Login;