import Image from "next/image";
interface DevelopmentProject{
    id:number
    projectName:string
    projectDescription:string
    techUsed:string[]
    projectUrl:string
    projectGithub:string
}
export default function Development() {
  const developmentProjects:DevelopmentProject[] = [
    {
      id: 1,
      projectName: "Study Buddyy (Study Management Application)",
      projectDescription:
        "An application that allows students to organize and manage their study materials in one place, connect with friends, and share study resources with eachother. It also includes additional features like event scheduling.",
      techUsed: ["Mongodb", "ExpressJs", "NextJs", "TypeScript", "Firebase"],
      projectUrl: "https://study-buddyy.vercel.app",
      projectGithub:"https://github.com/nishant-pradhan-8/study-buddy"
    },
    {
      id: 2,
      projectName: "Link Sharing Application",
      projectDescription:
        "A web app that allows users to organize and manage URLs of their social media and other website profiles in one place. Users can create accounts and share their profile link where reciever will have access to all the sender's social profiles. ",
      techUsed: ["React Js",  "Firebase"],
      projectUrl: "https://nishant-pradhan-8.github.io/link-sharing-app",
      projectGithub:'https://github.com/nishant-pradhan-8/link-sharing-app'
    },
    {
      id: 3,
      projectName: "Hangman Game",
      projectDescription:
        "A classic Hangman game where user will guess the correct word and if they are able to guess the correct word within the limited chances, They Win!",
      techUsed: ["React Js"],
      projectUrl: "https://nishant-pradhan-8.github.io/hangman-game/",
      projectGithub:"https://github.com/nishant-pradhan-8/hangman-game"
    },
    {
      id: 4,
      projectName: "Quiz Web App",
      projectDescription:
        "A quiz application where users can test their knowledge on various technical topics through series of muliple-choice questions",
      techUsed: ["React Js"],
      projectUrl: "https://nishant-pradhan-8.github.io/quiz-app/",
      projectGithub:"https://github.com/nishant-pradhan-8/quiz-app"
    },
  ];
  return (
    <div>
      <h2 className="text-3xl mt-8 mb-4 max-[1263px]:text-center">Development Project</h2>
      <div className="flex flex-row justify-start flex-wrap gap-4 max-[1263px]:justify-center">
        {
            developmentProjects.map((project)=>(
                <div key={project.id} className="border-[2px] border-gray-500 max-[848px]:max-w-[300px] max-[648px]:max-w-[100%]   max-w-[400px] p-4 rounded-2xl flex  flex-col gap-4 transition-transform duration-300 ease-in-out hover:scale-102">
                <h3 className="text-2xl font-semibold">
                  {project.projectName}
                </h3>
                <p className="text-xl">
                  {project.projectDescription}
                </p>
                <div className="flex flex-row flex-wrap gap-2">
                    {
                        project.techUsed.map((tech,i)=>(
                            <div key={i} className="bg-white text-black px-2 text-[1rem] rounded-2xl flex items-center justify-center gap-2">
                            <div className="w-[8px] h-[8px] bg-black rounded-full"></div>
                            {tech}
                          </div>
                        ))
                    }
                 
                </div>
                <div className="flex flex-row items-center gap-2">
                  <a target="_blank" href={project.projectUrl} className="bg-gray-200 flex flex-row items-center gap-2 text-[1rem] text-black p-2 px-4 cursor-pointer rounded-4xl max-[375px]:px-2 hover:bg-gray-300">
                    <Image
                      src="/images/live.svg"
                      width={25}
                      height={25}
                      alt="live-logo"
                    />
                    Live Website
                  </a>
                  <a target="_blank" href={project.projectGithub} className="group bg-transparent hover:bg-white hover:text-black items-center border-[1px] text-[1rem] flex flex-row gap-2 text-white p-2 px-6 cursor-pointer rounded-4xl max-[375px]:px-2">
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
            ))
        }
      
      </div>
    </div>
  );
}
