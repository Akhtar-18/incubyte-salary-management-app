import request from "supertest";
import app from "../app.js";

describe("GET /insights/country-salary", () => {
  it("should return salary insights", async () => {
    const response = await request(app).get(
      "/insights/country-salary?country=India"
    );

    expect(response.status).toBe(200);

    expect(response.body.success).toBe(true);

    expect(response.body.data).toHaveProperty(
      "averageSalary"
    );
  });
});