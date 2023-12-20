import React from "react";
import { useNavigate } from "react-router";

interface GetInTouchProps {
    heading: string;
    message: string;
    email: string;
}

const GetInTouch: React.FC<GetInTouchProps> = ({ heading, message, email }) => {
    const navigate = useNavigate();

    const handleAboutClick = () => {
        navigate("/about");
    };
    return (
        <>
            <h2
                className="display-4 pb-3 text-center"
                onClick={() => handleAboutClick()}
            >
                {heading}
            </h2>
            <p className="lead text-center pb-3">
                {message},{" "}
                <a className="text-decoration-none" href={`mailto:${email}`}>
                    {email}
                </a>
                .
            </p>
        </>
    );
};

export default GetInTouch;
