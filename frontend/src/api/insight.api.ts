import { api } from "./axios";

export const getCountryInsights = async (
    country: string
) => {
    const response = await api.get(
        `/insights/country-salary?country=${country}`
    );

    return response.data;
};