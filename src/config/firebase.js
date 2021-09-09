import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
	apiKey: "AIzaSyD7CiYGb0vt4pC7OUUphNhMJEI9RsMyBrs",
	authDomain: "congress-market-activity.firebaseapp.com",
	projectId: "congress-market-activity",
	storageBucket: "congress-market-activity.appspot.com",
	messagingSenderId: "674262468838",
	appId: "1:674262468838:web:2639d3a4af91161b129327",
});

export const auth = app.auth();

export default app;
