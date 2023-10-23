import React from "react";
import Typography from "@mui/material/Typography";
import { connect } from "react-redux";

import { LoginContainer } from "../components/organisms/LoginContainer";
import { LoginViewStyle } from "./styles/LoginStyles";
import { login } from "../ducks/actions/auth-actions";


const Login = (state: any) => {

    const handleLogin = (username: string, password: string) => {
        state.login({ username, password });
    };

    return(
        <div style={LoginViewStyle}>
            <Typography
                variant="h3"
                style={{ marginRight: "20px" }}
            >
                IXChat
            </Typography>
            <LoginContainer onLogin={handleLogin}/>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {};
};

export default connect(mapStateToProps, { login })(Login);
