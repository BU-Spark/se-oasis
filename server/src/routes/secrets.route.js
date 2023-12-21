import { SecretManagerServiceClient } from "@google-cloud/secret-manager";

const SecretsIndexRoute = {
    path: "/secrets/index",
    method: "GET",
    config: {
        description: "This is Secrets Index Route",
        tags: ["api", "secretsIndexRoute"],
    },
    handler: async (request, h) => {
        return h
            .response({
                message: "Hi There! Welcome to Secret Index Route",
            })
            .code(200);
    },
};

const GetSecretsRoute = {
    path: "/secrets/{secretName}/{versionNumber}",
    method: "GET",
    config: {
        description: "This is the route to get a secret",
        tags: ["api", "getSecretsRotue"],
    },
    handler: async (request, h) => {
        let secretManagerClient = new SecretManagerServiceClient();

        const secretRequest = {
            name: `projects/668242185170/secrets/${request.params.secretName}/versions/${request.params.versionNumber}`,
        };

        try {
            const [secret] = await secretManagerClient.accessSecretVersion(
                secretRequest
            );

            return h
                .response({
                    payload: Buffer.from(
                        secret.payload.data,
                        "base64"
                    ).toString("utf-8"),
                })
                .code(200);
        } catch (error) {
            return h
                .response({
                    error,
                })
                .code(500);
        }
    },
};

export default [SecretsIndexRoute, GetSecretsRoute];
