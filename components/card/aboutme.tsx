import Image from "next/image";
import { Button } from "../ui/button";

export default function CardAboutMe() {
	return (
		<div className="flex flex-col w-[550px] border border-border p-8 gap-4 rounded">
			<div className="flex w-full justify-between">
				<h3 className="text-2xl">labib_fauzi</h3>
				<div className="flex gap-2">
					<Image
						src="/icons/linkedin.svg"
						alt="linkedin"
						width={20}
						height={20}
					/>
					<Image
						src="/icons/instagram.svg"
						alt="instagram"
						width={20}
						height={20}
					/>
					<Image src="/icons/github.svg" alt="github" width={20} height={20} />
				</div>
			</div>
			<div className="flex gap-2 pl-2 items-center">
				<Image src="/icons/code.svg" alt="code" width={15} height={15} />
				<p className="text-sm">frontend . web_design</p>
			</div>
			<div className="flex gap-2 pl-2 items-center">
				<Image
					src="/icons/location.svg"
					alt="location"
					width={15}
					height={15}
				/>
				<p className="text-sm">semarang . central_java . indonesia</p>
			</div>
			<p className="text-xs">
				im 18 boy website developer especially frontend developer. code in a 3
				year and have experience in industry about 1 year.
			</p>
			<Button className="">
				resume
				<Image src="/icons/resume.svg" alt="resume" width={15} height={15} />
			</Button>
		</div>
	);
}
