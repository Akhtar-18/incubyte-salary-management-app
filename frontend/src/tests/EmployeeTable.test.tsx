import { render, screen } from "@testing-library/react";

import EmployeeTable from "../components/EmployeeTable";

describe("EmployeeTable", () => {
  it("should render employee data", () => {
    render(
      <EmployeeTable
        employees={[
          {
            id: 1,
            fullName: "John Doe",
            jobTitle: "Developer",
            country: "India",
            salary: 70000,
            department: "Engineering",
            email: "john@example.com"
          }
        ]}
      />
    );

    expect(
      screen.getByText("John Doe")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Developer")
    ).toBeInTheDocument();
  });
});