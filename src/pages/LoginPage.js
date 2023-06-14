// import { Outlet } from "react-router-dom";

import ForgotPassword from "../components/login/ForgotPassword";
import Login from "../components/login/Login";

export default function LoginPage({ type = "login" }) {
	return (
		<>
			<p>Murat</p>
			<div className="w-full h-full bg-sky-100 flex justify-center items-center bg-[url('https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover">
				{/* <Outlet /> */}
				{type === "login" ? <Login /> : <ForgotPassword />}
			</div>
		</>
	);
}
