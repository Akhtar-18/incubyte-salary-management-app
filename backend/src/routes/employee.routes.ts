import { Router } from "express";
import { EmployeeController } from "../controllers/employee.controller.js";

const router = Router();

const employeeController = new EmployeeController();

router.post("/", employeeController.create);
router.get("/", employeeController.getAll);

export default router;