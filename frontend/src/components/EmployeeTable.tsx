import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper
} from "@mui/material";

import type { Employee } from "../types/employee.types";

interface Props {
    employees: Employee[];
}

export default function EmployeeTable({
    employees
}: Props) {
    return (
        <Paper sx={{ overflow: "hidden" }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Job Title</TableCell>
                        <TableCell>Country</TableCell>
                        <TableCell>Salary</TableCell>
                        <TableCell>Department</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {employees.map(employee => (
                        <TableRow key={employee.id}>
                            <TableCell>
                                {employee.fullName}
                            </TableCell>

                            <TableCell>
                                {employee.jobTitle}
                            </TableCell>

                            <TableCell>
                                {employee.country}
                            </TableCell>

                            <TableCell>
                                ₹{employee.salary}
                            </TableCell>

                            <TableCell>
                                {employee.department}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}