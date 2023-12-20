import { Pool } from "pg";
const logger = globalThis.logger || console;

const decode = (str) => {
    let buff_str = Buffer.from(str, "base64");
    return buff_str.toString("ascii");
};

class PostgresHelper {
    static async connect({ host, port, database, username, password }) {
        let dbConfig = {
            host,
            port,
            database,
            user: username,
            password,
            min: 1,
            max: 5,
            acquireTimeoutMillis: 3000,
            idleTimeoutMillis: 3000,
            connectionTimeoutMillis: 20 * 1000,
        };

        try {
            const client = new Pool(dbConfig);
            return client;
        } catch (err) {
            logger.error(`[connect] - Postgres error:`, err.message || err);
            throw err;
        }
    }

    static async disconnect(dbObj) {
        await dbObj.end();
    }

    static async test(connData) {
        try {
            const dbConn = await this.connect(connData);
            await dbConn.query("SELECT NOW()");
            return true;
        } catch (error) {
            console.error(
                `Error while checking connection for PostgreSQL. Error: ${error}`
            );
            return error.message;
        }
    }

    static async get({ connObj, query }) {
        try {
            const res = await connObj.query(query);
            return res.rows;
        } catch (err) {
            logger.debug(`Postgres query failed :`, err);
        }
    }
}

export default PostgresHelper;
