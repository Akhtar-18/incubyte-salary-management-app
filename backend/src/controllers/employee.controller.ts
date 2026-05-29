import type { Request, Response } from "express";
import { EmployeeService } from "../services/employee.service.js";
import { createEmployeeSchema } from "../validations/employee.validation.js";

const employeeService = new EmployeeService();

export class EmployeeController {
  async create(req: Request, res: Response) {
    const validatedData = createEmployeeSchema.parse(req.body);

    const employee = await employeeService.createEmployee(validatedData);

    return res.status(201).json({
      success: true,
      data: employee
    });
  }

}