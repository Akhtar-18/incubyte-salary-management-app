import {
    Container,
    Typography,
    CircularProgress
} from "@mui/material";

import EmployeeTable from "../components/EmployeeTable";

import { useEmployees } from "../hooks/useEmployees";

export default function EmployeesPage() {
    const {
        data,
        isLoading,
        isError
    } = useEmployees();

    if (isLoading) {
        return <CircularProgress />;
    }

    if (isError) {
        return (
            <Typography>
                Failed to load employees
            </Typography>
        );
    }

    return (
        <Container sx={{ mt: 4 }}>
            <Typography
                variant="h4"
                sx={{ mb: 3 }}
            >
                Employees
            </Typography>

            <EmployeeTable
                employees={data?.data || []}
            />
        </Container>
    );
}