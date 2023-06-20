import { NavLink } from "react-router-dom";

export default function SubMenu({ submenu, isactive }) {
	return (
		<ul className={isactive ? "overflow-hidden max-h-56 transition-all duration-300" : "overflow-hidden max-h-0 transition-all"}>
			{submenu.map((val, key) => (
				<li className="px-5 py-1">
					<NavLink
						key={key}
						to={val.url}
						className="text-slate-200 hover:text-white"
					>
						{val.name}
					</NavLink>
				</li>
			))}
		</ul>
	);
}
