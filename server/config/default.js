module.exports = {
    app: {
        name: "Oasis Wellbeing Backend Server",
        connection: {
            host: process.env.SERVER_HOST || "127.0.0.1",
            port: process.env.SERVER_PORT || "5675",
        },
    },
};
