import * as aiicon from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function LayoutPage({ children }) {
	return (
		<>
			<div className="w-full h-full bg-sky-200 flex flex-row">
				<div className="basis-1/6 bg-white flex flex-col gap-2">

					<div className="logo w-full h-[100px] bg-slate-500 justify-center items-center flex font-semibold">
						<img
							src="https://dashboard.raportakip.com/img/Raportakip_Logo.png"
							alt=""
						/>
					</div>
					
                    <div className="menu w-full h-full flex items-center justify-center font-semibold">
						<nav className="left-menu w-full h-full">
							<ul className="list-none underline-offset-0">
								<li>
									<NavLink
										to="/"
										className="flex gap-2 items-center justify-start w-full px-6 py-2 hover:bg-slate-200"
									>
										<aiicon.AiFillHome /> Anasayfa
									</NavLink>
								</li>
                                <li>
									<NavLink
										to="/"
										className="flex gap-2 items-center justify-start pl-14 w-full mt-2"
									>
										<aiicon.AiFillHome /> Raporlar
									</NavLink>
								</li>
							</ul>
						</nav>
					</div>
				</div>

				<div className="basis-5/6 bg-red-100 flex items-center justify-center font-semibold">
					{children}
				</div>
			</div>
		</>
	);
}
