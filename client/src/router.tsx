import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./components/User/Signin";
import HomePage from "./components/HomePage";
import Signup from "./components/User/Signup";
import Navbar from "./components/Navbar";

const Routers = () => (
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
        </Routes>
    </Suspense>
);

export default Routers;
