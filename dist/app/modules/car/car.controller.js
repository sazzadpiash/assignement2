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
exports.CarController = void 0;
const car_service_1 = require("./car.service");
const uploadCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carData = req.body;
        const result = yield car_service_1.carService.uploadCar(carData);
        res.status(200).json({
            success: true,
            message: "Car is uploaded successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Car is not uploaded, Check error for more details",
            error: error,
        });
    }
});
const getAllCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.query.searchTerm) {
            const result = yield car_service_1.carService.getAllQueryCar(req.query.searchTerm);
            if (result.length === 0) {
                res.status(404).json({
                    success: true,
                    message: "No Car Found",
                    data: result,
                });
            }
            else {
                res.status(200).json({
                    success: true,
                    message: "Cars retrieved successfully",
                    data: result,
                });
            }
        }
        else {
            const result = yield car_service_1.carService.getAllCar();
            res.status(200).json({
                success: true,
                message: "Cars retrieved successfully",
                data: result,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Cars retrieved unsuccessfull",
            error: error,
        });
    }
});
const findCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { carId } = req.params;
        const result = yield car_service_1.carService.findCar(carId);
        if (result.length === 0) {
            res.status(404).json({
                success: true,
                message: "No Car Found!!!",
                data: result,
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "Car retrieved successfully",
                data: result,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "No Car Found!",
            error: error,
        });
    }
});
const updateCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { carId } = req.params;
        const updatedCar = req.body;
        const result = yield car_service_1.carService.updateCar(carId, updatedCar);
        res.status(200).json({
            success: true,
            message: "Car updated successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Car update unsuccessfull",
            error: error,
        });
    }
});
const deleteCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { carId } = req.params;
        yield car_service_1.carService.deleteCar(carId);
        res.status(200).json({
            status: true,
            message: "Car deleted successfully",
            data: {},
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            message: "Car delete unsuccessfull",
            error: error,
        });
    }
});
exports.CarController = {
    uploadCar,
    getAllCar,
    findCar,
    updateCar,
    deleteCar,
};
