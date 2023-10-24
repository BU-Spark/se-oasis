// Load all routes into one Object. It will consider the routes file which have Extension as .route.js
const allRoutesObject = ((fileExt = ".route.js") =>
    require("fs")
        .readdirSync(__dirname)
        .filter((fileName) => new RegExp(`${fileExt}$`, "ig").test(fileName))
        .map((fileName) => fileName.split(".")[0])
        .reduce((defaultObj, curFileName) => {
            try {
                return {
                    ...defaultObj,
                    [curFileName]:
                        require(`${__dirname}/${curFileName}${fileExt}`)
                            .default,
                };
            } catch (error) {
                throw error;
            }
        }, {}))(".route.js");

// Reducing the Routes Object into a routes list which can be later associated with server.route()
const allRoutes = Object.values(allRoutesObject).reduce(
    (finalRouteList = [], newRouteItem = []) => {
        if (Object.getPrototypeOf(newRouteItem) === Object.getPrototypeOf([])) {
            return [...finalRouteList, ...newRouteItem];
        }
        if (Object.getPrototypeOf(newRouteItem) === Object.getPrototypeOf({})) {
            return [...finalRouteList, newRouteItem];
        }
        return finalRouteList;
    },
    []
);

const indexRoute = {
    path: "",
    method: "GET",
    config: {
        description: "This is Index Route",
        tags: ["api", "indexRoute"],
    },
    handler: (request, h) => {
        return h
            .response({
                message: "Hi There! Welcome :)",
                writeTo: "Oasis Email", //Need to add official email
            })
            .code(200);
    },
};

export default [indexRoute, ...allRoutes];
