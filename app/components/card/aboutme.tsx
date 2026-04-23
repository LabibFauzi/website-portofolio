import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";

export default function CardAboutMe() {
  return (
    <div className="flex flex-col border border-border p-8 gap-4 rounded">
      <div className="flex w-full justify-between gap-2">
        <h3 className="lg:text-2xl text-xl">labib_fauzi</h3>
        <div className="flex gap-2">
          <Link href={"https://github.com/LabibFauzi"} target="_blank"><img src="/icons/github.svg" alt="" className="w-8 h-8" /></Link>
          <Link href={"https://www.instagram.com/labib.fauzi/"} target="_blank"><img src="/icons/instagram.svg" alt="" className="w-7 h-7" /></Link>
          <Link href={"https://www.linkedin.com/LabibFauzi"} target="_blank"><img src="/icons/linkedin.svg" alt="" className="w-7 h-7" /></Link>
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
      <p className="text-xs leading-loose">
        I am a student with a strong interest in software development. I have been exploring programming for about 4 years and have gained approximately 1 year of internship experience in the industry.
      </p>
      <Button className="">
        resume
        <Image src="/icons/resume.svg" alt="resume" width={15} height={15} />
      </Button>
    </div>
  );
}
