import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
// import Navbr from "../Navbar";
// import homepagebg1 from "./../../assests/Homepagebg3.png";
import neonBg from "./../../assests/Homepageyellow.jpeg";
//bright-yellow-neon-green-wallpaper-preview.jpg";
import homePgBg2 from "./../../assests/Emotions.png";
<<<<<<< HEAD
import homePgBg3 from "./../../assests/Phone.png";
=======
>>>>>>> 5d93f98 (Home Page Code push)

// function HomePage() {
//     return (
//         <>
//             <Grid
//                 container
//                 xs={12}
//                 direction="row"
//                 justifyContent="center"
//                 alignItems="center"
//                 spacing={1}
//                 style={{
//                     height: "60vh",
//                     width: "100%",
//                     marginLeft: "0.40%",
//                     marginTop: "0.5%",
//                 }}
//             >
//                 <Grid
//                     item
//                     xs={12}
//                     style={{
//                         paddingTop: "1%",
//                         paddingLeft: "2%",
//                         paddingRight: "2%",
//                         paddingBottom: "0%",
//                         // backgroundColor: "#bdd9d8",
//                         // backgroundRepeat: "no-repeat",
//                         // backgroundSize: "cover",
//                     }}
//                 >
//                     <Paper
//                         style={{
//                             backgroundSize: "cover",
//                             height: "80vh",
//                             width: "100%",
//                             backgroundPosition: "100%",
//                             backgroundRepeat: "no-repeat",
//                             borderRadius: "8px",
//                             marginTop: 0,
//                         }}
//                     >
//                         <Grid
//                             container
//                             direction="row"
//                             justifyContent="center"
//                             alignItems="center"
//                             sx={{
//                                 height: "100%",
//                                 width: "100%",
//                             }}
//                         >
//                             <Grid
//                                 item
//                                 container
//                                 alignItems="center"
//                                 justifyContent="center"
//                                 sx={{
//                                     height: "100%",
//                                     width: "100%",
//                                     backgroundImage: `url(${neonBg})`,
//                                     backgroundSize: "cover",
//                                     borderRadius: "8px",
//                                 }}
//                             >
//                                 <Grid item>
//                                     <center>
//                                         <h1
//                                             style={{
//                                                 fontFamily: "Outfit,sans-serif",
//                                             }}
//                                         >
//                                             Whats on your Mind?
//                                         </h1>
//                                         <h3>
//                                             An AI powered journal to metal
//                                             health and personal growth
//                                         </h3>
//                                         <Button
//                                             variant="contained"
//                                             // sx={{ mt: 1.8, mb: 2 }}
//                                             style={{
//                                                 display: "flex",
//                                                 justifyContent: "right",
//                                                 backgroundColor: "white",
//                                                 color: "#000000",
//                                             }}
//                                         >
//                                             Try Oasis free -{">"}
//                                         </Button>
//                                     </center>
//                                 </Grid>
//                             </Grid>
//                         </Grid>
//                     </Paper>
//                 </Grid>

//                 <Grid
//                     item
//                     container
//                     xs={12}
//                     // style={{ height: "80vh", width: "100%" }}
//                 >
//                     <Paper
//                         style={{
//                             backgroundSize: "cover",
//                             height: "80vh",
//                             width: "101%",
//                             backgroundPosition: "100%",
//                             backgroundRepeat: "no-repeat",
//                             borderRadius: "8px",
//                             marginTop: 0,
//                             marginLeft: "-14px",
//                         }}
//                     >
//                         <Grid
//                             container
//                             direction="row"
//                             justifyContent="center"
//                             alignItems="center"
//                             sx={{
//                                 height: "100%",
//                                 width: "100%",
//                             }}
//                         >
//                             <Grid
//                                 item
//                                 container
//                                 direction="column"
//                                 alignItems="flex-end"
//                                 justifyContent="center"
//                                 sx={{
//                                     backgroundImage: `url(${homePgBg2})`,
//                                     // backgroundSize: "100% 100%",
//                                     // width: "1026", // Set the desired width
//                                     // height: "324",
//                                     height: "100%",
//                                     width: "100%",
//                                     backgroundSize: "cover",
//                                     borderRadius: "8px",
//                                 }}
//                             >
//                                 <Grid
//                                     item
//                                     columnSpacing={2}
//                                     sx={{ paddingRight: "25%" }}
//                                 >
//                                     <Typography
//                                         variant="h4"
//                                         sx={{
//                                             textAlign: "center",
//                                             color: "#FFFFFF",
//                                         }}
//                                     >
//                                         Your Title
//                                     </Typography>
//                                 </Grid>
//                                 <Grid
//                                     item
//                                     columnSpacing={2}
//                                     sx={{ paddingRight: "10%" }}
//                                 >
//                                     <Typography
//                                         variant="body1"
//                                         sx={{
//                                             textAlign: "center",
//                                             color: "#FFFFFF",
//                                         }}
//                                     >
//                                         Your content goes here. You can add
//                                         text, buttons, or any other content you
//                                         need.
//                                     </Typography>
//                                 </Grid>
//                             </Grid>
//                         </Grid>
//                     </Paper>
//                 </Grid>
//             </Grid>
//         </>
//     );
// }

