import { Routes, Route } from "react-router-dom";

import EmployeesPage from "../pages/EmployeesPage";

export default function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/employees"
        element={<EmployeesPage />}
      />
    </Routes>
  );
}