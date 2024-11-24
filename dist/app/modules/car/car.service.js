"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carService = void 0;
const car_model_1 = require("./car.model");
const uploadCar = (car) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.CarModel.create(car);
    return result;
});
const getAllCar = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.CarModel.find({});
    return result;
});
const getAllQueryCar = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.CarModel.find({
        $or: [
            { model: new RegExp(query, "i") },
            { brand: new RegExp(query, "i") },
            { category: new RegExp(query, "i") },
        ],
    });
    return result;
});
const findCar = (carId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.CarModel.find({ _id: carId });
    return result;
});
const updateCar = (carId, updatedCar) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.CarModel.findOneAndUpdate({ _id: carId }, updatedCar, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteCar = (carId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.CarModel.findOneAndDelete({ _id: carId });
    return result;
});
exports.carService = {
    uploadCar,
    getAllCar,
    findCar,
    updateCar,
    deleteCar,
    getAllQueryCar,
};
