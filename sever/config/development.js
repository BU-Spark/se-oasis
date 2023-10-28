module.exports = {
    dbs: {
        users: {
            host: process.env.POSTGRES_HOST || "127.0.0.1",
            port: 3000,
            database: process.env.POSTGRES_DB || "userdb",
            user: process.env.POSTGRES_USER || "postgres",
            password: process.env.POSTGREs_PASSWORD || "admin",
        },
    },
};
