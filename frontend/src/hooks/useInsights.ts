import { useQuery } from "@tanstack/react-query";

import { getCountryInsights } from "../api/insight.api";

export const useInsights = (
    country: string
) => {
    return useQuery({
        queryKey: ["insights", country],
        queryFn: () =>
            getCountryInsights(country)
    });
};