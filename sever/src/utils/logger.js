import config from "config";
import bunyan from "bunyan";

const levelMap = {
    development: "trace",
    test: "error",
    production: "info",
};

const bunyanLogger = bunyan.createLogger({
    name: config.get("app.name"),
    streams: [
        {
            level: levelMap[config.util.getEnv("NODE_ENV")],
            stream: process.stdout,
        },
    ],
});

global.logger = bunyanLogger;

export default bunyanLogger;
