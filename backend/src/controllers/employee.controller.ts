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

  async getAll(_: Request, res: Response) {
    const employees = await employeeService.getEmployees();

    return res.json({
      success: true,
      data: employees
    });
  }

  async getById(req: Request, res: Response) {
    const employee = await employeeService.getEmployeeById(
      String(req.params.id)
    );

    return res.json({
      success: true,
      data: employee
    });
  }

  async update(req: Request, res: Response) {
    const employee = await employeeService.updateEmployee(
      String(req.params.id),
      req.body
    );

    return res.json({
      success: true,
      data: employee
    });
  }

  async delete(req: Request, res: Response) {
    await employeeService.deleteEmployee(String(req.params.id));

    return res.json({
      success: true,
      message: "Employee deleted successfully"
    });
  }

}