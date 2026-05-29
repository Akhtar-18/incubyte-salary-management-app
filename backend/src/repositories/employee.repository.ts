import prisma from "../config/prisma.js";
import type { CreateEmployeeInput } from "../types/employee.types.js";

export class EmployeeRepository {
  async create(data: CreateEmployeeInput) {
    return prisma.employee.create({
      data
    });
  }

  /*async findAll() {
    return prisma.employee.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });
  }*/

  // New findAll method with pagination, filtering, and sorting
  async findAll(
    page: number,
    limit: number,
    search?: string,
    country?: string,
    sortBy?: string,
    order?: "asc" | "desc"
  ) {
    const skip = (page - 1) * limit;

    const where: any = {};

    if (search) {
      where.fullName = {
        contains: search
      };
    }

    if (country) {
      where.country = country;
    }

    const [employees, total] = await Promise.all([
      prisma.employee.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          [sortBy || "createdAt"]: order || "desc"
        }
      }),

      prisma.employee.count({ where })
    ]);

    return {
      employees,
      total
    };
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