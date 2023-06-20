export default function appStore() {
	const getAuthUser = () => {
		const user = sessionStorage.getItem("auth_user");
		return (user && JSON.parse(user)) || null;
	};

	const setAuthUser = (user) => {
		sessionStorage.setItem("auth_user", JSON.stringify(user));
	};

	return { getAuthUser, setAuthUser };
}
