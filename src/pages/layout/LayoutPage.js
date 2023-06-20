import Logo from "../../components/layout/Logo";
import Menu from "../../components/layout/Menu";

export default function LayoutPage({ children }) {
	return (
		<>
			<div className="w-full h-full bg-sky-400 flex flex-row">
				<div className="w-[300px] flex flex-col">
					<Logo />
					<Menu />
				</div>

				<div className="w-full bg-white flex flex-col items-center font-semibold">
					<div className="w-full h-20 bg-sky-400"></div>
					{children}
				</div>
			</div>
		</>
	);
}
