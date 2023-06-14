import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

export default function App() {
	return (
		<>
			<Routes>
				{/* <Route path="/kullanici" element={<LoginPage />}>
					<Route index element={<Login />} />
					<Route path="giris" element={<Login />} />
					<Route path="sifremi-unuttum" element={<ForgotPassword />} />
				</Route> */}

				<Route path="/" element={<LoginPage type="login" />} />
				<Route path="/kullanici-girisi" element={<LoginPage type="login" />} />
				<Route path="/sifremi-unuttum" element={<LoginPage type="forgot-password" />} />
			</Routes>
		</>
	);
}
