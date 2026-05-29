import prisma from "../config/prisma.js";

export class EmployeeRepository {
  async create(data: any) {
    return prisma.employee.create({
      data
    });
  }

}