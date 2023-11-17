require("dotenv").config();
require("./src/server");
// require("./src/utils/logger");

// NodeJS Events
// Catch Unhandled Rejections Globally
process.on("unhandledRejection", (reason, p) => {
    logger.error(
        "\n [PromiseRejection] Unhandled Rejection at : ",
        p,
        "\nReason : ",
        reason,
        "\n"
    );
    process.exit(1);
});

// On Ctrl + C Signal Event
process.on("SIGINT", () => {
    logger.fatal(`Forceful Server Shutdown detected !`);
    process.exit(1);
});
