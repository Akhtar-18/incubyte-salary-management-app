import request from "supertest";
import app from "../app.js";

describe("POST /employees", () => {
  it("should create employee", async () => {
    const uniqueEmail = `akhtar${Date.now()}@test.com`

    const response = await request(app)
      .post("/employees")
      .send({
        fullName: "Akhtar Parveen",
        email: uniqueEmail,
        jobTitle: "Software Engineer",
        country: "India",
        salary: 50000,
        department: "Engineering"
      });

    expect(response.status).toBe(201);

    expect(response.body.success).toBe(true);

    expect(response.body.data.fullName).toBe("Akhtar Parveen");
  });
});