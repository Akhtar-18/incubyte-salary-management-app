import prisma from "../config/prisma.js";
import type { CreateEmployeeInput } from "../types/employee.types.js";

export class EmployeeRepository {
  async create(data: CreateEmployeeInput) {
    return prisma.employee.create({
      data
    });
  }

  async findAll() {
    return prisma.employee.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });
  }

  async findById(id: number) {
    return prisma.employee.findUnique({
      where: { id }
    });
  }

  async update(id: number, data: Partial<CreateEmployeeInput>) {
    return prisma.employee.update({
      where: { id },
      data
    });
  }

  async delete(id: number) {
    return prisma.employee.delete({
      where: { id }
    });
  }

}