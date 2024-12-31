import CardAboutMe from "@/components/card/aboutme";
import CardProjects from "@/components/card/projects";
import CardSkills from "@/components/card/skills";
import Footer from "@/components/section/footer";

export default function Home() {
	return (
		<div className="flex justify-center gap-[100px] flex-col items-center mt-[100px]">
			<CardAboutMe />
			<div className="flex flex-col w-[500px]  p-8 gap-4 items-center">
				<h3 className="text-2xl">main_skills</h3>
				<CardSkills variant="main" />
			</div>
			<div className="flex flex-col w-[500px]  p-8 gap-7 items-center">
				<h3 className="text-2xl">featured_projects</h3>
				<CardProjects variant="main" />
			</div>
			<Footer />
		</div>
	);
}
