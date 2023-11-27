import React, { useEffect } from "react";
import CalendarComponent from "../Calendar";
import { Grid } from "@mui/material";

import { auth } from "../../utils/firebaseAuth";
import { useNavigate } from "react-router";

// import logo from "./../../assests/Logo.png";
//import { navbarStyle, logoContainerStyle, logoStyle } from "./styles";

const LandingPage: React.FunctionComponent = () => {
    const navigate = useNavigate();

    useEffect(() => {
        console.log("useEffect called!");
        auth.onAuthStateChanged((authenticate) => {
            console.log({ authenticate });
            if (!authenticate) {
                navigate("/");
            }
        });
    }, []);

    return (
        <Grid
            xs={10}
            // display="flex"
            // align-items="center"
            // justifyContent="center"
            bgcolor={"#f5ddc1"}
        >
            <CalendarComponent />
        </Grid>
    );
};

export default LandingPage;
