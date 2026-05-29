import { EmployeeRepository } from "../repositories/employee.repository.js";

const employeeRepository = new EmployeeRepository();

export class EmployeeService {
  async createEmployee(data: any) {
    return employeeRepository.create(data);
  }

  async getEmployees() {
    return employeeRepository.findAll();
  }

  async getEmployeeById(id: string) {
    return employeeRepository.findById(id);
  }

  async updateEmployee(id: string, data: any) {
    return employeeRepository.update(id, data);
  }

}