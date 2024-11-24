import { Car } from "./car.interface";
import { CarModel } from "./car.model";

const uploadCar = async (car: Car) => {
	const result = await CarModel.create(car);
	return result;
};

const getAllCar = async () => {
	const result = await CarModel.find({});
	return result;
};

const getAllQueryCar = async (query: string) => {
	const result = await CarModel.find({
		$or: [
			{ model: new RegExp(query, "i") },
			{ brand: new RegExp(query, "i") },
			{ category: new RegExp(query, "i") },
		],
	});
	return result;
};

const findCar = async (carId: string) => {
	const result = await CarModel.find({ _id: carId });

	return result;
};

const updateCar = async (carId: string, updatedCar: Partial<Car>) => {
	const result = await CarModel.findOneAndUpdate({ _id: carId }, updatedCar, {
		new: true,
		runValidators: true,
	});
	return result;
};

const deleteCar = async (carId: string) => {
	const result = await CarModel.findOneAndDelete({ _id: carId });
	return result;
};

export const carService = {
	uploadCar,
	getAllCar,
	findCar,
	updateCar,
	deleteCar,
	getAllQueryCar,
};
