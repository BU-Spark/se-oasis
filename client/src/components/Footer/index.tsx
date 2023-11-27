import React from "react";
import { Container } from "@mui/material";
import GetInTouch from "./getinTouch";
import getInTouch from "./../../config/config";

const Footer: React.FC = () => {
    const bgStyle = { backgroundColor: "#f5f5f5" };

    return (
        <footer
            style={{
                ...bgStyle,
                paddingTop: "5px",
                paddingBottom: "5px",
                paddingLeft: "20px",
                paddingRight: "20px",
                position: "relative",
                bottom: "0",
                width: "100%",
            }}
            className="mt-auto py-5 text-center "
        >
            <Container>
                <>
                    {getInTouch.show && (
                        <GetInTouch
                            heading={getInTouch.heading}
                            message={getInTouch.message}
                            email={getInTouch.email}
                        />
                    )}
                </>
            </Container>
        </footer>
    );
};

export default Footer;
