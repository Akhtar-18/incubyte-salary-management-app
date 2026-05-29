import { InsightRepository } from "../repositories/insight.repository.js";

const insightRepository = new InsightRepository();

export class InsightService {
  async getCountryInsights(country: string) {
    const data =
      await insightRepository.getCountrySalaryInsight(
        country
      );

    return {
      country,
      minimumSalary: data._min.salary,
      maximumSalary: data._max.salary,
      averageSalary: data._avg.salary,
      employeeCount: data._count
    };
  }

  async getJobTitleInsights(
    country: string,
    jobTitle: string
  ) {
    const data =
      await insightRepository.getAverageSalaryByJobTitle(
        country,
        jobTitle
      );

    return {
      country,
      jobTitle,
      averageSalary: data._avg.salary
    };
  }
}