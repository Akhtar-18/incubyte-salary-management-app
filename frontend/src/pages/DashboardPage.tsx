import {
  Container,
  Grid,
  Typography
} from "@mui/material";

import DashboardCard from "../components/common/DashboardCard";

import { useInsights } from "../hooks/useInsights";

export default function DashboardPage() {
  const { data } = useInsights("India");

  return (
    <Container sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        sx={{ mb: 4 }}
      >
        Salary Dashboard
      </Typography>

      <Grid
        container
        spacing={3}
      >
        <Grid size={3}>
          <DashboardCard
            title="Average Salary"
            value={`₹${Math.round(
              data?.data?.averageSalary || 0
            )}`}
          />
        </Grid>

        <Grid size={3}>
          <DashboardCard
            title="Minimum Salary"
            value={`₹${data?.data?.minimumSalary || 0}`}
          />
        </Grid>

        <Grid size={3}>
          <DashboardCard
            title="Maximum Salary"
            value={`₹${data?.data?.maximumSalary || 0}`}
          />
        </Grid>

        <Grid size={3}>
          <DashboardCard
            title="Employees"
            value={
              data?.data?.employeeCount || 0
            }
          />
        </Grid>
      </Grid>
    </Container>
  );
}