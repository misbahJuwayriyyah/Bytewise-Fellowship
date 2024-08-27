import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors"
import Stripe from "stripe";


import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";
import searchRoutes from "./routes/search.route.js";

import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import { protectRoute } from "./middleware/protectRoute.js";


const app = express();

const PORT = ENV_VARS.PORT;
const __dirname = path.resolve();

app.use(express.json()); // will allow us to parse req.body
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);

if (ENV_VARS.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}
//Payment
//something

const stripe = Stripe(ENV_VARS.STRIPE_KEY)
app.post("/create-checkout-session", async (req, res) => {
	try {
	  const session = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		mode: "subscription",
		line_items: [
		  {
			price_data: {
			  currency: "pkr",
			  product_data: {
				name: "Monthly Subscription",
			  },
			  unit_amount: 108000,
			  recurring: {
				interval: "month",
			  },
			},
			quantity: 1,
		  },
		],
		success_url: `${ENV_VARS.CLIENT_URL}`,
		cancel_url: `${ENV_VARS.CLIENT_URL}`,
	  });
  
	  res.json({ url: session.url });
	} catch (e) {
	  console.error(e); // Log the error to understand what went wrong
	  res.status(500).json({ error: e.message });
	}
  });
  

//Running server
app.listen(PORT, () => {
	console.log("Server started at http://localhost:" + PORT);
	connectDB();
});
