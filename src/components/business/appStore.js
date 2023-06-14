export default function appStore() {
	const getAuthUser = () => {
		const user = localStorage.getItem("auth_user");
		return (user && JSON.parse(user)) || null;
	};

	const setAuthUser = (user) => {
		localStorage.setItem("auth_user", JSON.stringify(user));
	};

	return { getAuthUser, setAuthUser };
}
