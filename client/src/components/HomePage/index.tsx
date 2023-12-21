import { Button, CardMedia, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

// Asset imports
import neonBg from "./../../assests/oasis.jpg";
import homePgBg2 from "./../../assests/workOasis.jpg";

const HomePage = () => {
    const navigate = useNavigate(); // Hook for navigation

    const handleSignUpClick = () => {
        navigate("/register"); // Navigate to the signup page
    };

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{
                // height: "90vh",
                paddingRight: "90px",
                paddingLeft: "90px",
            }}
        >
            <Grid
                item
                xs={10}
                sx={{
                    height: "90vh",
                    padding: "40px 24px 40px",
                }}
            >
                <Paper
                    elevation={0}
                    style={{ borderRadius: "10px" }}
                    sx={{
                        height: "65vh",
                        backgroundImage: `url(${neonBg})`,
                        backgroundSize: "cover",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        boxSizing: "border-box",
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            color: "black",
                            fontWeight: "bold",
                            fontFamily: "cursive",
                        }}
                    >
                        What&apos;s on your mind?
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{
                            color: "black",
                            mb: 4,
                            textAlign: "center",
                        }}
                    >
                        An AI-powered journal for mental health and personal
                        growth.
                    </Typography>
                    <Button
                        variant="contained"
                        style={{
                            fontSize: "20px",
                            padding: "10px 40px",
                            borderRadius: "5px",
                            margin: "10px 0px",
                            cursor: "pointer",
                            position: "relative",
                        }}
                        sx={{
                            backgroundColor: "white",
                            color: "#143155",
                        }}
                        onClick={handleSignUpClick} // Added onClick event handler for redirection
                    >
                        Try Oasis Free
                    </Button>
                </Paper>
            </Grid>

            <Grid
                item
                container
                xs={10}
                sx={{
                    height: "90vh",
                    padding: "40px 24px 40px",
                }}
            >
                <Grid item container sx={{ height: "35vh" }} spacing={3}>
                    <Grid
                        item
                        xs={4}
                        alignItems={"center"}
                        justifyContent={"center"}
                    >
                        <div
                            style={{
                                paddingBottom: "100%",
                                display: "block",
                                position: "relative",
                            }}
                        >
                            <CardMedia
                                component={"img"}
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    height: "auto",
                                    objectFit: "scale-down",
                                }}
                                image={`${homePgBg2}`}
                            />
                        </div>
                    </Grid>
                    <Grid
                        item
                        container
                        xs={8}
                        spacing={2}
                        alignItems={"center"}
                        justifyContent={"center"}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                color: "black",
                                textAlign: "center",
                                fontFamily: "-moz-initial",
                            }}
                        >
                            Drop everything and <br /> let Oasis do the work
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ color: "black", textAlign: "center" }}
                        >
                            Your content goes here. You can add text buttons or
                            any other content you need.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default HomePage;
