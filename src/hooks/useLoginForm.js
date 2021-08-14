import { useState, useEffect } from "react";
import { signUpSchema, loginSchema } from "../components/Login/schema";

const formVals = {
	email: "",
	password: "",
};

export const useLoginForm = ({ registering, email }) => {
	const [formValues, setFormValues] = useState(
		registering ? { ...formVals, confirmPassword: "" } : formVals
	);
	const [error, setError] = useState("");

	const handleChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	const validateForm = async () => {
		try {
			if (registering) {
				await signUpSchema.validate(formValues, {
					stripUnknown: true,
					abortEarly: false,
				});
				setFormValues({ ...formVals, confirmPassword: "" });
			} else {
				await loginSchema.validate(formValues, {
					stripUnknown: true,
					abortEarly: false,
				});
				setFormValues(formValues);
			}
			setError("");
			return true;
		} catch (e) {
			setError(e.errors[0]);
			return false;
		}
	};

	useEffect(() => {
		if (email) {
			setFormValues((prev) => ({ ...prev, email }));
		}
	}, [setFormValues, email]);

	return { formValues, setFormValues, handleChange, validateForm, error, setError };
};
