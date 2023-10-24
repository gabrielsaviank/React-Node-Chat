import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { connect } from "react-redux";
import { Typography } from "@mui/material";

import { BaseButton } from "../components/atoms/BaseButton";
import { BaseInput }  from "../components/molecules/BaseInput";
import { Header } from "../components/organisms/Header";
import { createUser } from "../ducks/actions/auth-actions";
import history from "../history";

const Register = (state: any) => {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [admin, setAdmin] = useState(false);

    const handleRegister = async () => {
        state.createUser({
            username,
            name,
            password,
            admin,
            token: state.user.token
        });
    };

    return (
        <>
            <Header/>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
            >
                <Typography style={{ marginBottom: 30 }} variant="h4">IXChat Register User</Typography>
                <form>
                    <BaseInput
                        label="Username"
                        variant="outlined"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                    />
                    <BaseInput
                        label="Name"
                        variant="outlined"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        sx={{ marginTop: 2 }}
                    />
                    <BaseInput
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        sx={{ marginTop: 2 }}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={admin}
                                onChange={(e) => setAdmin(e.target.checked)}
                                color="primary"
                            />
                        }
                        label="Admin"
                    />
                    <BaseButton
                        variant={"contained"}
                        color={"primary"}
                        onClick={handleRegister}
                        text={"Register"}
                        sx={{ textAlign: "center", marginTop: 3 }}
                    />

                    <BaseButton
                        variant="contained"
                        color="warning"
                        onClick={() => history.push("/home")}
                        sx={{ textAlign: "center", marginTop: 3 }}
                        text={"Back"}
                    />
                </form>
            </Box>
        </>
    );
};

const mapStateToProps = (state: { auth: any}) => {
    return {
        user: state.auth.user,
    };
};

export default connect(
    mapStateToProps,
    { createUser }
)(Register);