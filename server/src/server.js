import Hapi from "@hapi/hapi";
import Inert from "@hapi/inert";
import Vision from "@hapi/vision";
import config from "config";
import HapiSwagger from "hapi-swagger";

import Routes from "./routes";
import logger from "./utils/logger";
import hapiSwaggerOptions from "./utils/hapiSwaggerOptions";

const server = new Hapi.Server({
    host: config.get("app.connection.host"),
    port: config.get("app.connection.port"),
    routes: {
        cors: {
            origin: ["*"],
            headers: ["Accept", "Content-Type"],
            credentials: true,
        },
    },
});

server
    .register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: hapiSwaggerOptions,
        },
    ])
    .then(() => server.initialize())
    .then(() => {
        logger.trace(`Total Routes Found:`, Routes.length);

        // Register All Routes
        Routes.forEach((route) => {
            route.path = "/api/v1" + route.path;
            server.route(route);
        });

        return server.start();
    })
    .then(() => {
        logger.info("Server running on %s", server.info.uri);
    })
    .catch((error) => {
        server.stop();
        logger.error(error);
        process.exit(255);
    });

export default server;
