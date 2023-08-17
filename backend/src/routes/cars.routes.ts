import { Router } from "express";
import {
  createCarController,
  deleteCarController,
  getByIdCarsController,
  listCarsController,
  updateCarController,
} from "../controllers/cars.controller";
import { carsSchemaRequest, carsSchemaUpdate } from "../schemas/cars.schemas";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import ensureCarIdMiddleware from "../middlewares/ensureCarIdExists.middleware";

const carRoutes = Router();

carRoutes.post("", ensureDataIsValid(carsSchemaRequest), createCarController);
carRoutes.get("", listCarsController);
carRoutes.get("/:id", ensureCarIdMiddleware, getByIdCarsController);
carRoutes.patch(
  "/:id",
  ensureCarIdMiddleware,
  ensureDataIsValid(carsSchemaUpdate),
  updateCarController
);
carRoutes.delete("/:id", ensureCarIdMiddleware, deleteCarController);

export { carRoutes };
