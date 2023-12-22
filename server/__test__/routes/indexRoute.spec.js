const Hapi = require("@hapi/hapi");
const Inert = require("@hapi/inert");
import indexRoute from "./../../src/routes/index";

describe("Index Route", () => {
    let server;

    beforeAll(async () => {
        server = new Hapi.Server();
        await server.register(Inert);
        await server.route(indexRoute);
        await server.start();
    });

    afterAll(async () => {
        await server.stop();
    });

    it("should return a welcome message", async () => {
        const response = await server.inject({
            method: "GET",
            url: "/api/v1/",
        });

        expect(response.statusCode).toBe(200);
        expect(response.result).toEqual({
            message: "Hi There! Welcome :)",
            writeTo: "Oasis Email",
        });
    });
});
