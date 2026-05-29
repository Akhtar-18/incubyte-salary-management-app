import { EmployeeRepository } from "../repositories/employee.repository.js";

const employeeRepository = new EmployeeRepository();

export class EmployeeService {
  async createEmployee(data: any) {
    return employeeRepository.create(data);
  }

}