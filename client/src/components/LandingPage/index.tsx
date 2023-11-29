import React from "react";
import CalendarComponent from "../Calendar";
import { Grid } from "@mui/material";

// import logo from "./../../assests/Logo.png";
//import { navbarStyle, logoContainerStyle, logoStyle } from "./styles";

const LandingPage: React.FunctionComponent = () => {
    return (
        <Grid
            xs={10}
            display="flex"
            align-items="center"
            justifyContent="center"
            bgcolor={"#f5ddc1"}
        >
            <CalendarComponent />
        </Grid>
    );
};

export default LandingPage;
