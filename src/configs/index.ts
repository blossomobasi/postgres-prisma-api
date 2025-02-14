import dotenv from "dotenv";

dotenv.config(); // Load environment variables

export const config = {
	port: process.env.PORT || 3000,
	DATABASE_URL: process.env.DATABASE_URL as string,
	NODE_ENV: process.env.NODE_ENV as string,
	APP_NAME: process.env.APP_NAME as string,
};
