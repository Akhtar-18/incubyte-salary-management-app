import prisma from "../config/prisma.js";

export class EmployeeRepository {
  async create(data: any) {
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

  async findById(id: string) {
    return prisma.employee.findUnique({
      where: { id }
    });
  }

  async update(id: string, data: any) {
    return prisma.employee.update({
      where: { id },
      data
    });
  }

}