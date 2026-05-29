import { api } from "./axios";

import type {
    CreateEmployeeInput,
    EmployeeResponse,
    EmployeesResponse
} from "../types/employee.types";

export const getEmployees =
    async (): Promise<EmployeesResponse> => {
        const response =
            await api.get<EmployeesResponse>(
                "/employees"
            );

        return response.data;
    };

export const createEmployee = async (
    data: CreateEmployeeInput
): Promise<EmployeeResponse> => {
    const response =
        await api.post<EmployeeResponse>(
            "/employees",
            data
        );

    return response.data;
};

export const updateEmployee = async (
    id: number,
    data: Partial<CreateEmployeeInput>
): Promise<EmployeeResponse> => {
    const response =
        await api.put<EmployeeResponse>(
            `/employees/${id}`,
            data
        );

    return response.data;
};

export const deleteEmployee = async (
    id: number
): Promise<{ success: boolean; message: string }> => {
    const response = await api.delete(
        `/employees/${id}`
    );

    return response.data;
};