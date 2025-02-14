import express from "express";
import corsOptions from "./middleware/cors.config";
import routes from "./routes/routes";
import { config } from "./configs/index";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(corsOptions);

// Routes
routes(app);

const PORT = config.port;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
