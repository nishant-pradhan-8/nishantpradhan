import { DevelopmentProject } from "../data/db";
import { developmentProjects } from "../data/db";
import Image from "next/image";
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const project = (await params).project;

  const associatedProject: DevelopmentProject | null =
    developmentProjects.find((proj) => proj.id === Number(project)) || null;
  return (
    <div className="p-2">
      <div className="my-12 flex flex-col gap-4 items-center">
        <h1 className={` text-center text-4xl `}>
          {associatedProject?.projectName || "Page not found"}
        </h1>
        <div className="w-full  ">
          <p className="text-center text-2xl max-w-[768px] m-auto">
            {associatedProject?.projectDescription}
          </p>
          <div className="flex flex-row w-full  justify-center gap-4 mt-4 ">
            <a
              target="_blank"
              href={associatedProject?.projectUrl || "#"}
              className="bg-gray-200 flex flex-row items-center gap-2 text-[1rem] text-black p-2 px-4 cursor-pointer rounded-4xl max-[375px]:px-2 hover:bg-gray-300"
            >
              <Image
                src="/images/live.svg"
                width={25}
                height={25}
                alt="live-logo"
              />
              Live Website
            </a>
            <a
              target="_blank"
              href={associatedProject?.projectGithub}
              className="group bg-transparent hover:bg-white hover:text-black items-center border-[1px] text-[1rem] flex flex-row gap-2 text-white p-2 px-6 cursor-pointer rounded-4xl max-[375px]:px-2"
            >
              <Image
                className="group-hover:brightness-0 transition-all duration-300"
                src="/images/github-white.svg"
                width={25}
                height={25}
                alt="github-logo"
              />
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-col justify-center">
        <h2 className="text-3xl mb-2 text-center">Website Images</h2>
        <div className="flex flex-row flex-wrap gap-4 justify-center   ">
          {associatedProject?.images &&
            associatedProject?.images.map((img, i) => (
              <Image
                key={i}
                className=" transition-transform duration-300 ease-in-out hover:scale-102"
                src={`/images/${img}`}
                width={500}
                height={500}
                alt="images"
              />
            ))}
        </div>
      </div>
    </div>
  );
}