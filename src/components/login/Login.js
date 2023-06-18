import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppState } from "../context/AppContext";

export default function Login() {
	const navigate = useNavigate();
	const unameRef = useRef();
	const pwdRef = useRef();
	const nav = useNavigate();

	const context = useContext(AppState)

	const firms = ["Akpres", "Orgachem", "Organik kimya"];
	const [firm, setFirm] = useState();

	const onLogin = e => {
		const uname = unameRef.current.value;
		const pwd = pwdRef.current.value;

		if (uname == "10254065182" && pwd == "test1111") {
			const user = { username: uname, password: pwd };
			context.user.set(user);
			nav('/dashboard')
		}
		else
			console.log("gecersiz kullanici adi veya sifre")
	}

	return (
		<div className="bg-white rounded mx-auto w-[600px] min-h-[300px]">
			<h1 className="text-center mt-5 font-bold text-xl">Giris</h1>
			<div className="w-full h-full p-10 flex flex-col justify-center items-center space-y-10">
				<div className="w-full h-full flex flex-col">
					<p className="text-sm font-semibold pb-2 text-slate-400">Kullanici adi</p>
					<input
						className="itext"
						type="text"
						placeholder="Email"
						ref={unameRef}
					/>
				</div>
				<div className="w-full h-full flex flex-col">
					<p className="text-sm font-semibold pb-2 text-slate-400">Sifre</p>
					<input
						className="itext"
						type="password"
						placeholder="Sifre"
						ref={pwdRef}
					/>
				</div>

				<div className="w-full flex justify-between items-center">
					<input
						className="bg-sky-300 px-5 py-3 font-sans hover:bg-sky-500"
						type="button"
						value="Giris"
						onClick={onLogin}
					/>
					<div>
						<a
							href="/kullanici-girisi"
							className="abtn"
							onClick={(e) => {
								e.preventDefault();
								navigate("/sifremi-unuttum");
							}}
						>
							Sifremi Unutum
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
