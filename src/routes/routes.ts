import { Express, Request, Response } from "express";
import { config } from "../configs/index";

const APP_NAME = config.APP_NAME;

const routes = (app: Express) => {
	app.get("/", (req: Request, res: Response) => {
		res.status(200).json({ status: "success", message: APP_NAME });
	});

	app.all("*", (req: Request, res: Response) => {
		res.status(404).json({ status: "fail", message: `Can't find ${req.originalUrl} on the server` });
	});
};

export default routes;
