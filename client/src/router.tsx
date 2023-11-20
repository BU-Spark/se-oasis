import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./components/User/Signin";
import HomePage from "./components/HomePage";
import Signup from "./components/User/Signup";
import Navbar from "./components/Navbar";
import AboutPage from "./components/AboutPage";
import LandingPage from "./components/LandingPage";

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
            <Route path="/home" element={<LandingPage />} />
        </Routes>
    </Suspense>
);

export default Routers;
