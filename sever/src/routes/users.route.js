const UserIndexRoute = {
    path: "/user",
    method: "GET",
    config: {
        description: "This is User Index Route",
        tags: ["api", "userIndexRoute"],
    },
    handler: async (request, h) => {
        await request.broker.call("users.index");
        return h
            .response({
                message: "Hi There! Welcome to User Index Route",
            })
            .code(200);
    },
};

export default [UserIndexRoute];