import { CarModel } from "../car/car.model";
import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

const orderCar = async (order: Order) => {
	const carDetails = await CarModel.findById({ _id: order.car });

	if (!carDetails) {
		return { message: "Car is not found" };
	} else if (carDetails && !carDetails.inStock) {
		return { message: "This Car is stock out" };
	} else if (carDetails && carDetails.quantity < order.quantity) {
		return { message: "Order quantity has excide stock quantity" };
	} else if (carDetails.quantity - order.quantity == 0) {
		await CarModel.findOneAndUpdate(
			{ _id: order.car },
			{ quantity: carDetails.quantity - order.quantity, inStock: false },
			{ new: true }
		);
		const result = await OrderModel.create(order);
		return result;
	} else {
		await CarModel.findOneAndUpdate(
			{ _id: order.car },
			{ quantity: carDetails.quantity - order.quantity },
			{ new: true }
		);
		const result = await OrderModel.create(order);
		return result;
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
