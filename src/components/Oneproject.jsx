import { Link } from "lucide-react";

function Oneproject({ project }) {
  return (
    <div className="h-full rounded-2xl border border-gray-50 hover:shadow-orange-200 hover:shadow-lg transition-transform duration-300 hover:scale-102 ease-in-out">
      <div className="h-60 rounded-t-2xl  flex justify-center bg-orange-200 mb-2">
        <img
          className="w-72  mt-3 object-top object-cover"
          src={project.image}
          alt={project.name || "project image"}
        />
      </div>
      <div className="p-3 w-fit">
       <div className="flex items-center justify-between">
         <p className="w-fit py-1 px-2 border border-orange-400/80 rounded-3xl font-body text-xs text-orange-400 font-semibold mb-1">
          Web App
        </p>
        <a href={project.livelink}
         className="w-fit py-1 px-2 border border-white/30 rounded-md font-body text-xs text-orange-400 mb-1 flex gap-1 items-center"><Link className="size-3 stroke-white/50"/>Live link</a>
       </div>
        <h3 className="font-body font-bold text-xl leading-relaxed mb-1 text-white/80">{project.name}</h3>
        <p className="font-body text-sm text-gray-400 ">{project.description}</p>
      </div>
      <div className="p-3 flex flex-wrap gap-3"> 
        {project.stack.map((t) => (
          <button className="py-1 px-2 border text-orange-400 rounded-lg" key={t}>{t}</button>
        ))}
      </div>
    </div>
  );
}

export default Oneproject;
