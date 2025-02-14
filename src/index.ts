import express from "express";
import corsOptions from "./middleware/cors.config";
import routes from "./routes/routes";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(corsOptions);

// Routes
routes(app);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
