import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./components/User/Signin";
import HomePage from "./components/HomePage";
import Signup from "./components/User/Signup";
import AboutPage from "./components/AboutPage";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Auth from "./components/Auth";

const Routers: React.FC = () => (
    <Suspense
        fallback={
            <>
                <Navbar />
                Loading
            </>
        }
    >
        <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
                path="/home"
                element={
                    <Auth>
                        <LandingPage />
                    </Auth>
                }
            />
        </Routes>
        <>
            <Footer />
        </>
    </Suspense>
);

export default Routers;
