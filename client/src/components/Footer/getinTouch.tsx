import React from "react";

interface GetInTouchProps {
    heading: string;
    message: string;
    email: string;
}

const GetInTouch: React.FC<GetInTouchProps> = ({ heading, message, email }) => {
    return (
        <>
            <h2 className="display-4 pb-3 text-center">{heading}</h2>
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
