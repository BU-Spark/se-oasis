import config from "config";
import HapiSwagger from "hapi-swagger";
import broker from "./microservices";
import Routes from "./routes";
import logger from "./utils/logger";
import hapiSwaggerOptions from "./utils/hapiSwaggerOptions";
const hapi = require("@hapi/hapi");

const server = new Hapi.Server({ port: 3000, host: "localhost" });

server.ext([
    {
        type: "onPreStart",
        method: async (server) => {
            try {
                broker.loadservices("${__dirname}/microservices");
                await broker.start();
                server.decorate("request", "broker", broker);
                return server;
            } catch (error) {
                logger.error("microservices start error :", error);
                process.exit(251);
            }
        },
    },
]);

await server.start();
console.log("server is running on %s", server.info.uri);
