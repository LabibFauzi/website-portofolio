import { BadgeData } from "@/app/constant/index";
import { ProjectData } from "@/app/constant/index";
import Image from "next/image";
import { Badge } from "../ui/badge";

interface ProjectsProps {
	variant?: "main" | "all";
}

export default function CardProjects({ variant }: ProjectsProps) {
	const displayProject =
		variant === "main"
			? ProjectData.slice(0, 3)
			: variant === "all"
				? ProjectData
				: [];

	const getProjectBadges = (techs: string[]) =>
		BadgeData.filter((badge) => techs.includes(badge.name));

	return (
		<div className="flex flex-col gap-7">
			{displayProject.map((project) => (
				<div
					key={project.title}
					className="flex bg-secondary p-4 flex-col gap-5  rounded-lg"
				>
					<div className="flex flex-col items-center gap-2">
						<div className="w-[400px] h-[200px] flex">
							<Image
								src={project.src}
								alt={project.title}
								width={400}
								height={200}
								className="rounded object-top object-cover"
								quality={100}
							/>
						</div>
						<div>
							<h3 className="text-lg text-text-primary">{project.title}</h3>
							<p className="text-sm text-text-primary">{project.subtittle}</p>
						</div>
					</div>
					<div className="flex flex-wrap gap-2">
						{getProjectBadges(project.tech).map((badge) => (
							<Badge key={badge.name}>
								<Image
									src={badge.src}
									alt={badge.name}
									width={15}
									height={15}
								/>
								<p className="text-xs text-text-suspended">{badge.name}</p>
							</Badge>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
