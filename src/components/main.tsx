import { Iceland } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Contact from "./contact";
export const iceland = Iceland({
  weight: "400",
  subsets: ["latin"],
});

export default function Main() {
  return (
    <div className="  flex flex-col justify-between gap-16">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center border-[1px] border-gray-500 p-2 py-0 rounded-4xl">
          <p className=" font-sans text-blue-400">
            Pokhara, <span className="text-red-400">Nepal</span>
          </p>
        </div>
        <div className="flex flex-row gap-2 items-center border-[1px] border-gray-500 p-2 py-0 rounded-4xl">
          <div className="w-[10px] h-[10px] rounded-full bg-green-500"></div>
          <p className=" font-sans">Availiable for Work</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <h1 className={`${iceland.className} text-center text-6xl font-semibold `}>
          NISHANT PRADHAN
        </h1>
        <h2 className="text-3xl text-center">FullStack Web Developer.</h2>
        <div className="flex flex-row  gap-4">
          <a
            target="_blank"
            href="https://github.com/nishant-pradhan-8"
            className="bg-gray-200 transition-transform duration-300 ease-in-out hover:scale-110 text-xl flex flex-row items-center gap-2 text-black p-2 px-6 cursor-pointer rounded-4xl"
          >
            <Image
              src="/images/github.svg"
              width={25}
              height={25}
              alt="github-logo"
            />
            GitHub
          </a>

          <Link
            href="/projects"
            className="group bg-transparent items-center border-[1px] transition-transform duration-300 ease-in-out hover:scale-110  flex text-xl flex-row gap-2 text-white p-2 px-6 cursor-pointer rounded-4xl hover:bg-white hover:text-black"
          >
            <Image
              className="group-hover:brightness-0 transition-all duration-300"
              src="/images/projects.svg"
              width={25}
              height={25}
              alt="project-logo"
            />
            Projects
          </Link>
        </div>
        <div className="flex flex-col  items-center">
          <div className="flex flex-row gap-4 flex-wrap justify-center">
            <Image
              className="transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
              title="MongoDB"
              src="/images/mongodb.svg"
              alt="Mongodb-logo"
              width={40}
              height={40}
            />
            <Image
              className="transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
              title="Express Js"
              src="/images/express.svg"
              alt="express-logo"
              width={40}
              height={40}
            />
            <Image
              className="transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
              title="Next Js"
              src="/images/nextjs.svg"
              alt="nextjs-logo"
              width={40}
              height={40}
            />
            <Image
              className="transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
              title="Node Js"
              src="/images/nodejs.svg"
              alt="nodejs-logo"
              width={40}
              height={40}
            />
             <Image
              className="transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
              title="Php"
              src="/images/php.svg"
              alt="php-logo"
              width={50}
              height={50}
            />
             <Image
              className="transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
              title="laravel"
              src="/images/laravel.svg"
              alt="laravel-logo"
              width={40}
              height={40}
            />
            <Image
              className="transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
              title="Figma"
              src="/images/figma.svg"
              alt="nodejs-logo"
              width={40}
              height={40}
            />
            <Image
              className="transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer "
              title="Webflow"
              src="/images/webflow.svg"
              alt="nodejs-logo"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
     <Contact />
    </div>
  );
}
