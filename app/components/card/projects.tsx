import { BadgeData, type ProjectCategory, ProjectData } from "@/app/constant/index";
import Image from "next/image";
import { Badge } from "../../components/ui/badge";

interface ProjectsProps {
  variant?: "main" | "all";
  category?: ProjectCategory;
}

export default function CardProjects({ variant, category }: ProjectsProps) {
  const filteredData = category
    ? ProjectData.filter((p) => p.category === category)
    : ProjectData;

  const displayProject =
    variant === "main"
      ? filteredData.slice(0, 3)
      : variant === "all"
        ? filteredData
        : filteredData;

  const getProjectBadges = (techs: string[]) =>
    BadgeData.filter((badge) => techs.includes(badge.name));

  return (
    <div className="flex flex-col gap-7">
      {displayProject.map((project) => (
        <div
          key={project.id}
          className="flex bg-secondary p-4 flex-col gap-5  rounded-lg"
        >
          <div className="flex flex-col gap-2">
            <div className="flex max-h-[200px]">
              <Image
                src={project.src}
                alt={project.title}
                width={400}
                height={200}
                className="rounded object-top object-cover"
                quality={100}
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-sm text-text-primary">{project.title}</h3>
              <p className="text-xs text-gray-300">{project.subtittle}</p>
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
                <p>{badge.name}</p>
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
