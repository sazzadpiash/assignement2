import { model, Schema } from "mongoose";
import { Car } from "./car.interface";

const carSchema = new Schema<Car>(
	{
		brand: { type: String, required: true },
		model: { type: String, required: true },
		year: { type: Number, required: true },
		price: { type: Number, required: true },
		category: {
			type: String,
			enum: {
				values: ["Sedan", "SUV", "Truck", "Coupe", "Convertible"],
				message:
					"{VALUE} is not a valid car category. please try following: 'Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'",
			},
			required: true,
		},
		description: { type: String, required: true },
		quantity: { type: Number, required: true },
		inStock: { type: Boolean, required: true },
	},
	{ timestamps: true }
);

export const CarModel = model<Car>("Car", carSchema);
