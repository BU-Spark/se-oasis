import { ServiceBroker } from "moleculer";

export default new ServiceBroker({
    namespace: process.env.NODE_ENV || "development",
    logger: global.logger,
    logLevel: "debug",
});
