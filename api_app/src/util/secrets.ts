import logger from "./logger";
import dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync(".env")) {
    // logger.debug("Using .env file to supply config environment variables");
    dotenv.config({ path: ".env" });
}

export const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB,
    SESSION_SECRET,
    JWT_SECRET
} = process.env;

if (!MONGO_USERNAME) {
    logger.error("Set MONGO_USERNAME environment variable.");
    process.exit(1);
}

if (!MONGO_PASSWORD) {
    logger.error("Set MONGO_PASSWORD environment variable.");
    process.exit(1);
}

if (!MONGO_HOSTNAME) {
    logger.error("Set MONGO_HOSTNAME environment variable.");
    process.exit(1);
}

if (!MONGO_PORT) {
    logger.error("Set MONGO_PORT environment variable.");
    process.exit(1);
}

if (!MONGO_DB) {
    logger.error("Set MONGO_PASSWORD environment variable.");
    process.exit(1);
}

if (!SESSION_SECRET) {
    logger.error("Set SESSION_SECRET environment variable.");
    process.exit(1);
}

if (!JWT_SECRET) {
    logger.error("Set JWT_SECRET environment variable.");
    process.exit(1);
}