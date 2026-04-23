import CardSkills from "../components/card/skills";
import TimelineEntry from "../components/card/timeline-entry";

export default function experience() {
  return (
    <div>
      <div className="flex flex-col items-center w-[300px] lg:w-[500px] gap-7">
        <h1 className="text-2xl underline">experience</h1>
        <div className="space-y-20">
          <TimelineEntry title="work experience" category="work" />
          <TimelineEntry title="learning experience" category="learning" />
        </div>
        <div className="space-y-7">
          <h1 className="font-bold text-center">skills</h1>
          <CardSkills variant="all" />
        </div>
      </div>
    </div>
  );
}
