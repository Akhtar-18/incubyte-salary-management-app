import { Router } from "express";
import { InsightController } from "../controllers/insight.controller.js";

const router = Router();

const insightController = new InsightController();

router.get(
  "/country-salary",
  insightController.countrySalary
);

router.get(
  "/job-title-average",
  insightController.averageByJobTitle
);

export default router;