import prisma from "../config/prisma.js";

export class InsightRepository {
  async getCountrySalaryInsight(country: string) {
    const aggregation = await prisma.employee.aggregate({
      where: {
        country
      },

      _avg: {
        salary: true
      },

      _min: {
        salary: true
      },

      _max: {
        salary: true
      },

      _count: true
    });

    return aggregation;
  }

  async getAverageSalaryByJobTitle(
    country: string,
    jobTitle: string
  ) {
    return prisma.employee.aggregate({
      where: {
        country,
        jobTitle
      },

      _avg: {
        salary: true
      }
    });
  }
}