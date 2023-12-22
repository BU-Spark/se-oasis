module.exports = {
    app: {
        name: "Oasis Wellbeing Backend Server",
        connection: {
            host: process.env.SERVER_HOST || "0.0.0.0",
            port: process.env.SERVER_PORT || "5675",
        },
    },
};
