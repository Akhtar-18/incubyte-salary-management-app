import { EmployeeRepository } from "../repositories/employee.repository.js";
import type { CreateEmployeeInput } from "../types/employee.types.js";

const employeeRepository = new EmployeeRepository();

export class EmployeeService {
  async createEmployee(data: CreateEmployeeInput) {
    return employeeRepository.create(data);
  }

  /*async getEmployees() {
    return employeeRepository.findAll();
  }*/

  // New getEmployees method with pagination, filtering, and sorting
  async getEmployees(query: any) {
    const page = Number(query.page || 1);

    const limit = Number(query.limit || 10);

    return employeeRepository.findAll(
      page,
      limit,
      query.search,
      query.country,
      query.sortBy,
      query.order
    );
  }

  async getEmployeeById(id: number) {
    return employeeRepository.findById(id);
  }

  async updateEmployee(id: number, data: Partial<CreateEmployeeInput>) {
    return employeeRepository.update(id, data);
  }

  async deleteEmployee(id: number) {
    return employeeRepository.delete(id);
  }

}