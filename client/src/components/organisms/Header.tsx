import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TelegramIcon from "@mui/icons-material/Telegram";
import { connect } from "react-redux";

import { logout } from "../../ducks/actions/auth-actions";
import history from "../../history";


type HeaderType = {
    isAdmin?: boolean;
    logout: () => void;
}

const Header = ({ isAdmin, logout }: HeaderType) => {
    const logMeOut = () => {
        logout();
        history.push("/");
    };

    return (
        <AppBar position="static" style={{ marginBottom: 20 }}>
            <Toolbar style={{ justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <TelegramIcon />
                    <Typography variant="h6">IXChat</Typography>
                </div>
                <div>
                    {isAdmin && (
                        <Button color="inherit" onClick={() => history.push("/register")}>
                            Create User
                        </Button>
                    )}
                    <Button
                        color="inherit"
                        onClick={() => logMeOut()}
                        style={{ marginLeft: 20 }}
                    >
                        Logout
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default connect(
    null,
    { logout }
)(Header);