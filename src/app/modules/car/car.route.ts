import express from "express";
import { CarController } from "./car.controller";

const router = express.Router();

router.post("/", CarController.uploadCar);
router.get("/", CarController.getAllCar);
router.get("/:carId", CarController.findCar);
router.put("/:carId", CarController.updateCar);
router.delete("/:carId", CarController.deleteCar);

export const CarRoute = router;
