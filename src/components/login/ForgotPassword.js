import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function ForgotPassword() {
	const nav = useNavigate();
	return (
		<>
			<div className="w-[600px] h-auto bg-white mx-auto">
				<a
					href="#"
					className="hover:bg-sky-500 hover:text-white w-[50px] px-4 py-2 block"
					onClick={(e) => {
						e.preventDefault();
						nav("/kullanici-girisi");
					}}
				>
					<AiOutlineArrowLeft />
				</a>

				<div className="flex flex-col justify-center space-y-4 p-10">
					<small className="text-sm  font-semibold text-slate-400 ">
						Email
					</small>
					<input type="email" className="itext" />
					<input type="button" className="btn enabled:" value="Email gonder" />
				</div>
			</div>
		</>
	);
}
