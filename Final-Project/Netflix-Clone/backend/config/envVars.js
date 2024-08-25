import dotenv from "dotenv";

dotenv.config();

export const ENV_VARS = {
	MONGO_URI: process.env.MONGO_URI,
	PORT: process.env.PORT || 5000,
	JWT_SECRET: process.env.JWT_SECRET,
	NODE_ENV: process.env.NODE_ENV,
	TMDB_API_KEY: process.env.TMDB_API_KEY,
	STRIPE_PUBLISH:process.env.STRIPE_PUBLISH,
	STRIPE_KEY:process.env.STRIPE_KEY,
	CLIENT_URL:process.env.CLIENT_URL,
};
