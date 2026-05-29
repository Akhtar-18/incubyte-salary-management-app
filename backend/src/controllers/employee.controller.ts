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
      data: employee,
    });
  }

  /*async getAll(_: Request, res: Response) {
    const employees = await employeeService.getEmployees();

    return res.json({
      success: true,
      data: employees
    });
  }*/
  // New getAll method with pagination, filtering, and sorting
  async getAll(req: Request, res: Response) {
    const result = await employeeService.getEmployees(req.query);

    return res.json({
      success: true,
      data: result.employees,
      pagination: {
        page: Number(req.query.page || 1),
        limit: Number(req.query.limit || 10),
        total: result.total,
        totalPages: Math.ceil(result.total / Number(req.query.limit || 10)),
      },
    });
  }

  async getById(req: Request, res: Response) {
    const employee = await employeeService.getEmployeeById(
      Number(req.params.id)
    );

    return res.json({
      success: true,
      data: employee,
    });
  }

  async update(req: Request, res: Response) {
    const employee = await employeeService.updateEmployee(
      Number(req.params.id),
      req.body
    );

    return res.json({
      success: true,
      data: employee,
    });
  }

  async delete(req: Request, res: Response) {
    await employeeService.deleteEmployee(Number(req.params.id));

    return res.json({
      success: true,
      message: "Employee deleted successfully",
    });
  }
}
