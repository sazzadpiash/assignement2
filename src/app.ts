import express, { Application } from "express";
const app: Application = express();
import cors from "cors";
import { CarRoute } from "./app/modules/car/car.route";
import { OrderRoute } from "./app/modules/order/order.route";

// Parser
app.use(express.json());
app.use(cors());

//application route
app.use("/api/cars", CarRoute);
app.use("/api/orders", OrderRoute);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

export default app;
