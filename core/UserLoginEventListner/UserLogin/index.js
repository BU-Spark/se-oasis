const { Firestore } = require("@google-cloud/firestore");

exports.UserLoginEventListner = async (event, context) => {
    const pubsubMessage = event.data;

    const messageData = JSON.parse(
        Buffer.from(pubsubMessage, "base64").toString()
    );

    await readAndUpdateFirestore("users", messageData);
};

async function readAndUpdateFirestore(collectionName, messageData) {
    const usersCollection = db.collection(collectionName);
    const userData = await usersCollection
        .where("email", "==", messageData.email)
        .limit(1)
        .get();

    await db
        .collection(collectionName)
        .doc(userData.id)
        .set({ lastLogin: new Date() }, { merge: true });
}
