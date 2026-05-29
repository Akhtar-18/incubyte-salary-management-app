import express from "express";
import employeeRoutes from "./routes/employee.routes.js";
import insightRoutes from "./routes/insight.routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());

app.get("/health", (_, res) => {
  res.json({
    success: true
  });
});

app.use("/employees", employeeRoutes);

app.use(errorMiddleware);

app.use("/insights", insightRoutes);

export default app;