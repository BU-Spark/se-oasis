// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button, TextField, Stack, Container, Paper } from "@mui/material";
import React, { Component } from "react";
import { Avatar } from "@mui/joy";
import { FaPencilAlt } from "react-icons/fa";

interface Profilepageprops {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

class ProfilePage extends Component<Profilepageprops> {
    render() {
        const { firstName, lastName, email, phone } = this.props;

        return (
            <Container maxWidth="md">
                <Paper
                    elevation={3}
                    style={{ padding: "20px", marginTop: "20px" }}
                >
                    <Stack spacing={2} alignItems="center">
                        <Avatar
                            alt="Profile Icon"
                            src="placeholder-icon.png"
                            sx={{ width: 100, height: 100 }}
                        />

                        <label htmlFor="icon-button-file">
                            <input
                                style={{ display: "none" }}
                                accept="image/*"
                                id="icon-button-file"
                                type="image"
                            />
                            <Button
                                variant="outlined"
                                component="span"
                                startIcon={<FaPencilAlt />}
                            >
                                Change Picture
                            </Button>
                        </label>

                        <form style={{ width: "100%" }}>
                            <TextField
                                label="First Name"
                                value={firstName}
                                fullWidth
                                variant="outlined"
                                disabled
                                margin="normal"
                            />
                            <TextField
                                label="Last Name"
                                value={lastName}
                                fullWidth
                                variant="outlined"
                                disabled
                                margin="normal"
                            />
                            <TextField
                                label="Email"
                                value={email}
                                fullWidth
                                variant="outlined"
                                disabled
                                margin="normal"
                            />
                            <TextField
                                label="Phone"
                                value={phone}
                                fullWidth
                                variant="outlined"
                                disabled
                                margin="normal"
                            />

                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                style={{ marginTop: "20px" }}
                            >
                                Save Changes
                            </Button>
                        </form>
                    </Stack>
                </Paper>
            </Container>
        );
    }
}

export default ProfilePage;
