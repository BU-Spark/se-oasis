module.exports = {
    app: {
        name: "Oasis Wellbeing Backend Server",
        connection: {
            host: process.env.APP_HOST || "127.0.0.1",
            port: process.env.APP_PORT || "5675",
        },
    },
};
