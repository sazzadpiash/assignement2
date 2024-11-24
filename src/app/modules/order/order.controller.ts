import { Request, Response } from "express";
import { orderService } from "./order.service";

const orderCar = async (req: Request, res: Response) => {
	try {
		const orderData = req.body;

		const result = await orderService.orderCar(orderData);

		res.status(200).json({
			status: true,
			message: "Order created successfully",
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Order is not succesfull",
			error: error,
		});
	}
};

const countRevenue = async (req: Request, res: Response) => {
	try {
		const totalRevenue = await orderService.countRevenue();

		res.status(200).json({
			status: true,
			message: "Revenue calculated successfully",
			data: {
				totalRevenue,
			},
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Error calculating revenue",
			error: error,
		});
	}
};

export const OrderController = {
	orderCar,
	countRevenue,
};
