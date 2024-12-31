import { BadgeData } from "@/app/constant/index";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface SkillsProps {
	variant?: "main" | "all";
}
export default function CardSkills({ variant }: SkillsProps) {
	const displayBadges =
		variant === "main"
			? ["lang", "framework", "tool"].flatMap((type) =>
					BadgeData.filter((badge) => badge.type === type).slice(0, 3),
				)
			: variant === "all"
				? BadgeData
				: [];

	return (
		<div className="flex flex-wrap gap-2 justify-center">
			{displayBadges.map((item) => (
				<Badge key={item.name}>
					<Image src={item.src} alt={item.name} width={15} height={15} />
					<p className="text-xs text-text-suspended">{item.name}</p>
				</Badge>
			))}
		</div>
	);
}
