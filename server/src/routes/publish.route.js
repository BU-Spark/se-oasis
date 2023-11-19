import { publishMessage } from "./../utils/pubHelper";

const PublishRoute = {
    path: "/publish",
    method: "POST",
    config: {
        description:
            "This is the Route used to publish messages to Topics in Pub/Sub",
        tags: ["api", "publishRoute", "backendPublisher"],
    },
    handler: async (request, h) => {
        console.log("Api reached: ", { payload: request.payload });
        const result = await publishMessage(
            request.payload.topicId,
            request.payload.data
        );
        return h.response({ message: "Successful" }).code(200);
    },
};

export default [PublishRoute];