// export default HomePage;

// //  {/* Right side with content */}
// //  <Grid item xs={6} sx={{ padding: "20px" }}>

// import React from "react";
// import { Grid, Paper, Typography, Button } from "@mui/material";
// import neonBg from "./../../assets/HomepagebgBlue.jpg";
// import homePgBg2 from "./../../assets/Emotions.png";

// import React from "react";
// import { Grid, Paper, Typography, Button } from "@mui/material";
// import neonBg from "./../../assets/HomepagebgBlue.jpg";
// import homePgBg2 from "./../../assets/Emotions.png";

const HomePage = () => {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{
                height: "100vh",
                paddingRight: "90px",
                paddingLeft: "90px",
            }}
        >
            <Grid
                item
                xs={12}
                sx={{
                    height: "100%",
                    padding: "40px 24px 40px",
                }}
            >
                <Paper
                    style={{ borderRadius: "15px" }}
                    sx={{
                        height: "100%",
                        backgroundImage: `url(${neonBg})`,
                        backgroundSize: "cover",
<<<<<<< HEAD
=======
                        //borderRadius: "10px",
>>>>>>> 5d93f98 (Home Page Code push)
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        boxSizing: "border-box",
                    }}
                >
                    <Typography variant="h1" sx={{ color: "black", mb: 2 }}>
                        Whats on your mind?
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{ color: "black", mb: 4, textAlign: "center" }}
                    >
                        An AI-powered journal for mental health and personal
                        growth.
                    </Typography>
                    <Button
                        variant="contained"
                        style={{
                            fontSize: "20px",
                            padding: "10px 60px",
                            borderRadius: "5px",
                            margin: "10px 0px",
                            cursor: "pointer",
                            position: "relative",
                        }}
                        sx={{
                            backgroundColor: "white",
                            color: "#143155",
                        }}
                    >
                        Try Oasis Free
                    </Button>
                </Paper>
            </Grid>

            <Grid
                item
                xs={12}
                sx={{
                    height: "100%",
                    mt: 2,
                    padding: "20px 24px 40px",
                }}
            >
                <Paper
                    sx={{
                        height: "100%",
                        backgroundImage: `url(${homePgBg2})`,
                        backgroundSize: "cover",
                        borderRadius: "15px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        boxSizing: "border-box",
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            alignItems: "right",
                            justifyContent: "right",
                            color: "white",
                            mb: 2,
                            textAlign: "right",
                        }}
                    >
                        Your Title
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: "white", mb: 4, textAlign: "right" }}
                    >
                        Your content goes here. You can add text buttons or any
                        other content you need.
                    </Typography>
                </Paper>
            </Grid>

            <Grid
                item
                xs={12}
                sx={{
                    height: "100%",
                    mt: 2,
                    padding: "20px 24px 40px",
                }}
            >
                <Paper
                    sx={{
                        height: "100%",
                        Image: `url(${homePgBg3})`,

                        borderRadius: "15px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        boxSizing: "border-box",
                    }}
                >
                    <div>
                        <img src={homePgBg3} />
                    </div>
                    <Typography
                        variant="h3"
                        sx={{
                            color: "black",
                            mb: 2,
                            textAlign: "right",
                            justifyContent: "right",
                            alignItems: "right",
                        }}
                    >
                        Your Title
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: "white", mb: 4, textAlign: "right" }}
                    >
                        {/* Your content goes here. You can add text, buttons, or any other content you need. */}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default HomePage;
