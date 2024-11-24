import { Request, Response } from "express";
import { carService } from "./car.service";

const uploadCar = async (req: Request, res: Response) => {
	try {
		const carData = req.body;
		const result = await carService.uploadCar(carData);

		res.status(200).json({
			success: true,
			message: "Car is uploaded successfully",
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Car is not uploaded, Check error for more details",
			error: error,
		});
	}
};

const getAllCar = async (req: Request, res: Response) => {
	try {
		if (req.query.searchTerm) {
			const result = await carService.getAllQueryCar(
				req.query.searchTerm as string
			);

			if (result.length === 0) {
				res.status(404).json({
					success: true,
					message: "No Car Found",
					data: result,
				});
			} else {
				res.status(200).json({
					success: true,
					message: "Cars retrieved successfully",
					data: result,
				});
			}
		} else {
			const result = await carService.getAllCar();

			res.status(200).json({
				success: true,
				message: "Cars retrieved successfully",
				data: result,
			});
		}
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Cars retrieved unsuccessfull",
			error: error,
		});
	}
};

const findCar = async (req: Request, res: Response) => {
	try {
		const { carId } = req.params;
		const result = await carService.findCar(carId);

		if (result.length === 0) {
			res.status(404).json({
				success: true,
				message: "No Car Found!!!",
				data: result,
			});
		} else {
			res.status(200).json({
				success: true,
				message: "Car retrieved successfully",
				data: result,
			});
		}
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "No Car Found!",
			error: error,
		});
	}
};

const updateCar = async (req: Request, res: Response) => {
	try {
		const { carId } = req.params;
		const updatedCar = req.body;

		const result = await carService.updateCar(carId, updatedCar);

		res.status(200).json({
			success: true,
			message: "Car updated successfully",
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Car update unsuccessfull",
			error: error,
		});
	}
};

const deleteCar = async (req: Request, res: Response) => {
	try {
		const { carId } = req.params;
		await carService.deleteCar(carId);

		res.status(200).json({
			status: true,
			message: "Car deleted successfully",
			data: {},
		});
	} catch (error) {
		res.status(500).json({
			status: false,
			message: "Car delete unsuccessfull",
			error: error,
		});
	}
};

export const CarController = {
	uploadCar,
	getAllCar,
	findCar,
	updateCar,
	deleteCar,
};
