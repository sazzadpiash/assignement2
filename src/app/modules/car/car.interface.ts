export type Car = {
	brand: string;
	model: string;
	year: number;
	price: number;
	category: "Sedan" | "SUV" | "Truck" | "Coupe" | "Convertible";
	description: string;
	quantity: number;
	inStock: boolean;
};

export type CarQuery = {
	brand?: string;
	model?: string;
	category?: "Sedan" | "SUV" | "Truck" | "Coupe" | "Convertible";
};
