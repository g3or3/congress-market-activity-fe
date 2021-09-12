import axiosInstance from "./axiosInstance";

const recordRoute = "/api/record";

export const fetchMostTransacted = async (year) => {
	return await axiosInstance.get(`${recordRoute}/most-transacted?year=${year}`);
};

export const fetchMostRecent = async (limit) => {
	return await axiosInstance.get(`${recordRoute}/most-recent?limit=${limit}`);
};

export const fetchSearched = async (field, term, limit) => {
	return await axiosInstance.get(
		`${recordRoute}/search?field=${field}&term=${term}&limit=${limit}`
	);
};
