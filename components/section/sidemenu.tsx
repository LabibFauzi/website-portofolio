"use client";
import { MenuItems } from "@/app/constant/index";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function SideMenu() {
	const pathName = usePathname();

	const activeLinkIndex = useMemo(() => {
		const pathToIndexMap: { [key: string]: number } = {
			"/": 0,
			"/about_me": 1,
			"/projects": 2,
			"/experience": 3,
			"/contact": 4,
		};

		return pathToIndexMap[pathName] ?? 0;
	}, [pathName]);

	return (
		<nav className="fixed flex flex-col justify-center h-full gap-10">
			{MenuItems.map((item, index) => (
				<Link key={item.name} href={item.href} className="group inline-block">
					<li>
						<span
							className={`
                              nav-link 
                              ${
																activeLinkIndex === index
																	? "nav-link-active"
																	: "nav-link-inactive"
															}
                          `}
						>
							{item.name}
						</span>
					</li>
				</Link>
			))}
		</nav>
	);
}
