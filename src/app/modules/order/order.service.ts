import { CarModel } from "../car/car.model";
import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

const orderCar = async (order: Order) => {
	const carDetails = await CarModel.findById({ _id: order.car });

	if (!carDetails) {
		return {
			status: false,
			message: "Car is not found",
			data: {},
		};
	} else if (carDetails && !carDetails.inStock) {
		return {
			status: false,
			message: "This Car is stock out",
			data: {},
		};
	} else if (carDetails && carDetails.quantity < order.quantity) {
		return {
			status: false,
			message: "Order quantity has excide stock quantity",
			data: {},
		};
	} else if (carDetails.quantity - order.quantity == 0) {
		await CarModel.findOneAndUpdate(
			{ _id: order.car },
			{ quantity: carDetails.quantity - order.quantity, inStock: false },
			{ new: true }
		);
		const result = await OrderModel.create(order);
		return {
			status: true,
			message: "Order created successfully",
			data: result,
		};
	} else {
		await CarModel.findOneAndUpdate(
			{ _id: order.car },
			{ quantity: carDetails.quantity - order.quantity },
			{ new: true }
		);
		const result = await OrderModel.create(order);
		return {
			status: true,
			message: "Order created successfully",
			data: result,
		};
	}
};

const countRevenue = async () => {
	const revenue = await OrderModel.aggregate([
		{
			$group: {
				_id: null,
				totalRevenue: { $sum: "$totalPrice" },
			},
		},
	]);

	if (revenue.length > 0) {
		return revenue[0].totalRevenue;
	}
	return 0;
};

export const orderService = {
	orderCar,
	countRevenue,
};
