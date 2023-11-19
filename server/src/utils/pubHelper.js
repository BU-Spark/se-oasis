import { PubSub } from "@google-cloud/pubsub";
import googleCreds from "./../../config/googleCredentials.json";

export const publishMessage = async (topicNameOrId, data) => {
    const pubSubClient = new PubSub(googleCreds);
    const dataBuffer = Buffer.from(JSON.stringify(data));

    try {
        const messageId = await pubSubClient
            .topic(
                `projects/spark-se-oasis-wellbeing-bu/topics/${topicNameOrId}`
            )
            .publishMessage({ data: dataBuffer });

        return `Message Published: ${messageId}`;
    } catch (error) {
        console.error(`Received error while publishing: ${error.message}`);
        return "error";
    }
};
