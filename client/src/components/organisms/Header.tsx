import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import history from "../../history";
import TelegramIcon from "@mui/icons-material/Telegram";

export const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar style={{ justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <TelegramIcon />
                    <Typography variant="h6">IXChat</Typography>
                </div>
                <div>
                    <Button color="inherit" onClick={() => history.push("/home")}>
                        Create User
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => history.push("/home")}
                        style={{ marginLeft: 20 }}
                    >
                        Logout
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};