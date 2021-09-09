import axios from "axios";
import { baseURL } from "../config/";

// "http://congress-market-activity.eba-jgcutjhi.us-east-2.elasticbeanstalk.com/"

const axiosInstance = axios.create({
	baseURL,
});

export default axiosInstance;
