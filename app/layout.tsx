import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/section/footer";
import Search from "./components/section/search";
import SideMenu from "./components/section/sidemenu";

export const metadata: Metadata = {
  title: "labib.fauzi",
  description: "Website portfolio of Me",
  icons: "/icons/icons.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="scrollbar font-fira">
        <div>
          <Search />
          <SideMenu />
          <div className="flex justify-center gap-[100px] flex-col items-center mt-[100px]">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
