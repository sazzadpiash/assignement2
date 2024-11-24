import express from "express";
import { OrderController } from "./order.controller";

const router = express.Router();

router.post("/", OrderController.orderCar);
router.get("/revenue", OrderController.countRevenue);

export const OrderRoute = router;
