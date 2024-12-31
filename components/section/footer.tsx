export default function Footer() {
	return (
		<footer className="flex flex-col items-center justify-center gap-4 p-8">
			<h3 className="text-xs">@2024 labib fauzi | website portofolio </h3>
			<div className="text-xs flex items-center gap-1 ">
				create with
				<span>
					<img src="/icons/heart.svg" alt="heart" />
				</span>
				using nextjs . look at some my
				<span>
					<img src="/icons/code.svg" alt="code" />
				</span>
				on github
			</div>
		</footer>
	);
}
