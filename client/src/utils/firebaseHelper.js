const axios = require("axios");
const fs = require("fs");

const getAndSaveFirebaseConfig = async () => {
    try {
        let firebaseConfig = await axios.get(
            `${process.env.SERVER_PROTOCOL || "http"}://${
                process.env.SERVER_HOST || "127.0.0.1"
            }:${
                process.env.SERVER_PORT || "5675"
            }/api/v1/secrets/firebaseConfig/2`
        );

        console.log(JSON.parse(firebaseConfig.data.payload));
        fs.writeFileSync(
            "firebaseConfig.json",
            JSON.stringify(JSON.parse(firebaseConfig.data.payload)),
            function (error) {
                if (error) {
                    throw error;
                }
            }
        );
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

getAndSaveFirebaseConfig();
