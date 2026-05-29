import request from "supertest";
import app from "../app.js";

describe("GET /employees pagination", () => {
  it("should return paginated employees", async () => {
    const response = await request(app).get(
      "/employees?page=1&limit=5"
    );

    expect(response.status).toBe(200);

    expect(response.body.pagination).toBeDefined();

    expect(response.body.pagination.page).toBe(1);

    expect(response.body.pagination.limit).toBe(5);
  });
});