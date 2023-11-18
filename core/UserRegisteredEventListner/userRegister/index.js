const { Firestore } = require("@google-cloud/firestore");

exports.userRegisteredEventListner = async (event, context) => {
    const pubsubMessage = event.data;

    const messageData = JSON.parse(
        Buffer.from(pubsubMessage, "base64").toString()
    );

    await writeToFirestore("users", messageData);
};

async function writeToFirestore(collectionName, messageData) {
    try {
        const firestore = new Firestore();

        const documentRef = firestore.collection(collectionName).doc();

        // Write data to Firestore
        await documentRef.set({
            ...messageData,
            timestamp: new Date(),
        });

        console.log(`Data written to Firestore: ${messageData}`);
    } catch (error) {
        console.error("Error writing to Firestore:", error);
    }
}
