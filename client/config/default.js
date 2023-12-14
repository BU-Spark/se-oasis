module.exports = {
    app: {
        name: "Oasis Wellbeing Frontend Server",
        connection: {
            host: process.env.HOST || "127.0.0.1",
            port: process.env.PORT || "8085",
        },
    },
};
