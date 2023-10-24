const hapi = require("@hapi/hapi");

const init = async () => {
    const server = hapi.server({ port: 3000, host: "localhost" });

    server.route({
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return "Hello World!";
        },
    });
    await server.start();
    console.log("server is running on %s", server.info.uri);
};

init();
