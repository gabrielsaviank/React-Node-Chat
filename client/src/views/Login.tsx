import React from "react";
import Typography from "@mui/material/Typography";

import { LoginContainer } from "../components/organisms/LoginContainer";
import { LoginViewStyle } from "./styles/LoginStyles";

const Login = () => {
    return(
        <div style={LoginViewStyle}>
            <Typography
                variant="h3"
                style={{ marginRight: "20px" }}
            >
                IXChat
            </Typography>
            <LoginContainer/>
        </div>
    );
};

export default Login;