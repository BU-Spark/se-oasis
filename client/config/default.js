module.exports = {
    app: {
        name: "Oasis Wellbeing Frontend Server",
        connection: {
            host: process.env.HOST || "127.0.0.1",
            port: process.env.PORT || "8085",
        },
    },
    server: {
        connection: {
            protocol: process.env.SERVER_PROTOCOL || "http",
            host: process.env.SERVER_HOST || "127.0.0.1",
            port: process.env.SERVER_PORT || "5675",
        },
    },
};
