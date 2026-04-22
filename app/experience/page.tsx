import CardSkills from "../components/card/skills";
import TimelineEntry from "../components/card/timeline-entry";

export default function experience() {
  return (
    <div>
      <div className="flex flex-col items-center w-[300px] lg:w-[500px] gap-24 px-2">
        <div className="space-y-[100px]">
          <TimelineEntry title="work experience" category="work" />
          <TimelineEntry title="learning experience" category="learning" />
        </div>
        <div>
          <div className="flex w-full justify-center items-center mb-12">
            <h1 className="font-bold">skills</h1>
          </div>
          <CardSkills variant="all" />
        </div>
      </div>
    </div>
  );
}
