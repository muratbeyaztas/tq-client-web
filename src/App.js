import { Routes, Route } from "react-router-dom";
import AppContext from './components/context/AppContext'
import DashboardPage from "./pages/DashboardPage";
import LayoutPage from "./pages/layout/LayoutPage";
import LoginLayout from "./pages/layout/LoginLayout";
import ForgotPassword from "./components/login/ForgotPassword";
import Login from './components/login/Login'

export default function App() {
	return (
		<>
			<AppContext>
				<Routes>
					<Route path="/" element={
						<LoginLayout>
							<Login />
						</LoginLayout>
					} />
					<Route path="/kullanici-girisi" element={
						<LoginLayout>
							<Login />
						</LoginLayout>
					} />
					<Route path="/sifremi-unuttum" element={
						<LoginLayout>
							<ForgotPassword />
						</LoginLayout>
					} />
					<Route path="/dashboard" element={
						<LayoutPage>
							<DashboardPage />
						</LayoutPage>} />
				</Routes>
			</AppContext>
		</>
	);
}
