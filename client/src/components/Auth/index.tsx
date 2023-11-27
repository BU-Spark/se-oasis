import React, { Component } from "react";
import { auth } from "../../utils/firebaseAuth";
import { Grid, Typography } from "@mui/material";

interface AuthHoCPropsInterface {
    children: React.ReactNode;
}

interface AuthStateInterface {
    waiting: boolean;
    authorised: boolean;
}

class Auth extends Component<AuthHoCPropsInterface, AuthStateInterface> {
    constructor(props: AuthHoCPropsInterface) {
        super(props);

        this.state = { waiting: true, authorised: false };
    }

    componentDidMount(): void {
        auth.onAuthStateChanged((authenticate) => {
            if (!authenticate) {
                this.setState({ waiting: false, authorised: false });
            } else {
                this.setState({ waiting: false, authorised: true });
            }
        });
    }

    render() {
        const { waiting, authorised } = this.state;
        return (
            <>
                {waiting && (
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        style={{ height: "100vh", width: "100%" }}
                    >
                        <Grid item>
                            <Typography variant="h4">
                                Please wait while we check you authorization
                            </Typography>
                        </Grid>
                    </Grid>
                )}
                {!waiting && !authorised && (
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        style={{ height: "100vh", width: "100%" }}
                    >
                        <Grid item>
                            <Typography variant="h4">
                                Sorry!! We could not authorise you mate. Sign In
                                again maybe?
                            </Typography>
                        </Grid>
                    </Grid>
                )}
                {!waiting && authorised && this.props.children}
            </>
        );
    }
}

export default Auth;
