interface BadgeDataItem {
	name: string;
	src: string;
	type: "lang" | "framework" | "tool";
}

export const BadgeData: BadgeDataItem[] = [
	{
		name: "javascript",
		src: "badges/javascript.svg",
		type: "lang",
	},
	{
		name: "typescript",
		src: "badges/typescript.svg",
		type: "lang",
	},
	{
		name: "css",
		src: "badges/css.svg",
		type: "lang",
	},
	{
		name: "php",
		src: "badges/php.svg",
		type: "lang",
	},
	{
		name: "python",
		src: "badges/python.svg",
		type: "lang",
	},
	{
		name: "nextjs",
		src: "badges/nextjs.svg",
		type: "framework",
	},
	{
		name: "tailwind",
		src: "badges/tailwind.svg",
		type: "framework",
	},
	{
		name: "vite",
		src: "badges/vite.svg",
		type: "framework",
	},
	{
		name: "reactjs",
		src: "badges/react.svg",
		type: "framework",
	},
	{
		name: "laravel",
		src: "badges/laravel.svg",
		type: "framework",
	},
	{
		name: "git",
		src: "badges/git.svg",
		type: "tool",
	},
	{
		name: "vscode",
		src: "badges/vscode.svg",
		type: "tool",
	},
	{
		name: "powershell",
		src: "badges/powershell.svg",
		type: "tool",
	},
	{
		name: "figma",
		src: "badges/figma.svg",
		type: "tool",
	},
	{
		name: "drawio",
		src: "badges/drawio.svg",
		type: "tool",
	},
];

interface ProjectDataItem {
	title: string;
	subtittle: string;
	src: string;
	tech: string[];
}
export const ProjectData: ProjectDataItem[] = [
	{
		title: "wms . toko_lobo",
		subtittle: "warehouse management system for cloth company toko lobo.",
		src: "/projects/lobo.png",
		tech: ["vite", "tailwind", "javascript", "css"],
	},
	{
		title: "cms . rapier_technology",
		subtittle: "content management system for tech company rapier technology.",
		src: "/projects/cms-rapier.jpg",
		tech: ["nextjs", "tailwind", "javascript", "css"],
	},
	{
		title: "landingpage . rapier_techno logy",
		subtittle: "website landingpage for tech company rapier technology.",
		src: "/projects/landingpage.png",
		tech: ["nextjs", "tailwind", "javascript", "css"],
	},
	{
		title: "article . muslim_connect",
		subtittle: "website article and update news for muslims.",
		src: "/projects/muslim-conect.png",
		tech: ["nextjs", "tailwind", "typescript", "css"],
	},
	{
		title: "wms . 8vault",
		subtittle: "warehouse management system to manage items in warehouse.",
		src: "/projects/xvault.png",
		tech: ["reactjs", "figma", "javascript", "css"],
	},
	{
		title: "landingpage . pramuka",
		subtittle: "landingpage about pramuka activity in smk 8 semarang.",
		src: "/projects/pramuka.png",
		tech: ["javascript", "css", "figma", "vscode"],
	},
];

interface MenuItems {
	name: string;
	href: string;
}

export const MenuItems: MenuItems[] = [
	{
		name: "home",
		href: "/",
	},
	{
		name: "about_me",
		href: "/about_me",
	},
	{
		name: "projects",
		href: "/projects",
	},
	{
		name: "experience",
		href: "/experience",
	},
	{
		name: "contact",
		href: "/contact",
	},
];
