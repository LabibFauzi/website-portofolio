import { timelineData } from "@/app/constant";

export default function TimelineEntry({ title, category }: { title: string, category: string }) {
  const filteredData = timelineData.filter(item => item.category === category);

  return (
    <div>
      <h2 className="mb-6">{title}</h2>
      <div className="relative border-l border-gray-700 ml-2 space-y-10">
        {filteredData.map(item => (
          <div key={item.id} className="relative pl-6 space-y-2">
            <div className="absolute -left-1 top-0 h-2 w-2 rounded-full bg-white">{" "}</div>
            <div className=" text-sm">{item.year}</div>
            <h3 className=" text-sm font-bold">{item.title}</h3>
            <p className="text-xs text-">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
