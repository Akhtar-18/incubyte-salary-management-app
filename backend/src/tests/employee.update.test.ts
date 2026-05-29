import request from "supertest";
import app from "../app.js";

describe("PUT /employees/:id", () => {
  it("should update employee", async () => {
    const created = await request(app)
      .post("/employees")
      .send({
        fullName: "Jane Doe",
        email: "jane@example.com",
        jobTitle: "Developer",
        country: "India",
        salary: 70000,
        department: "Engineering"
      });

    const response = await request(app)
      .put(`/employees/${created.body.data.id}`)
      .send({
        salary: 90000
      });

    expect(response.status).toBe(200);

    expect(response.body.data.salary).toBe(90000);
  });
});