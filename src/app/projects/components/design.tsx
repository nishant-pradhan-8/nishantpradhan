import Image from "next/image";
interface DesignProject {
  id: number;
  projectName: string
  projectDescription: string
  dribbleUrl: string;
  placeholder:string;
}
export default function Design() {
  const designProjects: DesignProject[] = [
    {
        id: 1,
        projectName: "Eight's Advertising (Agency Website Design)",
        projectDescription:"A  web design for online agencies like social media marketing agency",
        dribbleUrl:
          "https://dribbble.com/shots/25844090-Agency-Website-Design?utm_source=Clipboard_Shot&utm_campaign=webdesigner_nishant&utm_content=Agency%20Website%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=webdesigner_nishant&utm_content=Agency%20Website%20Design&utm_medium=Social_Share",
        placeholder:"/images/SSMADesign.png"
      },
    {
      id: 2,
      projectName: "Street Light Restaurant (Restaurant Website Design)",
      projectDescription:"Simple Web design for a Restaurant Business",
      dribbleUrl:
        "https://dribbble.com/shots/25844058-Restaurant-Website-Design?utm_source=Clipboard_Shot&utm_campaign=webdesigner_nishant&utm_content=Restaurant%20Website%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=webdesigner_nishant&utm_content=Restaurant%20Website%20Design&utm_medium=Social_Share",
        
        placeholder:"/images/slr.png"
    },
   
    {
      id: 3,
      projectName: "Luxe Furnishing (Furnishing Business Website Design)",
      projectDescription:"Modern web design for a Furnishing Business",
      dribbleUrl:
        "https://dribbble.com/shots/25844110-Furnishing-Business-Website-Design?utm_source=Clipboard_Shot&utm_campaign=webdesigner_nishant&utm_content=Furnishing%20Business%20Website%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=webdesigner_nishant&utm_content=Furnishing%20Business%20Website%20Design&utm_medium=Social_Share",
        placeholder:"/images/luxe.png"
    },
    {
      id: 4,
      projectName: "Cozy (Restaurant Website Design)",
      projectDescription:"Smple web design for a Restaurant Business",
      dribbleUrl:
        "https://dribbble.com/shots/25844069-Restaurant-Website-Design?utm_source=Clipboard_Shot&utm_campaign=webdesigner_nishant&utm_content=Restaurant%20Website%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=webdesigner_nishant&utm_content=Restaurant%20Website%20Design&utm_medium=Social_Share",
        placeholder:"/images/cozy.png"
    },
  ];
  return (
    <div>
      <h2 className="text-3xl mt-8 mb-4 max-[1263px]:text-center">Design Projects</h2>{" "}
      <div className="flex flex-row justify-start flex-wrap gap-4  max-[1263px]:justify-center">
        {designProjects.map((project) => (
          <div
            key={project.id}
            className="border-[2px] border-gray-500 w-[400px] transition-transform duration-300 ease-in-out hover:scale-102 max-[648px]:w-full  rounded-2xl flex  flex-col "
          >
              <Image
              className="rounded-2xl"
                                    src={project.placeholder}
                                    alt="email"
                                    width={800}
                                    height={800}
                                  />
            <div className="m-4 flex  flex-col gap-2">
            <h3 className="text-2xl font-semibold">
              {project.projectName}
            </h3>
            <p className="text-xl">
                  {project.projectDescription}
                </p>
            <div  className="flex flex-row flex-wrap gap-2">
              <div className="bg-white text-black px-2  rounded-2xl flex items-center text-[1rem] justify-center gap-2">
                <div className="w-[8px] h-[8px] bg-black rounded-full"></div>
                Figma
              </div>
              <div className="bg-white text-black px-2 rounded-2xl flex items-center text-[1rem] justify-center gap-2">
                <div className="w-[8px] h-[8px] bg-black rounded-full"></div>
               Webflow
              </div>
            </div>

            <div className="flex flex-row items-center gap-2">
              <a target="_blank" href={project.dribbleUrl} className="bg-gray-200 flex flex-row items-center gap-2 text-black p-2 px-4 cursor-pointer rounded-4xl  hover:bg-gray-300 mt-2" >
                <Image
                  src="/images/design.svg"
                  width={25}
                  height={25}
                  alt="live-logo"
                />
                See Full Design
              </a>
            </div>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
}
