import type { Request, Response } from "express";
import { InsightService } from "../services/insight.service.js";

const insightService = new InsightService();

export class InsightController {
  async countrySalary(
    req: Request,
    res: Response
  ) {
    const country = req.query.country as string;

    const result =
      await insightService.getCountryInsights(country);

    return res.json({
      success: true,
      data: result
    });
  }

  async averageByJobTitle(
    req: Request,
    res: Response
  ) {
    const country = req.query.country as string;

    const jobTitle = req.query.jobTitle as string;

    const result =
      await insightService.getJobTitleInsights(
        country,
        jobTitle
      );

    return res.json({
      success: true,
      data: result
    });
  }
}