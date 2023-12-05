import React, { useState } from "react";
import CalendarComponent from "../Calendar";
import {
    Grid,
    Button,
    Container,
    Popover,
    Box,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ReactEmojiRender from "react-emoji-render";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile"; // Material-UI file icon
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied"; // Material-UI smiley icon

const LandingPage: React.FC = () => {
    const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleEmojiSelect = (emoji: string) => {
        setSelectedEmoji(emoji);
        handleClose();
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onUpload = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                style={{ minHeight: "80vh", backgroundColor: "#f5ddc1" }}
            >
                <CalendarComponent />
            </Grid>

            <Container maxWidth="md" style={{ marginTop: "24px" }}>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    {/* File Upload Button */}
                    <Button
                        variant="contained"
                        color="primary"
                        component="label"
                        startIcon={<InsertDriveFileIcon />}
                    >
                        Upload File
                        <input
                            type="file"
                            style={{ display: "none" }}
                            onChange={onUpload}
                        />
                    </Button>

                    {/* Select Emoji Button */}
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClick}
                        startIcon={<SentimentVerySatisfiedIcon />}
                    >
                        Select Emoji
                    </Button>
                </Box>

                {/* Spacing */}
                <Box mt={2} />

                {/* Display the selected emoji */}
                {selectedEmoji && (
                    <Box mt={2}>
                        <Typography variant="h5">Selected Emoji:</Typography>
                        <ReactEmojiRender text={selectedEmoji} />
                    </Box>
                )}

                {/* Spacing */}
                <Box mt={2} />

                {/* Navigation */}
                <Link to="/next-page">
                    <span style={{ fontSize: "24px" }}>➡️</span>
                </Link>

                {/* Emoji Popover */}
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                >
                    <Box p={2}>
                        {/* You can use any other emoji selection component here */}
                        {/* For simplicity, I'm using a static set of emojis */}
                        <span onClick={() => handleEmojiSelect("😊")}>😊</span>
                        <span onClick={() => handleEmojiSelect("😂")}>😂</span>
                        <span onClick={() => handleEmojiSelect("👍")}>👍</span>
                        {/* Add more emojis as needed */}
                    </Box>
                </Popover>
            </Container>
        </>
    );
};

export default LandingPage;
