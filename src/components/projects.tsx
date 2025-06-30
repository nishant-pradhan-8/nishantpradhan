import Design from "./design";
import Development from "./development";

export default function Projects() {
  return (
    <>
      <div
        id="projects"
        className="flex flex-row mt-[150px] items-center  gap-4"
      >
        <h1 className="font-semibold text-4xl text-gray-200">/ Projects</h1>
        <div className="w-[100px] h-[0.1rem] bg-gray-500"></div>
      </div>
      <Development />
      <Design />
    </>
  );
}
