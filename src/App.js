import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AppContext from './components/context/AppContext'
import DashboardPage from "./pages/DashboardPage";
import LayoutPage from "./pages/LayoutPage";

export default function App() {
	return (
		<>
			<AppContext>
				<Routes>
					<Route path="/" element={<LoginPage type="login" />} />
					<Route path="/kullanici-girisi" element={<LoginPage type="login" />} />
					<Route path="/sifremi-unuttum" element={<LoginPage type="forgot-password" />} />
					<Route path="/dashboard" element={
						<LayoutPage>
							<DashboardPage />
						</LayoutPage>} />
				</Routes>
			</AppContext>
		</>
	);
}
