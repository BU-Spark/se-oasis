// publishRoute.test.js

import Hapi from "@hapi/hapi";
import Inert from "@hapi/inert";
import publishRoute from "./../../src/routes/publish.route";

jest.mock("./../utils/pubHelper", () => ({
    publishMessage: jest.fn(),
}));

describe("Publish Route", () => {
    let server;

    beforeAll(async () => {
        server = new Hapi.Server();
        await server.register(Inert);
        await server.route(publishRoute);
        await server.start();
    });

    afterAll(async () => {
        await server.stop();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should publish a message successfully", async () => {
        const mockPublishMessage = jest.requireMock(
            "./../utils/pubHelper"
        ).publishMessage;
        mockPublishMessage.mockResolvedValueOnce("Success");

        const payload = {
            topicId: "userRegistered",
            data: "Test Data",
        };

        const response = await server.inject({
            method: "POST",
            url: "/publish",
            payload,
        });

        expect(response.statusCode).toBe(200);
        expect(response.result).toEqual({ message: "Successful" });

        expect(mockPublishMessage).toHaveBeenCalledWith(
            payload.topicId,
            payload.data
        );
    });
});
