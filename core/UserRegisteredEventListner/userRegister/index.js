const functions = require("@google-cloud/functions-framework");

// Register a CloudEvent function with the Functions Framework
functions.cloudEvent("userRegisteredEventListner", (cloudEvent) => {
    console.log(cloudEvent.specversion);
    console.log(cloudEvent.type);
    console.log(cloudEvent.source);
    console.log(cloudEvent.subject);
    console.log(cloudEvent.id);
    console.log(cloudEvent.time);
    console.log(cloudEvent.datacontenttype);
    console.log(cloudEvent.data);
});
