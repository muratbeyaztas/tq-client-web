import { useNavigate } from "react-router-dom";

export default function Login() {
	const navigate = useNavigate();

	return (
		<div className="bg-white rounded mx-auto w-[600px] min-h-[300px]">
			<h1 className="text-center mt-5 font-bold text-xl">Giris</h1>
			<div className="w-full h-full p-10 flex flex-col justify-center items-center space-y-10">
				<div className="w-full h-full flex flex-col">
					<p className="text-sm font-semibold pb-2 text-slate-400">Kullanici adi</p>
					<input className="itext" type="text" placeholder="Email" />
				</div>
				<div className="w-full h-full flex flex-col">
					<p className="text-sm font-semibold pb-2 text-slate-400">Sifre</p>
					<input className="itext" type="password" placeholder="Sifre" />
				</div>

				<div className="w-full flex justify-between items-center">
					<input
						className="bg-sky-300 px-5 py-3 font-sans hover:bg-sky-500"
						type="button"
						value="Giris"
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
