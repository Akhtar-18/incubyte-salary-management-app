import { useQuery } from "@tanstack/react-query";

import { getEmployees } from "../api/employee.api";

export const useEmployees = () => {
  return useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees
  });
};