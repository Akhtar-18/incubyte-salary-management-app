import request from "supertest";
import app from "../app.js";

describe("DELETE /employees/:id", () => {
  it("should delete employee", async () => {
    const created = await request(app)
      .post("/employees")
      .send({
        fullName: "Jack Smith",
        email: "jack.smith123@example.com",
        jobTitle: "Tester",
        country: "India",
        salary: 45000,
        department: "QA"
      });

    const response = await request(app).delete(
      `/employees/${created.body.data.id}`
    );

    expect(response.status).toBe(200);

    expect(response.body.success).toBe(true);
  });
});