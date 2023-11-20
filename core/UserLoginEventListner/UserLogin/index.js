const { Firestore } = require("@google-cloud/firestore");

exports.userLoginEventListner = async (event, context) => {
    const pubsubMessage = event.data;

    const messageData = JSON.parse(
        Buffer.from(pubsubMessage, "base64").toString()
    );

    await readAndUpdateFirestore("users", messageData);
};

async function readAndUpdateFirestore(collectionName, messageData) {
    try {
        console.log({ collectionName, email: messageData.email });
        const firestore = new Firestore();

        const usersCollection = firestore.collection(collectionName);
        const userDataSnapshot = await usersCollection
            .where("email", "==", messageData.email)
            .limit(1)
            .get();

        userDataSnapshot.forEach(async (userData) => {
            await firestore
                .collection(collectionName)
                .doc(userData.id)
                .set({ lastLogin: new Date() }, { merge: true });
        });
    } catch (error) {
        console.error("Error writing to Firestore:", error);
    }
}
