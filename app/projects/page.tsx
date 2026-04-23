import CardProjects from "../components/card/projects";

export default function projects() {
  return (
    <div className="flex flex-col items-center w-[300px] lg:w-[400px] gap-7">
      <h1 className="text-2xl underline">projects</h1>
      <div className="flex flex-col gap-4 items-center" >
        <h1>intern . project</h1>
        <CardProjects category="intern" />
      </div>
      <div className="flex flex-col gap-7 items-center">
        <h2>assignment . project</h2>
        <CardProjects category="assignment" />
      </div>
    </div>
  );
}
