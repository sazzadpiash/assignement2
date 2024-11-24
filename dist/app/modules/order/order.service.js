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
exports.orderService = void 0;
const car_model_1 = require("../car/car.model");
const order_model_1 = require("./order.model");
const orderCar = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const carDetails = yield car_model_1.CarModel.findById({ _id: order.car });
    if (!carDetails) {
        return { message: "Car is not found" };
    }
    else if (carDetails && !carDetails.inStock) {
        return { message: "This Car is stock out" };
    }
    else if (carDetails && carDetails.quantity < order.quantity) {
        return { message: "Order quantity has excide stock quantity" };
    }
    else if (carDetails.quantity - order.quantity == 0) {
        yield car_model_1.CarModel.findOneAndUpdate({ _id: order.car }, { quantity: carDetails.quantity - order.quantity, inStock: false }, { new: true });
        const result = yield order_model_1.OrderModel.create(order);
        return result;
    }
    else {
        yield car_model_1.CarModel.findOneAndUpdate({ _id: order.car }, { quantity: carDetails.quantity - order.quantity }, { new: true });
        const result = yield order_model_1.OrderModel.create(order);
        return result;
    }
});
const countRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    const revenue = yield order_model_1.OrderModel.aggregate([
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
});
exports.orderService = {
    orderCar,
    countRevenue,
};
