import * as yup from "yup";

export const signUpSchema = yup.object().shape({
	email: yup
		.string()
		.email("Not a valid email address.")
		.required("An email address is required."),
	password: yup
		.string()
		.required("Password is required.")
		.min(6, "Password must be at least 6 characters."),
	confirmPassword: yup
		.string()
		.test("passwords-match", "Passwords must match.", function (value) {
			return this.parent.password === value;
		}),
});

export const loginSchema = yup.object().shape({
	email: yup
		.string()
		.email("Not a valid email address.")
		.required("An email address is required."),
	password: yup
		.string()
		.required("Password is required.")
		.min(6, "Password must be at least 6 characters."),
});
