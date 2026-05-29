import request from "supertest";
import app from "../app.js";

describe("POST /employees", () => {
  it("should create employee", async () => {
    const response = await request(app)
      .post("/employees")
      .send({
        fullName: "John Doe",
        email: "john@example.com",
        jobTitle: "Software Engineer",
        country: "India",
        salary: 50000,
        department: "Engineering"
      });

    expect(response.status).toBe(201);

    expect(response.body.success).toBe(true);

    expect(response.body.data.fullName).toBe("John Doe");
  });
});