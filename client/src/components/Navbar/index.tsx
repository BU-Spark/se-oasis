import React from "react";
// { useContext, useState, useEffect }
import {
    Toolbar,
    IconButton,
    Grid,
    Box,
    AppBar,
    Button,
    Stack,
} from "@mui/material";
// import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";

function Navbar() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/signin");
        // throw new Error("Function not implemented.");
        return;
    };

    const handleSignUp = () => {
        navigate("/register");
        // throw new Error("Function not implemented.");
        return;
    };

    return (
        <>
            <Grid container xs={12}>
                <Grid item xs={12}>
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static">
                            {/* <Paper
                                style={{
                                    border: "none",
                                    width: "100%",
                                    height: "4em",
                                    backgroundColor: "#03326c",
                                }}
                            /> */}
                            <Toolbar>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                >
                                    <MenuIcon />
                                </IconButton>

                                {/*<Typography
                                    variant="h6"
                                    component="div"
                                    sx={{ flexGrow: 1 }}
                                ></Typography> */}

                                <Stack direction="row" spacing={2}>
                                    <Button
                                        title="login"
                                        variant="contained"
                                        // sx={{ mt: 1.8, mb: 2 }}
                                        style={{
                                            display: "flex",
                                            justifyContent: "right",
                                        }}
                                        onClick={handleLogin}
                                    >
                                        Login
                                    </Button>
                                    <Button
                                        title="SignUp"
                                        variant="contained"
                                        // sx={{ mt: 1.8, mb: 2 }}
                                        style={{
                                            display: "flex",
                                            justifyContent: "right",
                                        }}
                                        onClick={handleSignUp}
                                    >
                                        SignUp
                                    </Button>
                                </Stack>
                            </Toolbar>
                        </AppBar>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Navbar;
