import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Search from "@/components/section/search";
import SideMenu from "@/components/section/sidemenu";

const firaCode = Fira_Code({
	subsets: ["latin"],
	variable: "--font-fira-code",
});

export const metadata: Metadata = {
	title: "labib.fauzi",
	description: "Website portfolio of Me",
	icons: "/icons.svg",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={firaCode.variable}>
			<body className={`${firaCode.className} scrollbar`}>
				<Search />
				<div className="p-[50px]">
					<SideMenu />
					{children}
				</div>
			</body>
		</html>
	);
}
