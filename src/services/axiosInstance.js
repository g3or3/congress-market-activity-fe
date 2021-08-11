import axios from "axios";

// "http://congress-market-activity.eba-jgcutjhi.us-east-2.elasticbeanstalk.com/"

const axiosInstance = axios.create({
	baseURL: "http://localhost:8000/",
});

export default axiosInstance;
