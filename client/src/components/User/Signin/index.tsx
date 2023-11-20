import React from "react";
import { LockOutlined } from "@mui/icons-material";
import {
    Container,
    CssBaseline,
    Box,
    Avatar,
    Typography,
    TextField,
    Button,
    Grid,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./../../../utils/firebaseAuth";
import { signInWithEmailAndPassword } from "firebase/auth";

import axios from "axios";

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password).then(
            (userCredential) => {
                console.log({ userCredential });

                axios
                    .post("http://127.0.0.1:5675/api/v1/publish", {
                        topicId: "userLogin",
                        data: {
                            email,
                        },
                    })
                    .then((response) => {
                        console.log({ response });
                    })
                    .catch((error) => {
                        console.log({ error });
                    });

                console.log(userCredential.user);
                // const stsTokenManager = userCredential.user.stsTokenManager;
                // localStorage.setItem(
                //     "token",
                //     JSON.stringify(userCredential.user.toJSON().stsTokenManager.accesstoken)
                // );
            }
        );
        // .catch((error) => {
        //     console.log({ error });
        // });
    };

    return (
        <>
            <Container maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        mt: 20,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
                        <LockOutlined />
                    </Avatar>
                    <Typography variant="h5">Login</Typography>
                    <Box sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />

                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => handleLogin()}
                        >
                            Login
                        </Button>
                        <Grid container justifyContent={"flex-end"}>
                            <Grid item>
                                <Link to="/register">
                                    Dont have an account? Register
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
}
export default Signin;
