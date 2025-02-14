import cors from "cors";

const corsOptions = cors({
	origin: "*",
	methods: ["GET", "POST", "PUT", "DELETE"],
	allowedHeaders: ["Content-Type", "Authorization"],
});

export default corsOptions;
