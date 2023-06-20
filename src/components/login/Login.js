import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppState } from "../context/AppContext";

export default function Login() {
	const navigate = useNavigate();
	const unameRef = useRef();
	const pwdRef = useRef();
	const nav = useNavigate();

	const context = useContext(AppState);
	const [showFirm, setShowFirm] = useState(false);
	const [showCode, setShowCode] = useState(false);

	const firms = ["Akpres", "Orgachem", "Organik kimya"];

	const onLogin = (e) => {
		const uname = unameRef.current.value;
		const pwd = pwdRef.current.value;

		if (uname !== "10254065182" || pwd !== "test1111") return;

		const user = { username: uname, password: pwd };
		context.user.set(user);
		setShowFirm(true);

		if (showFirm && showCode) nav("/dashboard");
	};

	return (
		<div className="bg-white rounded mx-auto w-[600px] min-h-[300px]">
			<h1 className="text-center mt-5 font-bold text-xl">Giris</h1>
			<div className="w-full h-full p-10 flex flex-col justify-center items-center space-y-10">
				<div className="w-full h-full flex flex-col">
					<p className="text-sm font-semibold pb-2 text-slate-400">
						Kullanici adi
					</p>
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

				{showFirm && (
					<div className="w-full h-full flex flex-col">
						<p className="text-sm font-semibold pb-2 text-slate-400">
							Giris yapmak istediginiz firmayi seciniz
						</p>
						<select
							name="firm"
							className="icombo"
							onChange={(e) => setShowCode(true)}
						>
							<option>Seciniz</option>
							{firms.map((c, key) => (
								<option key={key} className="p-4 text-md text-slate-500 mt-2">
									{c}
								</option>
							))}
						</select>
					</div>
				)}

				{showCode && (
					<div className="w-full h-full flex flex-col">
						<p className="text-sm font-semibold pb-2 text-slate-400">
							Giris kodu
						</p>
						<input type="text" className="itext" placeholder="Giris kodu" />
					</div>
				)}

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
