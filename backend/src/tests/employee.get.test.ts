import request from "supertest";
import app from "../app.js";

describe("GET /employees", () => {
  it("should get all employees", async () => {
    const response = await request(app).get("/employees");

    expect(response.status).toBe(200);

    expect(response.body.success).toBe(true);

    expect(Array.isArray(response.body.data)).toBe(true);
  });
});