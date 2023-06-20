import { NavLink } from "react-router-dom";
import SubMenu from "./SubMenu";
import { useState } from "react";
import * as icons from "react-icons/ai";

export default function Menu() {
	const menus = [
		{ name: "Anasayfa", url: "/dashboard", submenus: null },
		{
			name: "Raporlar",
			url: "/dashboard",
			submenus: [
				{ name: "Genel", url: "/dashboard" },
				{ name: "Yonetici Ozet Raporu", url: "/dashboard" },
				{ name: "TQ Raporu", url: "/dashboard" },
			],
		},
		{
			name: "Basvurular",
			url: "/dashboard",
			submenus: [
				{ name: "Tum Basvurular", url: "/dashboard" },
				{ name: "Eksiklik", url: "/dashboard" },
				{ name: "Birlik Incelemesinde", url: "/dashboard" },
				{ name: "Onaylanan", url: "/dashboard" },
				{ name: "Reddedilen", url: "/dashboard" },
			],
		},
		{
			name: "Proje Yonetimi",
			url: "/dashboard",
			submenus: [
				{ name: "Planlanan", url: "/dashboard" },
				{ name: "Planlanmamis", url: "/dashboard" },
			],
		},
		{
			name: "Talepler",
			url: "/dashboard",
			submenus: [
				{ name: "Tum Taleper", url: "/dashboard" },
				{ name: "Basvurus Yapilan", url: "/dashboard" },
				{ name: "Basvurus Yapilmayan", url: "/dashboard" },
			],
		},
		{ name: "Talep Onay", url: "/dashboard", submenus: null },
		{ name: "Limitler", url: "/dashboard", submenus: null },
		{
			name: "Ayarlar",
			url: "/dashboard",
			submenus: [
				{ name: "Kullanicilar", url: "/dashboard" },
				{ name: "Senkronizasyon", url: "/dashboard" },
				{ name: "TQ Bilgileri", url: "/dashboard" },
				{ name: "Sifre Guncelle", url: "/dashboard" },
			],
		},
		{ name: "Firma Bilgileri", url: "/dashboard", submenus: null },
		{ name: "Cikis", url: "/", submenus: null },
	];

	const [index, setIndex] = useState(1);
	const handeIsActive = (key) => {
		setIndex(key == index ? -1 : key);
	};

	return (
		<div className="w-full h-full flex items-center justify-center font-semibold">
			<nav className="w-full h-full flex flex-col gap-3 p-4 font-sans">
				{menus.map((menu, key) => (
					<>
						<NavLink
							key={key}
							to={menu.url}
							className={`text-slate-200 hover:text-white flex items-center gap-2 ${
								key === index ? "text-white" : ""
							}`}
							onClick={() => handeIsActive(key)}
						>
							{menu.name}
							{menu.submenus &&
								(key == index ? (
									<icons.AiFillCaretUp />
								) : (
									<icons.AiFillCaretDown />
								))}
						</NavLink>
						{menu.submenus && (
							<SubMenu submenu={menu.submenus} isactive={key === index} />
						)}
					</>
				))}
			</nav>
		</div>
	);
}
