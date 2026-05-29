export interface Employee {
  id: number;
  fullName: string;
  email: string;
  jobTitle: string;
  country: string;
  salary: number;
  department: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateEmployeeInput {
  fullName: string;
  email: string;
  jobTitle: string;
  country: string;
  salary: number;
  department: string;
}

export interface EmployeesResponse {
  success: boolean;
  data: Employee[];
}

export interface EmployeeResponse {
  success: boolean;
  data: Employee;
}