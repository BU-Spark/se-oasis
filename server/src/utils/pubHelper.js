import { PubSub } from "@google-cloud/pubsub";

export const publishMessage = async (topicNameOrId, data) => {
    const pubSubClient = new PubSub();
    const dataBuffer = Buffer.from(JSON.stringify(data));

    try {
        const messageId = await pubSubClient
            .topic(`projects/se-oasis/topics/${topicNameOrId}`)
            .publishMessage({ data: dataBuffer });

        return `Message Published: ${messageId}`;
    } catch (error) {
        console.error(`Received error while publishing: ${error.message}`);
        return "error";
    }
};
